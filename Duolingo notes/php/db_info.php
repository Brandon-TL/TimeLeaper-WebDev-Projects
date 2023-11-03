<?php
    // Definición de constantes relacionadas con la base de datos
    define("HOST", "localhost");
    define('USER', 'root');
    define('PASSWORD', '');
    define('DBNAME', 'duolingo');
    // Definición de driver para PDO
    define('DRIVER', 'mysql');
    define('DSN', DRIVER.':host='.HOST.';dbname='.DBNAME);
    define('OPTIONS', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
?>