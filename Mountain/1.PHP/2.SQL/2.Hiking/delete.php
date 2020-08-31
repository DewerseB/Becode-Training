<?php
/**** Supprimer une randonnée ****/
    require './connect.php';
    $delHiking = "DELETE FROM hiking WHERE id = ?;";
    $prepAddReq = $pdo->prepare($delHiking);
    $prepAddReq->bindValue(1, $_GET['id'], PDO::PARAM_INT);
    $prepAddReq->execute();

    $prepAddReq = NULL;
    header("Location: http://" . $_SERVER['HTTP_HOST'] . rtrim(dirname($_SERVER['PHP_SELF']), '/\\') . "/read.php");
?>