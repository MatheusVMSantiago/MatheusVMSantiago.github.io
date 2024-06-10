<?php

require __DIR__.'/Csv.php';

$arquivo = __DIR__.'/contatos/contatos_track.csv';

$dados = CSV::lerArquivo($arquivo, false, ',');

//print_r($dados);

foreach ($dados as $key => $indice) {
    echo $key . PHP_EOL;
    foreach ($indice as $informacao => $value) {        
        if ($informacao == 0) {
            echo $value . PHP_EOL;
        } else if ($informacao == 1) {
            echo $value . PHP_EOL;
        }
    }
}
