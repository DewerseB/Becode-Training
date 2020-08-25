<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
    <main>
        <?php

            require './assets/php/connect.php';

            $selectAll = 'SELECT * FROM meteo';
            $req = $pdo->query($selectAll);

            //var_dump($pdo->errorinfo());

            if ($req) {
                $table = "<table id='meteo-table'><tr><th>Ville</th><th>Haut</th><th>Bas</th></tr>";
                while ($row = $req->fetch()) {
                    $table = "{$table}<tr><td>{$row['ville']}</td><td>{$row['haut']}</td><td>{$row['bas']}</td></tr>";
                    //echo $row['ville'] . ' ' . $row['haut'] . '<br>';
                }
                $table = "{$table}</table><br>";
                echo $table;
            }

            $req->closeCursor();

            if (isset($_POST['form-ville']) && isset($_POST['form-haut']) && isset($_POST['form-bas'])) {
                $ville = $_POST['form-ville'];
                $haut = $_POST['form-haut'];
                $bas = $_POST['form-bas'];
                $addTown = 'INSERT INTO meteo (ville, haut, bas) VALUES (?, ?, ?);';
                $prepAddReq = $pdo->prepare($addTown);
                $prepAddReq->bindValue(1, $ville, PDO::PARAM_STR);
                $prepAddReq->bindValue(2, $haut, PDO::PARAM_INT);
                $prepAddReq->bindValue(3, $bas, PDO::PARAM_INT);
                $prepAddReq->execute();

                $prepAddReq = NULL;
            }

        ?>
        <form method="POST">
            <div><label for="form-ville">Ville </label><input type="text" maxlength="9" name="form-ville"></div>
            <div>
                <label for="form-haut">Haut </label><input type="number" max="99" min="-99" name="form-haut" class="form-number">
                <label for="form-bas">Bas </label><input type="number" max="99" min="-99" name="form-bas" class="form-number">
            </div>
            <input type="submit" name="submit" value="Ajouter une ville">
        </form>
    </main>
</body>
</html>