<?php
    $servername='sql308.epizy.com';
    $username='epiz_26049614';
    $password='U71KFd1oKNM';
    $dbname = "epiz_26049614_my_db";
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
      if(!$conn){
          die('Could not Connect MySql Server:' .mysql_error());
        }
?>