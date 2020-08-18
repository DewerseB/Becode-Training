<?php

    $web_development = [
        'frontend' => [],
        'backend' => [],
    ];

    $web_development['frontend'][] = 'xhtml';
    $web_development['backend'][] = 'Ruby on Rails';
    $web_development['frontend'][] = 'CSS';
    $web_development['frontend'][] = 'Flash';
    $web_development['frontend'][] = 'JavaScript';
    $web_development['frontend'][array_keys($web_development['frontend'], 'xhtml')[0]] = 'html';
    array_splice($web_development['frontend'], array_keys($web_development['frontend'], 'Flash')[0], 1);


    echo '<pre>';
    print_r($web_development);
    echo '</pre>';

?>