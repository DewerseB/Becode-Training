<?php
$first_name = "Bastien";
$age = 33;
$eyes_color = "brown";
$family = array(
    0 => 'Ludivine',
    1 => 'Eline',
    2 => 'Christiane',
);
$hungry = false;
?>

<html>
    <head><title>Hi!</title></head>
    <body>
        <p>Hi! My name is <?=$first_name?>.</p>
        <p>I am <?=$age?> years old.</p>
        <p>My eyes are <?=$first_name?>.</p>
        <p>The first person in my family is <?=$family[0]?>.</p>
        <p>I'm hungry - <?php echo $hungry ? 'true' : 'false' ?></p>
    </body>
</html>