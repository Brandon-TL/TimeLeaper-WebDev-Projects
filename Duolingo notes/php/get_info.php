<?php
    include_once 'connect.php';

    $db_con = openCon();

    if (isset($db_con)) {
        $db_con->beginTransaction();
        try {
            $sql = 'SELECT * FROM `tabs_info`;';

            echo "</br>ok";
        } catch (\Throwable $th) {
            $db_con->rollBack();
            echo $th;
        }
    }
?>