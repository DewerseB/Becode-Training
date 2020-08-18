<html>
<head>
    <title>Number Maker</title>
    <link rel="stylesheet" href="./style.css"></style>
</head>
<body>
    <h1>Excuses generator</h1>
    <form method="post">
        <label for="childName">Name of the child </label><input type="" name="childName"><br>
        <label for="gender">Gender of the child</label>
        <input type="radio" name="gender" value="daughter" id="girl"><label for="girl">Girl</label>
        <input type="radio" name="gender" value="son" id="boy"><label for="boy">Boy</label><br>
        <label for="teacherName">Name of the teacher </label><input type="" name="teacherName"><br>
        <label for="reason">Reason</label><br>
        <input type="radio" name="reason" value="illness" id="illness"><label for="illness">Illness</label><br>
        <input type="radio" name="reason" value="death" id="death"><label for="death">Death of pet</label><br>
        <input type="radio" name="reason" value="noonecares" id="noonecares"><label for="noonecares">No one cares</label><br>
        <input type="radio" name="reason" value="aliens" id="aliens"><label for="aliens">Aliens</label><br>
        <input type="submit" name="submit" value="Get an excuse">
    </form>
    <section>
        <?php

        if (isset($_POST['childName']) && isset($_POST['gender']) && isset($_POST['teacherName']) && isset($_POST['reason'])) {
            $childName = $_POST['childName'];
            $gender = $_POST['gender'];
            $pronoun = ($_POST['gender'] == 'daughter') ? 'She' : 'He';
            $pronoun2 = ($_POST['gender'] == 'daughter') ? 'her' : 'his';
            $teacherName = $_POST['teacherName'];
            $reason = $_POST['reason'];
            $rand = random_int(0, 4);
            
            switch ($_POST['reason']) {
                case 'illness' :
                    $illness = ["$pronoun is sick and stuck in $pronoun2 bed fighting the flu.<br>That's $pronoun2 teddy bear name.<br>",
                        "$pronoun broke $pronoun2 arm by slipping on a banana.<br>$pronoun broke a banana by slipping on $pronoun2 arm.<br>",
                        "$pronoun has a gastro.<br>You clearly don't want to know more.<br>",
                        "$pronoun is stuck in the toilet ... literally.<br>We're currently looking for a way to open the door and free $pronoun2<br>",
                        "$pronoun has a sprain to the wrist.<br>Or was it to the ankle?<br>",
                    ];
                    $msg = $illness[$rand];
                    break;
                case 'death' :
                    $death = ["Kitty 1 The Mighty",
                        "Kitty 2 The Lovely",
                        "Kitty 3 The Sturdy",
                        "Kitty 4 The Doughty",
                        "Kitty 5 The Deadly",
                    ];
                    $msg = "$pronoun is too sad to attend school for now as <br>$pronoun2 beloved pet, $death[$rand], is dead tonight.<br>$childName is really 'unlucky' with pets.<br>";
                    break;
                case 'noonecares' :
                    $noonecares = ["$pronoun has swimming pool.<br>I don't think I need to say more.<br>",
                        "$pronoun has to attend the Horse Show Jumping.<br>And that's clearly more important than school.<br>",
                        "$pronoun doesn't give a s*** about school,<br>neither do I.<br>",
                        "It's such a lovely day,<br>$childName is playing outside.<br>",
                        "$pronoun has to attend the Horse Show Jumping.<br>And that's clearly more important than school.<br>",
                    ];
                    $msg = $noonecares[$rand];
                    break;
                case 'aliens' :
                    $aliens = ["$pronoun has been kidnapped by aliens.<br>$pronoun should come back soon enough ... I guess.<br>",
                        "$pronoun is playing with E.T.<br>Saving an alien is of high importance.<br>",
                        "$pronoun has discovered that Trump is an alien.<br>$pronoun must work with the governement to find the truth.",
                        "$childName is in fact an alien.<br>$pronoun is currently trying to eat us.<br>Please send help.<br>",
                        "$pronoun is hidding under $pronoun2 bed.<br>Mars is attacking us.<br>Save the president!<br>",
                    ];
                    $msg = $aliens[$rand];
                    break;
            }

            echo "<p>Dear $teacherName,</p><br>";
            echo "<p>I'm writing to inform you that my $gender $childName will be absent for a couple of days.</p>";
            echo "<p>$msg</p>";
            echo "<p>Sincerely,<br>Mr Bean</p>";
            $day = date("l", time());
            $date = date("d F Y", time());
            echo "<p>$day, the $date</p>";
        } else {
            echo "<p>Every element of the form is needed.</p>";
        }

        ?>
    </section>
</body>
</html>