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

echo "Hello World!";

?>