<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Burger House</title>
	<link rel="icon" type="image/png" href="images/fevikon.png" sizes="96x96">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="stylesheet" href="style/style.css">
</head>
<body>
<!-- <?php 
// $nameerror ="";
// $fnm ="";
// $email ="";
// $dates ="";
// $times ="";
// $people ="";
// if(isset($_POST["name"])) {
// $fnm=$_POST['name'];}
// if(isset($_POST["email"])) {
// $email=$_POST['email'];}
// if(isset($_POST["dates"])) {
// $dates=$_POST['dates'];}
// if(isset($_POST["times"])) {
// $times=$_POST['times'];}
// if(isset($_POST["people"])) {
// $people=$_POST['people'];}

// if (!preg_match ("/^[a-zA-z]*$/", $fnm) ) {  
//     $nameerror = "Only alphabets and whitespace are allowed.";
// }
// elseif (!preg_match ("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*$/", $email) ){ 
//     $mailerror = "invalid email address.";
// }
// else
// {
// 	echo "<script type='text/javascript'>alert('Thank you" ." " . $fnm . " ". "We will Get Back to you ASAP'); 
// location.href='http://parth.epizy.com/burger';
// </script>";
//}
?> -->
<!-- banner area -->
<section id="main-banner">
<div class="container-fluid menu-fluid">
<nav class="navbar navbar-light">
  <div class="container-fluid mt-3 menu-bar">
    <a class="navbar-brand" href="#">
    	<img src="images/logo.png" alt="logo" class="d-none d-lg-block">
    </a>
    <a href="tel:+1 234 567 890" class="del-link"><img src="images/del-icon.png" alt="delivery logo">Express Delivery +1 234 567 890</a>
  </div>
</nav>

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid nav-cont">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="fas fa-stream"></i></span>
    </button>
    <img src="images/logo.png" alt="logo" class="resp-logo">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#popular">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#events">events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#reservation">book a table</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
<section id="home">
	
	<div class="banner-area mt-lg-5 mt-0">
		<div class="container">
			<div class="row">
				<div class="col-md-6 align-self-center main-heading">
					<div class="banner-text">
						<span>it is a good time for the great taste of a burgers</span>
						<h1>burger</h1>
						<h3>week</h3>
					</div>
				</div>
				<div class="col-md-6">
					<div class="banner-img">
						<img src="images/burgernew.png" alt="banner img" class="img-fluid">
					</div>
					<div class="price-div">
						<div class="outer-circle">
							<div class="inner-circle">
								<div class="price-text">
									<h1>$5</h1><h5>.49</h5>
									<span>only</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</section>
</section>
<!-- banner area ends -->
<!-- populae section -->
<section id="popular">
	<div class="popular mt-5">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6">
					<div class="imgdv1 hoverdv">
						<img src="images/burger-big.png" alt="burger" class="img-fluid">

						<div class="caption">
							<p>try it today</p>
							<h1>most popular burger</h1>
						</div>
					</div>
				</div>
				<div class="col-md-6 mt-3 mt-md-0" style="position: relative;">
					<div class="imgdv2 hoverdv">
						<img src="images/burger-small.png" alt="burger" class="img-fluid">
						<div class="caption">
							<p>try it today</p>
							<h1>more fun more taste</h1>
						</div>
					</div>
					<div class="imgdv3 hoverdv">
						<img src="images/burger-small1.png" alt="burger" class="img-fluid">
						<div class="caption">
							<p>try it today</p>
							<h1>fresh & chilli</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- popular section -->
<!-- choose section -->

<section id="choose">
	<div class="choose-sec mt-5">
		
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="text-center choose-text-btn">
						<span class="">always tasty burger</span>
						<h1 class="heading-big mt-3">
							choose & Enjoy
						</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore magnam id fugit obcaecati dolorum ut eum voluptate minima necessitatibus blanditiis nam libero labore, cupiditate temporibus, ipsam quisquam impedit, praesentium esse, earum consequatur mollitia explicabo aut.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row burger-row">
				<div class="col-12">
					<div class="card-group">
						  <div class="card">
						  	<div class="card-img">
						    <img src="images/Burger11.png" class="card-img-top img-fluid burger-img" alt="burger"></div>
							    <div class="card-body">
							      <h5 class="card-title">Lorem ipsum dolor.</h5>
							      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Quas, maiores?</p>
							      <p class="card-text"><a href="#">order now</a></p>
							    </div>
						  </div>
						  <div class="card">
						  	<div class="card-img">
						    <img src="images/burger22.png" class="card-img-top img-fluid burger-img" alt="burger"></div>
							    <div class="card-body">
							      <h5 class="card-title">Lorem ipsum dolor.</h5>
							      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Quas, maiores?</p>
							      <p class="card-text"><a href="#">order now</a></p>
							    </div>
						  </div>
						  <div class="card">
						  	<div class="card-img">
						    <img src="images/Burger11.png" class="card-img-top img-fluid burger-img" alt="burger"></div>
							    <div class="card-body">
							      <h5 class="card-title">Lorem ipsum dolor.</h5>
							      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Quas, maiores?</p>
							      <p class="card-text"><a href="#">order now</a></p>
							    </div>
						  </div>
					</div>
				</div>
			</div>
		</div>
		</div>
