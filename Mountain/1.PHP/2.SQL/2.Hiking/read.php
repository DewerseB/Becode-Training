<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Randonnées</title>
    <link rel="stylesheet" href="css/basics.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <a href="./create.php">Ajouter des données</a>
    <h1>Liste des randonnées</h1>
    <table>
      <!-- Afficher la liste des randonnées -->
      <?php
        require './connect.php';

        $selectAll = 'SELECT * FROM hiking';
        $req = $pdo->query($selectAll);
        //var_dump($pdo->errorinfo());

        if ($req) {
            $table = "<table id='hiking'><tr><th>Nom</th><th>Difficulté</th><th>Distance</th><th>Durée</th><th>Dénivelé</th><th>Ouverte</th></tr>";
            while ($row = $req->fetch()) {
                $table = "{$table}<tr><td>{$row['name']}</td><td>{$row['difficulty']}</td><td>{$row['distance']} km</td><td>" . date('H\hi', strtotime($row['duration'])) . "</td><td>{$row['height_difference']}m</td><td>" . (boolval($row['available']) ? 'Oui' : 'Non') . "</td>";
                $table = "{$table}<td><a href='update.php?id={$row['id']}&name={$row['name']}&difficulty={$row['difficulty']}&distance={$row['distance']}&duration={$row['duration']}&height_difference={$row['height_difference']}&available={$row['available']}'>update</a></td>";
                $table = "{$table}<td><a href='delete.php?id={$row['id']}'>delete</a></td></tr>";
            }
            $table = "{$table}</table><br>";
            echo $table;
        }

        $req->closeCursor();
      ?>
    </table>
  </body>
</html>