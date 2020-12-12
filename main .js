const typewriter = (param) => {

    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");

    string.forEach((char, index) => {
        setTimeout(() => {
            el.textContent += char;
        }, speed * index);
    });
};

typewriter({
    el: "#typewriter", //要素
    string: "KENTO TANIGUCHI", //文字列
    speed: 160 //速度
});

setTimeout(function() {
  typewriter({
      el: "#typewriter2", //要素
      string: "PORTFOLIO", //文字列
      speed: 160 //速度
  });
}, 2500)

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
    scrollBar: true,
		scrollHorizontally: true,
		navigation: true,
		navigationPosition: 'fp-right'
		
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});