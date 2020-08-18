<?php

    $while = "";
    $i = 1;
    $for = "";

    while ($i <= 120) {
        $while = (empty($while)) ? "$i" : "$while, $i";
        $i++;
    }

    for ($j = 1; $j <= 120; $j++) {
        $for = (empty($for)) ? "$j" : "$for, $j";
    }

    print_r($while);
    echo '<br>';
    print_r($for);

?>