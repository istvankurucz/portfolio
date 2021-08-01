const setActiveMenuItem = (width) => {
	const width1530 = [700, 1400, 3280, 3700];
	const width800 = [767, 1500, 4950, 5375];
	const width625 = [707, 1975, 5027, 5640];
	const width450 = [714, 1835, 4693, 5235];

	switch (width) {
		case 800:
			if ($(window)[0].scrollY < width800[0]) $(".normal-menu .menu-item:nth-child(1)").addClass("active");
			else if ($(window)[0].scrollY >= width800[0] && $(window)[0].scrollY < width800[1])
				$(".normal-menu .menu-item:nth-child(2)").addClass("active");
			else if ($(window)[0].scrollY >= width800[1] && $(window)[0].scrollY < width800[2])
				$(".normal-menu .menu-item:nth-child(3)").addClass("active");
			else if ($(window)[0].scrollY >= width800[2] && $(window)[0].scrollY < width800[3])
				$(".normal-menu .menu-item:nth-child(4)").addClass("active");
			else $(".normal-menu .menu-item:nth-child(5)").addClass("active");

			break;

		case 625:
			if ($(window)[0].scrollY < width625[0]) $(".ham-menu .items div:nth-child(1) .menu-item").addClass("active");
			else if ($(window)[0].scrollY >= width625[0] && $(window)[0].scrollY < width625[1])
				$(".ham-menu .items div:nth-child(2) .menu-item").addClass("active");
			else if ($(window)[0].scrollY >= width625[1] && $(window)[0].scrollY < width625[2])
				$(".ham-menu .items div:nth-child(3) .menu-item").addClass("active");
			else if ($(window)[0].scrollY >= width625[2] && $(window)[0].scrollY < width625[3])
				$(".ham-menu .items div:nth-child(4) .menu-item").addClass("active");
			else $(".ham-menu .items div:nth-child(5) .menu-item").addClass("active");

			break;

		case 450:
			if ($(window)[0].scrollY < width450[0]) $(".ham-menu .items div:nth-child(1) .menu-item").addClass("active");
			else if ($(window)[0].scrollY >= width450[0] && $(window)[0].scrollY < width450[1])
				$(".ham-menu .items div:nth-child(2) .menu-item").addClass("active");
			else if ($(window)[0].scrollY >= width450[1] && $(window)[0].scrollY < width450[2])
				$(".ham-menu .items div:nth-child(3) .menu-item").addClass("active");
			else if ($(window)[0].scrollY >= width450[2] && $(window)[0].scrollY < width450[3])
				$(".ham-menu .items div:nth-child(4) .menu-item").addClass("active");
			else $(".ham-menu .items div:nth-child(5) .menu-item").addClass("active");

			break;

		default:
			if ($(window)[0].scrollY < width1530[0]) $(".normal-menu .menu-item:nth-child(1)").addClass("active");
			else if ($(window)[0].scrollY >= width1530[0] && $(window)[0].scrollY < width1530[1])
				$(".normal-menu .menu-item:nth-child(2)").addClass("active");
			else if ($(window)[0].scrollY >= width1530[1] && $(window)[0].scrollY < width1530[2])
				$(".normal-menu .menu-item:nth-child(3)").addClass("active");
			else if ($(window)[0].scrollY >= width1530[2] && $(window)[0].scrollY < width1530[3])
				$(".normal-menu .menu-item:nth-child(4)").addClass("active");
			else $(".normal-menu .menu-item:nth-child(5)").addClass("active");
	}
};

$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 30) {
			$("header").removeClass("top");
			$("header img").fadeIn(200);
			$(".go-top").fadeIn(500);
		} else {
			$("header").addClass("top");
			$("header img").fadeOut(200);
			$(".go-top").fadeOut(500);
		}

		$("header .menu-item").removeClass("active");
		if (window.innerWidth > 900) setActiveMenuItem(1530);
		else if (window.innerWidth <= 900 && window.innerWidth > 700) setActiveMenuItem(800);
		else if (window.innerWidth <= 700 && window.innerWidth > 550) setActiveMenuItem(625);
		else setActiveMenuItem(450);
	});

	$(".ham-menu .header i").click(function () {
		$(".ham-menu .items").toggle(200);
		$(".ham-menu").toggleClass("clicked");
	});
	$(".ham-menu .header .fa-bars").click(function () {
		$(this).hide();
		$(".ham-menu .header .fa-times").show(200);
	});
	$(".ham-menu .header .fa-times").click(function () {
		$(this).hide();
		$(".ham-menu .header .fa-bars").show(200);
	});

	$(".ham-menu .menu-item").click(function () {
		$(".ham-menu .items").hide(200);
		$(".ham-menu .header .fa-times").hide(200);
		$(".ham-menu .header .fa-bars").show(200);
	});

	$("footer .menu-item").removeClass("active");
});
