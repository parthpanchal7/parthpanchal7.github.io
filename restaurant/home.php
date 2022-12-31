<?php
session_start();

require_once "db.php";

if(isset($_SESSION['user_name'])=="") {
    echo '<script type="text/javascript">alert("Please Login First");</script>';
    header("Location: index.php");

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Restaurant Automation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
     <link rel="stylesheet" href="css/style.css">
</head>
<body>
      <div class="container-fluid wrapper">
    <div class="container-fluid login">
    
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Restaurant Automation</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <?php if($_SESSION['user_role']=="restaurant") {?>
        <li class="nav-item">
          <a class="nav-link" href="dashboard/">Dashboard</a>
        </li>
    <?php } if($_SESSION['user_role']=="user") {?>
        <li class="nav-item">
          <a class="nav-link" href="#">History</a>
        </li>

    <?php } if(isset($_SESSION['user_name'])=="") {?>
        <li class="nav-item">
          <a class="nav-link" href="registration.php">Register</a>
        </li>
    <?php } if(isset($_SESSION['user_name'])!="") {?>
        <li class="nav-item">
          <a class="nav-link" href="logout.php">Logout (<?php echo $_SESSION['user_name']?>)</a>
        </li>
    <?php } ?>
      </ul>
    </div>
  </div>
</nav>  
     <h1 style="color:white"><?php echo $_SESSION['user_role']; ?></h1>
    </div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>