<section id="events">
		<div class="sliderr">
			<div class="container">
				<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="slider-btn active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" class="slider-btn"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" class="slider-btn"></button>
  </div>
  <div class="carousel-inner mt-5 mb-5">
    <div class="carousel-item active">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-6 slider-col">
    				<h4>discover</h4>
    				<h2>upcoming events</h2>
    				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo officia nostrum fuga quasi, sint aut aliquam dolor fugiat dolores ex debitis suscipit explicabo natus ab accusantium omnis cum est.</p>
    			</div>
    			<div class="col-lg-6">
      <img src="images/slider.png" class="img-fluid slider-img" alt="slider">
      </div>
      </div>
      </div>
    </div>
    <div class="carousel-item">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-6 slider-col">
    				<h4>discover</h4>
    				<h2>upcoming events</h2>
    				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo officia nostrum fuga quasi, sint aut aliquam dolor fugiat dolores ex debitis suscipit explicabo natus ab accusantium omnis cum est.</p>
    			</div>
    			<div class="col-lg-6">
      <img src="images/slider.png" class="img-fluid slider-img" alt="slider">
      </div>
      </div>
      </div>
    </div>
    <div class="carousel-item">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-6 slider-col">
    				<h4>discover</h4>
    				<h2>upcoming events</h2>
    				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo officia nostrum fuga quasi, sint aut aliquam dolor fugiat dolores ex debitis suscipit explicabo natus ab accusantium omnis cum est.</p>
    			</div>
    			<div class="col-lg-6">
      <img src="images/slider.png" class="img-fluid slider-img" alt="slider">
      </div>
      </div>
      </div>
    </div>
  </div>
</div>
		</div>
	</div>
</section>
	</div>
</section>

<!-- choose section ends -->
<!-- reservation section -->

<section id="reservation">
	<div class="reservation">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 mb-5">
					<div class="text-center">
						<span class="mb-4 small-heading">reservation</span>
						<h1 class="heading-big mt-3">
							book your table
						</h1>
					</div>
				</div>
			</div>
			<div class="form1 mt-3">
				<form name="form11" onSubmit="return formcheck()" method="POST" autocomplete="off">
						<div class="row justify-content-center mb-3">
						  <div class="col-lg-3">
						    <input type="text" class="form-control" placeholder="name" aria-label="name" name="name" id="fnm" onblur="namecheck()">
						    <span id="error1"></span>
						  </div>
						  <div class="col-lg-3 form-sec-col">
						    <input type="email" class="form-control" placeholder="email" aria-label="email" name="email" id="eml" onblur="emailcheck()">
						    <span id="error2"></span>
						  </div>
						</div>
						<div class="row justify-content-center mb-3">
						  <div class="col-lg-3">
						    <input type="date" class="form-control" placeholder="date" aria-label="date" name="dates" id="dates">
						    <span id="error3"></span>
						  </div>
						  <div class="col-lg-3 form-sec-col">
						    <input type="time" class="form-control" placeholder="time" aria-label="time" name="timed" id="timed">
						    <span id="error4"></span>
						  </div>
						</div>
						<div class="row justify-content-center mb-3">
						  <div class="col-lg-3">
						    <input type="number" class="form-control" placeholder="people" aria-label="people" name="people" id="ppl">
						    <span id="error5"></span>
						  </div>
						  <div class="col-lg-3 form-sec-col">
						   <input type="submit" name="submit" value="book a table" class="form-control" aria-label="submit">
						  </div>
						</div>
					</form>
			</div>
		</div>
	</div>
</section>

<!-- reservation section ends-->

<!-- footer -->
<section id="footer">
	<div class="container mt-5 mb-5">
	<div class="footer">
		<div class="container footer-container">
			<div class="row">
				<div class="col-12 col-md-6">
					<img src="images/footer-logo.png" alt="footer logo">
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque temporibus, odio maiores delectus, architecto culpa modi ea, praesentium in nulla rem error neque reiciendis itaque, velit aliquid mollitia consequatur quia animi libero quae non sequi ducimus. Sit error eum explicabo alias reprehenderit velit eaque optio, nesciunt, excepturi non autem neque.</p>
				</div>
			
		
			<div class="col-12 col-md-6 address-col">
				<ul class="address-ul">
					<li><i class="fas fa-map-marker-alt"></i> <span> main road, station road, india</span></li>
					<li><i class="fas fa-envelope"></i> <span> info@burgerhouse.com</span></li>
				</ul>
			</div>
		</div>
		<div class="row social-row mt-0 mt-md-3">
			<div class="col-md-6">
				<span>&copy; burger house 2021. all right reserved</span>
			</div>
			<div class="col-md-6 social-col">
				<ul>
					<li><a href="#"><i class="fab fa-instagram"></i></a></li>
					<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
					<li><a href=""><i class="fab fa-twitter"></i></a></li>
					<li><a href=""><i class="fab fa-whatsapp"></i></a></li>
				</ul>
			</div>
		</div>
		</div>
	</div>
	</div>
</section>
<!-- footer ends -->
<script type="text/javascript" src="js/formvl.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	
</body>
</html>