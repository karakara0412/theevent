const template = document.createElement("template");

template.innerHTML = `
<header id="header">
<div class="container">

	<div id="logo" class="pull-left">
		<!-- Uncomment below if you prefer to use a text logo -->
		<h1><a href="#intro"><span>V</span>egas<span>P</span>arties</a></h1>
		<!-- <a href="#intro" class="scrollto"><img src="img/logo.png" alt="" title=""></a> -->
	</div>

	<nav id="nav-menu-container">
		<ul class="nav-menu">
			<li id="introNav" class="menu-active"><a href="index.html">Home</a></li>
			<li id="scheduleNav"><a href="#schedule">Schedule</a></li>
			<li id="covidNav"><a href="#covid">COVID</a></li>
			<li id="venueNav"><a href="#venue">Venue</a></li>
			<li id="hotelsNav"><a href="#hotels">Hotels</a></li>
			<li id="galleryNav"><a href="#gallery">Gallery</a></li>
			<li id="speakersNav"><a href="#speakers">Speakers</a></li>
			<li id="supportersNav"><a href="#supporters">Sponsors</a></li>
			<li id="contactNav"><a href="#contact">Contact</a></li>
			<li class="buy-tickets"><a href="#buy-tickets">Buy Tickets</a></li>
		</ul>
	</nav><!-- #nav-menu-container -->
</div>
</header>
`;

document.body.appendChild(template.content);
