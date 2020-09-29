<?php
/**
 * Series of exercises on PHP conditional structures.
*/


// 1.1 Clean your room Exercise 

$room_is_filthy = true;

if($room_is_filthy){
	echo "Yuk, Room is dirty : let's clean it up !";
	cleanup_room();
	echo "<br>Room is now clean!";
	$room_is_filthy = false;
} else {
	echo "<br>Nothing to do, room is neat.";
};

function cleanup_room() {

};


// 1.2 Clean your room Exercise, improved
echo "<br>";

// Create the array of possible states
$possible_states = ["health hazard", "filthy", "dirty", "clean", "immaculate"];

// When testing, change the index value to navigate to the possible array values
$room_filthiness = $possible_states[0]; 

if($room_filthiness == $possible_states[0]){
    echo "<br>Yuk, Room is Disgusting! Let's clean it up !";
} else if($room_filthiness == $possible_states[1]){
	echo "<br>Yuk, Room is filthy : let's clean it up !";
} else if($room_filthiness == $possible_states[2]){
	echo "<br>Yuk, Room is dirty : let's clean it up !";
// ...
} else {
	echo "<br>Nothing to do, room is neat.";
};


// 2. "Different greetings according to time" Exercise
echo "<br>";

$now = time();
$minutes = (date('H', $now) * 60) + date('i', $now);

// Test the value of $now and display the right message according to the specifications.
echo "<br>", date("Y-m-d h:i:sa", $now);
if ($minutes > 300 AND $minutes <= 540) {
    echo "<br>Good morning !";
} elseif ($minutes > 540 AND $minutes <= 720) {
    echo "<br>Good day !";
} elseif ($minutes > 720 AND $minutes <= 960) {
    echo "<br>Good afternoon !";
} elseif ($minutes > 960 AND $minutes <= 1260) {
    echo "<br>Good evening !";
} else {
    echo "<br>Good night !";
};


// 3. "Different greetings according to age" Exercise
// 4. "Display a different greeting according to the user's age and gender" Exercise
// 5. "Display a different greeting according to the user's age, gender and mothertongue" Exercise
?>
<br><br>
<form method="get" action="">
	<label for="age">Age</label>
	<input type="" name="age"><br>
    <label>Do you speak english?</label><br>
    <input type="radio" name="english" value="true" id="engY"><label for="engY">Yes</label>
    <input type="radio" name="english" value="false" id="engN"><label for="engN">No</label><br>
    <input type="radio" name="gender" value="f" id="btnf"><label for="btnf">F</label>
    <input type="radio" name="gender" value="m" id="btnm"><label for="btnm">M</label><br>
	<input type="submit" name="submit" value="Greet me now">
</form>
<?php

if (isset($_GET['age'])) {
    $surname = 'mister';
    $greetings = 'Hello';
    if (isset($_GET['gender'])) {
        if ($_GET['gender'] == 'f') {
            $surname = 'miss';
        };
    }
    if (isset($_GET['english'])) {
        if ($_GET['english'] == 'false') {
            $greetings = 'Aloha';
        };
    }
    if ($_GET['age'] < 12) {
        echo "<br>$greetings $surname kiddo!";
    } elseif ($_GET['age'] >= 12 AND $_GET['age'] < 18) {
        echo "<br>$greetings $surname Teenager !";
    } elseif ($_GET['age'] >= 18 AND $_GET['age'] < 115) {
        echo "<br>$greetings $surname Adult !";
    } else {
        echo "<br>Wow! Still alive ? Are you a $surname robot, like me ? Can I hug you ?";
    }
};


// 6. "The Girl Soccer team" Exercise
// 7. "Achieve the same, without the ELSE" Exercise
?>
<br><br>
<form method="get" action="">
	<label for="gstAge">Age</label>
	<input type="" name="gstAge"><br>
    <input type="radio" name="gstGender" value="f" id="btnGstF"><label for="btnGstF">F</label>
    <input type="radio" name="gstGender" value="m" id="btnGstM"><label for="btnGstM">M</label><br>
	<input type="submit" name="submit" value="Get me to the team">
</form>

<?php
    if (isset($_GET['gstAge']) AND isset($_GET['gstGender'])) {
        $result = "Sorry you don't fit the criteria";
        if ($_GET['gstAge'] >= 21 AND $_GET['gstAge'] <= 40 AND $_GET['gstGender'] == 'f') {
            $result = "Welcome to the team !";
        }
        echo $result;
    }


// 8. "School sucks!" Exercise
?>
<br><br>
<form method="get" action="">
	<label for="note">Note</label>
	<input type="" name="note"><br>
	<input type="submit" name="submit" value="Annotate">
</form>

<?php
    if (isset($_GET['note'])) {
        $annotation = "Too good to be true : confront the cheater!";
        if ($_GET['note'] < 5) {
            $annotation = "This work is really bad. What a dumb kid!";
        } elseif ($_GET['note'] >= 5 AND $_GET['note'] < 10) {
            $annotation = "This is not sufficient. More studying is required.";
        } elseif ($_GET['note'] == 10) {
            $annotation = "Barely enough!";
        } elseif ($_GET['note'] > 10 AND $_GET['note'] <= 14) {
            $annotation = "Not bad!";
        } elseif ($_GET['note'] > 14 AND $_GET['note'] <= 18) {
            $annotation = "Bravo, bravissimo!";
        }
        echo $annotation;
    }


?>