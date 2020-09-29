<?php

    $pronouns = array ('I', 'You', 'He/She','We', 'You', 'They');
    $conjugation = "";

    foreach ( $pronouns as $pronoun ) {
        $conjugation = ($pronoun === 'He/She') ? $conjugation = "$conjugation $pronoun codes<br>" : $conjugation = "$conjugation $pronoun code<br>";
    }

    print_r($conjugation);

?>