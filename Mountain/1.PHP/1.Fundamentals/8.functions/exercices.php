<?php

    // Capitalize first letter
    function capitalizeFirst($string) {
        return ucfirst($string);
    }

    $test = 'test';
    echo "$test becomes ";
    echo capitalizeFirst($test);


    // Date and sum
    function sum($x, $y) {
        return (is_numeric($x) && is_numeric($y)) ? (60*$x + $y) : "Error: argument is the not a number.";
    }

    $minutes = date('i');
    $seconds = date('s');
    echo '<pre>';
    $sum = sum($minutes, $seconds);
    print_r("$minutes min and $seconds sec = $sum sec");
    echo '</pre>';
    echo sum('NAN', 10);

?>