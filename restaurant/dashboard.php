<?php

    session_start();

    if(isset($_SESSION['user_id']) =="") {
        header("Location: index.php");
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Info Dashboard | Tutsmake.com</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container-fluid wrapper">
  <div class="container-fluid login">
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="../">Restaurant Automation</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="../">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <?php if($_SESSION['user_role'] == 'restaurant') {?>
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
    <?php } ?>
    <?php if($_SESSION['user_role'] == 'user') {?>
        <li class="nav-item">
          <a class="nav-link" href="#">History</a>
        </li>
    <?php } ?>
    <?php if(isset($_SESSION['user_name'])=="") {?>
        <li class="nav-item">
          <a class="nav-link" href="register.php">Register</a>
        </li>
    <?php } ?>
      </ul>
    </div>
  </div>
</nav>  
    </div>
    <div class="container d-none">
        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Name :- <?php echo $_SESSION['user_name']?></h5>
                    <p class="card-text">Email :- <?php echo $_SESSION['user_email']?></p>
                    <p class="card-text">Mobile :- <?php echo $_SESSION['user_mobile']?></p>
                    <p class="card-text">Role :- <?php echo $_SESSION['user_role']?></p>
                    <a href="logout.php" class="btn btn-primary">Logout</a>
                    <?php if($_SESSION['user_role'] == 'restaurant') {?>
                        <a href="#">Dashboard</a> <?php } else {?>
                            <a href="#">History</a> <?php } ?>

                  </div>
                </div>
            </div>
        </div>       
    </div>
    <div class="container">
        <div class="row">
            
                <div class="dashboard-card">
                     <h5 class="card-title">Name :- <?php echo $_SESSION['user_name']?></h5>
                    <p class="card-text">Email :- <?php echo $_SESSION['user_email']?></p>
                    <p class="card-text">Mobile :- <?php echo $_SESSION['user_mobile']?></p>
                    <p class="card-text">Role :- <?php echo $_SESSION['user_role']?></p>
                    <a href="logout.php" class="btn btn-primary">Logout</a>
                    
                </div>
           
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>
