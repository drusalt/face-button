var themeSwitchInput = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var body = document.querySelector("body");
var h3 = document.querySelector("h3");
var face = document.querySelector(".face2")


themeSwitchInput.addEventListener("click", function () {
	if (body.classList.contains("light")) {
		body.classList.remove("light");
		face.classList.remove("face2")
		ball.classList.remove("move-right");
		h3.innerText = "Hey";
		h3.style.fontsize = "1em"
	} else { 
		body.classList.add("light");
		ball.classList.add("move-right");
		face.classList.add("face2");
		h3.innerText = "Oh, hey!!"
		h3.style.fontSize = "3em";
		h3.style.color = "white";
	}
	
});


