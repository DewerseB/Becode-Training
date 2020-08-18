<?php

    $text = "According to a researcher (sic) at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be at the right place. The rest can be a total mess and you can still read it without problem. This is because the human mind does not read every letter by itself but the word as a whole.";

    function shuffleInsideWord($text) {
        $words = preg_split('/\s/', $text);
        foreach ($words as $word) {
            if (strlen($word) > 3) {
                $lgt = (strpos($word, ',') != false OR strpos($word, '.') != false) ? 2 : 1;
                $start = $word[0];
                $shuffle = substr($word, 1, strlen($word) - $lgt - 1);
                $end = substr($word, strlen($word) - $lgt, $lgt);

                $shuffle = str_shuffle($shuffle);
                $word = "$start$shuffle$end";
            }
            echo "$word ";
        }
    }

    shuffleInsideWord($text);

?>