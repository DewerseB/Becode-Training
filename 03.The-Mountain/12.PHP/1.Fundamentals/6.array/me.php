<?php

    $me = [
        'firstname' => 'Bastien',
        'lastname' => 'Dewerse',
        'age' => 33,
        'street' => '1 rue du comptoir',
        'town' => '6000 Charleroi',
        'country' => 'Belgium',
    ];
    echo '<pre>';
    print_r($me);
    echo '</pre>';

    $me['hobbies'] = [
        'roller',
        'video games',
        'reading',
    ];
    echo '<pre>';
    print_r($me);
    echo '</pre>';

    $notme = [
        'firstname' => 'NotBastien',
        'lastname' => 'NotDewerse',
        'age' => 99,
        'street' => '0 rue du comptoir',
        'town' => '6000 Charleroi',
        'country' => 'Belgium',
        'hobbies' => ['board games', 'music', 'doing nothing'],
    ];
    echo '<pre>';
    print_r($notme);
    echo '</pre>';

    $me['notme'] = $notme;
    echo '<pre>';
    print_r($me);
    echo '</pre>';

    echo '<pre>';
    echo count($me['notme']['hobbies']);
    echo '</pre>';
    echo '<pre>';
    echo count($me['hobbies']);
    echo '</pre>';
    echo (count($me['notme']['hobbies']) + count($me['hobbies']));

    $me['hobbies'][] = 'taxidermy';
    $me['lastname'] = 'Durand';
    echo '<pre>';
    print_r($me);
    echo '</pre>';

    $soulmate = [
        'firstname' => 'Ludivine',
        'lastname' => 'Raymaeckers',
        'age' => 26,
        'street' => '1 rue du comptoir',
        'town' => '6000 Charleroi',
        'country' => 'Belgium',
        'hobbies' => ['horse riding', 'reading', 'video games'],
    ];

    $intersection = array_intersect($soulmate['hobbies'], $me['hobbies']);
    $fusion = array_values(array_unique(array_merge($soulmate['hobbies'], $me['hobbies'])));
    echo '<pre>';
    print_r($intersection);
    print_r($fusion);
    echo '</pre>';
?>