<form method="get" action="">
	<label for="note">Note</label>
	<input type="" name="note"><br>
	<input type="submit" name="submit" value="Annotate">
</form>

<?php
    if (isset($_GET['note'])) {
        $annotation = "Too good to be true : confront the cheater!";
        switch ($_GET['note']) {
            case 0: case 1: case 2: case 3: case 4:
                echo "This work is really bad. What a dumb kid!";
                break;
            case 5: case 6: case 7: case 8: case 9:
                echo "This is not sufficient. More studying is required.";
                break;
            case 10:
                echo "Barely enough!";
                break;
            case 11: case 12: case 13: case 14:
                echo "Not bad!";
                break;
            case 15: case 16: case 17: case 18:
                echo "Bravo, bravissimo!";
                break;
            default:
                echo "Too good to be true : confront the cheater!";
                break;
        }
        // if ($_GET['note'] < 5) {
        //     $annotation = "This work is really bad. What a dumb kid!";
        // } elseif ($_GET['note'] >= 5 AND $_GET['note'] < 10) {
        //     $annotation = "This is not sufficient. More studying is required.";
        // } elseif ($_GET['note'] == 10) {
        //     $annotation = "Barely enough!";
        // } elseif ($_GET['note'] > 10 AND $_GET['note'] <= 14) {
        //     $annotation = "Not bad!";
        // } elseif ($_GET['note'] > 14 AND $_GET['note'] <= 18) {
        //     $annotation = "Bravo, bravissimo!";
        // }
    }


?>