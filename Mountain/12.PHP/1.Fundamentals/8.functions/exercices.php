<?php

    // Capitalize first letter
    function capitalizeFirst($string) {
        return ucfirst($string);
    }

    $test = 'test';
    echo "$test becomes ";
    echo capitalizeFirst($test);


    echo "<hr>";
    // Date and sum

    function sum($x, $y) {
        return (is_numeric($x) && is_numeric($y)) ? (60*$x + $y) : "Error: argument is the not a number.";
    }

    $minutes = date('i');
    $seconds = date('s');
    echo '<pre>';
    $sum = sum($minutes, $seconds);
    print_r("$minutes min and $seconds sec = $sum sec<br>");
    print_r(sum('NAN', 10));
    echo '</pre>';


    echo "<hr>";
    // Initials

    function initials($text) {
        $text = ucwords($text);
        $words = preg_split('/\s/', $text);
        $initials = '';
        foreach ( $words as $word ) {
            $initials = "$initials$word[0]";
        }
        return $initials;
    }

    echo '<pre>';
    print_r(initials("In code we trust!"));
    echo '</pre>';


    echo "<hr>";
    // ae to æ

    function replaceAE($word) {
        return preg_replace('/(ae)/', 'æ', $word);
    }

    echo replaceAE('microsphaera');


    echo "<hr>";
    // æ to ae

    function resetAE($word) {
        return preg_replace('/(æ)/', 'ae', $word);
    }

    echo resetAE('microsphæra');


    echo "<hr>";
    // Feedback and default parameter

    function feedback($message, $class = 'info') {
        $type = ucfirst($class);
        $div = "<div class='$class'>$type: $message.</div>";
        return $div;
    }
    
    echo preg_replace('/</', '&lt;', feedback("Incorrect email address", "error"));
    echo feedback("Incorrect email address", "error");
    echo feedback("Default class");


    echo "<hr>";
    // Random words

    function generate2Words() {
        $template = "abcdefghijklmnopqrstuvwxyz";
        $letters1 = random_int(1, 5);
        $letters2 = random_int(7, 15);
        $word1 = "";
        $word2 = "";
        for ($i = 0; $i < $letters1; $i++) {
            $randomLetter = $template[random_int(0, strlen($template)-1)];
            $word1 = "$word1$randomLetter";
        }
        for ($j = 0; $j < $letters2; $j++) {
            $randomLetter = $template[random_int(0, strlen($template)-1)];
            $word2 = "$word2$randomLetter";
        }
        return "$word1 $word2";
    }

?>
<form method="post">
    <label>Words Generator</label><br>
    <label><?php if (isset($_POST['submit'])) {echo generate2Words();} ?></label><br>
    <input type="submit" name="submit" value="Generate">
</form>
<?php


    echo "<hr>";
    // Uncapitalize

    function uncapitalize($string) {
        $firstLetter = $string[0];
        $rest = substr($string, 1, strlen($string) - 1);
        $rest = strtolower($rest);
        return "$firstLetter$rest";
    }

    echo uncapitalize("STOP YELLING I CAN'T HEAR MYSELF THINKING!!");


    echo "<hr>";
    // Cones

    function calculate_cone_volume($ray, $height) {
        return (is_numeric($ray) && is_numeric($height)) ? ($ray * $ray * pi() * $height * (1/3)) : "Error: arguments are not a number.";
    }

    echo calculate_cone_volume(5,2);
?>