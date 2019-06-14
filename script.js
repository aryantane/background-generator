var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
// above line is a querySelector so we do a classSelector just like we do in CSS i.e. by using .
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(body);
// body.style.background = "red";

// we have an event called as input just like mouseenter, keypress etc. so everytime the input value changes which it does we can detect that

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);