<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Ajouter une randonnée</title>
	<link rel="stylesheet" href="css/basics.css" media="screen" title="no title" charset="utf-8">
</head>
<body>
	<a href="./read.php">Liste des données</a>
	<h1>Ajouter</h1>
	<form action="" method="get">
		<div>
			<label for="name">Name</label>
			<input type="text" name="name" value="">
		</div>

		<div>
			<label for="difficulty">Difficulté</label>
			<select name="difficulty">
				<option value="très facile">Très facile</option>
				<option value="facile">Facile</option>
				<option value="moyen">Moyen</option>
				<option value="difficile">Difficile</option>
				<option value="très difficile">Très difficile</option>
			</select>
		</div>

		<div>
			<label for="distance">Distance</label>
			<input type="text" name="distance" value="">
		</div>
		<div>
			<label for="duration">Durée</label>
			<input type="time" name="duration" value="">
		</div>
		<div>
			<label for="height_difference">Dénivelé</label>
			<input type="text" name="height_difference" value="">
		</div>
		<button type="submit" name="button">Envoyer</button>
		<?php

			if (isset($_POST['name']) && isset($_POST['difficulty']) && isset($_POST['distance']) && isset($_POST['duration']) && isset($_POST['height_difference'])) {
				try {
					foreach ($_POST as $index => $value) {
						switch ($index) {
							case 'distance': case 'height_difference':
								$_POST[$index] = filter_var(trim($value), FILTER_SANITIZE_NUMBER_FLOAT);
								if (strlen((string)$_POST[$index]) > 11) throw new Exception($index . " is too long.");
								if (strlen((string)$_POST[$index]) === 0) throw new Exception($index . " is required.");
							break;
							case 'name': case 'difficulty': case 'duration':
								$_POST[$index] = filter_var(trim($value), FILTER_SANITIZE_STRING);
								if (strlen((string)$_POST[$index]) === 0) throw new Exception($index . " is required.");
							break;
							default:
								$_POST[$index] = filter_var(trim($value), FILTER_SANITIZE_STRING);
							break;
						}
					}

					require './connect.php';
					$addHiking = 'INSERT INTO hiking (name, difficulty, distance, duration, height_difference) VALUES (?, ?, ?, ?, ?);';
					$prepAddReq = $pdo->prepare($addHiking);
					$prepAddReq->bindValue(1, $_POST['name'], PDO::PARAM_STR);
					$prepAddReq->bindValue(2, $_POST['difficulty'], PDO::PARAM_STR);
					$prepAddReq->bindValue(3, $_POST['distance'], PDO::PARAM_INT);
					$prepAddReq->bindValue(4, $_POST['duration'], PDO::PARAM_STR);
					$prepAddReq->bindValue(5, $_POST['height_difference'], PDO::PARAM_INT);
					$prepAddReq->execute();

					$prepAddReq = NULL;
					print_r("<p>La randonnée a été ajoutée avec succès.</p>");
				} catch (Exception $e) {
					print_r("<p>Cannot validate the form:<br>" . $e->getMessage() . "</p>");
				}
			}

		?>
	</form>
</body>
</html>