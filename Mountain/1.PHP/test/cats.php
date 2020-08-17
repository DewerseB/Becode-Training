<form method="POST">
    <button name="command" value="show_test">Say Hello</button>
    <button name="command" value="show_cats">Show Cats</button>
</form>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    switch ($_POST['command']) {
    case 'show_test':
        header('Location: index.php');
        break;
    case 'show_cats':
        header('Location: cats.php');
        break;
    }   
    exit;
}   

echo "<img src='https://camo.githubusercontent.com/f9b43986af515ac850dfa82609fb2ed6938bf1ac/687474703a2f2f6d65646961302e67697068792e636f6d2f6d656469612f6e734d5068574b3662667848712f67697068792e676966'>";

?>