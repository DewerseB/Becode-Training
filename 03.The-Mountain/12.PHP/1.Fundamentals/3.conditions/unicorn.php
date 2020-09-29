<form method="get" action="">
	<label for="kind">Are you a human, a cat or a unicorn ?</label><br>
	<input type="radio" name="kind" value="human" id="human"><label for="engY">Human</label>
    <input type="radio" name="kind" value="cat" id="cat"><label for="engN">Cat</label>
    <input type="radio" name="kind" value="unicorn" id="unicorn"><label for="btnf">Unicorn</label><br>
	<input type="submit" name="submit" value="Get Gif">
</form>

<?php

    if (isset($_GET['kind'])) {
        $gif = "https://media3.giphy.com/media/tJanDvSs3mQWA/giphy.gif?cid=ecf05e47950801bc52e8106422a76c4f261da388a2bbea34&rid=giphy.gif";
        $gif = ($_GET['kind'] == "cat") ? "https://media2.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" : $gif;
        $gif = ($_GET['kind'] == "unicorn") ? "https://media1.giphy.com/media/21F1TuLSxWPAY/giphy.gif" : $gif;
        echo "<img src='$gif'>";
    }

?>