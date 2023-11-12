<style>
    body {
        color: white;
        background-color: black;
    }
</style>
<?php
    include_once 'connect.php';

    $db_con = openCon();

    if (isset($db_con)) {
        $db_con->beginTransaction();
        try {
            $sql = 'SELECT * FROM `tabs_info`;';

            $result = $db_con->query($sql);

            if (!$result) {
                echo "No results";
            } else {
                while ($row = $result->fetch()) {
                    echo "$row[tab_id], $row[tab_name_es], $row[tab_name_en]</br>";
                }
            }
        } catch (\Throwable $th) {
            $db_con->rollBack();
            echo $th;
        }
    }
?>