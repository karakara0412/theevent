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
			<li id="registrationNav"><a href="#registration"> Registration Info</a></li>
			<li id="covidNav"><a href="#covid">COVID</a></li>
			<li id="codeNav"><a href="#code">Code of Conduct</a></li>
			<li id="faqNav"><a href="#faq">FAQ</a></li>
		</ul>
	</nav><!-- #nav-menu-container -->
</div>
</header>
`;

document.body.appendChild(template.content);
