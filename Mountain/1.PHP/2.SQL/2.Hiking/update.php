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
	<form action="" method="post">
		<div>
			<label for="name">Name</label>
			<input type="text" name="name" value="<?php echo isset($_GET['name']) ? $_GET['name'] : ''; ?>">
		</div>

		<div>
			<label for="difficulty">Difficulté</label>
			<select name="difficulty">
				<option value="très facile" <?php echo (isset($_GET['difficulty']) && $_GET['difficulty'] === 'très facile') ? 'selected' : ''; ?>>Très facile</option>
				<option value="facile" <?php echo (isset($_GET['difficulty']) && $_GET['difficulty'] === 'facile') ? 'selected' : ''; ?>>Facile</option>
				<option value="moyen" <?php echo (isset($_GET['difficulty']) && $_GET['difficulty'] === 'moyen') ? 'selected' : ''; ?>>Moyen</option>
				<option value="difficile" <?php echo (isset($_GET['difficulty']) && $_GET['difficulty'] === 'difficile') ? 'selected' : ''; ?>>Difficile</option>
				<option value="très difficile" <?php echo (isset($_GET['difficulty']) && $_GET['difficulty'] === 'très difficile') ? 'selected' : ''; ?>>Très difficile</option>
			</select>
		</div>
		
		<div>
			<label for="distance">Distance</label>
			<input type="text" name="distance" value="<?php echo isset($_GET['distance']) ? $_GET['distance'] : ''; ?>">
		</div>
		<div>
			<label for="duration">Durée</label>
			<input type="time" name="duration" value="<?php echo isset($_GET['duration']) ? $_GET['duration'] : ''; ?>">
		</div>
		<div>
			<label for="height_difference">Dénivelé</label>
			<input type="text" name="height_difference" value="<?php echo isset($_GET['height_difference']) ? $_GET['height_difference'] : ''; ?>">
		</div>
		<div>
			<label for="available">Ouverte</label>
			<select name="available">
				<option value="1" <?php echo (isset($_GET['available']) && $_GET['available'] === '1') ? 'selected' : ''; ?>>Oui</option>
				<option value="0" <?php echo (isset($_GET['available']) && $_GET['available'] === '0') ? 'selected' : ''; ?>>Non</option>
			</select>
		</div>
		<button type="submit" name="button">Envoyer</button>
		<?php

			if (isset($_POST['name']) && isset($_POST['difficulty']) && isset($_POST['distance']) && isset($_POST['duration']) && isset($_POST['height_difference']) && isset($_POST['available']) && isset($_GET['id'])) {
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
					$addHiking = "UPDATE hiking SET name = ?, difficulty = ?, distance = ?, duration = ?, height_difference = ?, available = ? WHERE id = ?;";
					$prepAddReq = $pdo->prepare($addHiking);
					$prepAddReq->bindValue(1, $_POST['name'], PDO::PARAM_STR);
					$prepAddReq->bindValue(2, $_POST['difficulty'], PDO::PARAM_STR);
					$prepAddReq->bindValue(3, $_POST['distance'], PDO::PARAM_INT);
					$prepAddReq->bindValue(4, $_POST['duration'], PDO::PARAM_STR);
					$prepAddReq->bindValue(5, $_POST['height_difference'], PDO::PARAM_INT);
					$prepAddReq->bindValue(6, $_POST['available'], PDO::PARAM_BOOL);
					$prepAddReq->bindValue(7, $_GET['id'], PDO::PARAM_INT);
					$prepAddReq->execute();

					$prepAddReq = NULL;
					print_r("<p>La randonnée a été modifiée avec succès.</p>");
				} catch (Exception $e) {
					print_r("<p>Cannot validate the form:<br>" . $e->getMessage() . "</p>");
				}
			}

		?>
	</form>
</body>
</html>
