<!DOCTYPE html>
<html>
<body>
 
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = htmlspecialchars($_REQUEST['firstname']);
    echo $firstname;
}
?>

</body>
</html>