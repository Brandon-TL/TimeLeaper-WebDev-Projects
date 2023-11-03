<?php
    include_once 'db_info.php';

    function openCon() {
        return new PDO(DSN, USER, PASSWORD);
    }
?>