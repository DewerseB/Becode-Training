<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colyseum</title>
</head>
<body>
    <?php

        require './assets/php/connect.php';


        // Tous les clients
        echo "<h2>Tous les clients</h2>";

        $selectAllClients = 'SELECT * FROM clients';
        $req = $pdo->query($selectAllClients);

        if ($req) {
            $table = "<table><tr><th>ID</th><th>Lastname</th><th>Firstname</th><th>Birthday</th><th>Card</th><th>Card number</th></tr>";
            while ($row = $req->fetch()) {
                $table = "{$table}<tr>";
                foreach ($row as $index => $value) {
                    if (preg_match('/^\d*$/', $index) === 0) {
                        $table = "{$table}<td>{$value}</td>";
                    }
                }
                $table = "{$table}</tr>";
            }
            $table = "{$table}</table><br>";
            echo $table;
        }

        $req->closeCursor();


        // Tous les types de spectable
        echo "<h2>Tous les types de spectable</h2>";

        $selectAllShowtypes = 'SELECT * FROM showtypes';
        $req = $pdo->query($selectAllShowtypes);

        if ($req) {
            $table = "<table><tr><th>ID</th><th>Type</th></tr>";
            while ($row = $req->fetch()) {
                $table = "{$table}<tr>";
                foreach ($row as $index => $value) {
                    if (preg_match('/^\d*$/', $index) === 0) {
                        $table = "{$table}<td>{$value}</td>";
                    }
                }
                $table = "{$table}</tr>";
            }
            $table = "{$table}</table><br>";
            echo $table;
        }

        $req->closeCursor();


        // Les 20 premiers clients
        echo "<h2>Les 20 premiers clients</h2>";

        $selectXClients = 'SELECT * FROM clients LIMIT 20';
        $req = $pdo->query($selectXClients);

        if ($req) {
            $table = "<table><tr><th>ID</th><th>Lastname</th><th>Firstname</th><th>Birthday</th><th>Card</th><th>Card number</th></tr>";
            while ($row = $req->fetch()) {
                $table = "{$table}<tr>";
                foreach ($row as $index => $value) {
                    if (preg_match('/^\d*$/', $index) === 0) {
                        $table = "{$table}<td>{$value}</td>";
                    }
                }
                $table = "{$table}</tr>";
            }
            $table = "{$table}</table><br>";
            echo $table;
        }

        $req->closeCursor();


        // Les clients possédant une carte de fidélité
        echo "<h2>Les clients possédant une carte de fidélité</h2>";

        $selectALLWithCard = 'SELECT * FROM clients WHERE card=1';
        $req = $pdo->query($selectALLWithCard);

        if ($req) {
            $table = "<table><tr><th>ID</th><th>Lastname</th><th>Firstname</th><th>Birthday</th><th>Card</th><th>Card number</th></tr>";
            while ($row = $req->fetch()) {
                $table = "{$table}<tr>";
                foreach ($row as $index => $value) {
                    if (preg_match('/^\d*$/', $index) === 0) {
                        $table = "{$table}<td>{$value}</td>";
                    }
                }
                $table = "{$table}</tr>";
            }
            $table = "{$table}</table><br>";
            echo $table;
        }

        $req->closeCursor();


        // Nom et prénom des clients dont le nom commence par M
        echo "<h2>Nom et prénom des clients dont le nom commence par M</h2>";

        $selectNameStartWithM = 'SELECT lastname, firstname FROM clients WHERE lastname like "M%" ORDER BY lastname';
        $req = $pdo->query($selectNameStartWithM);

        if ($req) {
            while ($row = $req->fetch()) {
                echo "Nom : " . $row['lastname'] . "<br>";
                echo "Prénom : " . $row['firstname'] . "<br>";
            }
        }

        $req->closeCursor();


        // Tous les spectacles avec artiste, date et heure
        echo "<h2>Tous les spectacles avec artiste, date et heure</h2>";

        $selectAllShows = 'SELECT title, performer, date, startTime FROM shows';
        $req = $pdo->query($selectAllShows);

        if ($req) {
            while ($row = $req->fetch()) {
                echo $row['title'] . " par " . $row['performer'] . ", le " . $row['date'] . " à " . $row['startTime'] . "<br>";
            }
        }

        $req->closeCursor();


        // Tous les clients avec mise en page
        echo "<h2>Tous les clients avec mise en page</h2>";

        $selectAllClients = 'SELECT * FROM clients';
        $req = $pdo->query($selectAllClients);

        if ($req) {
            while ($row = $req->fetch()) {
                $client = "Nom : " . $row['lastName'] . "<br>Prénom : " . $row['firstName'] . "<br>Date de naissance : " . $row['birthDate'] . "<br>Carte de fidélité : ";
                $client = ($row['card'] === '1') ? $client . "Oui<br>Numéro de carte : " . $row['cardNumber'] . "<br><br>" : $client . "Non<br><br>";
                echo $client;
            }
        }

        $req->closeCursor();

    ?>
</body>
</html>