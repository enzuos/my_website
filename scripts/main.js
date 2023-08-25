// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
  // alert("我最喜欢巧克力冰激淋了。");
// } else {
  // alert("但是巧克力才是我的最爱呀……");
// }

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

// document.querySelector("html").addEventListener("click", () => {
  // alert("别戳我，我怕疼。");
// });

// let myImage = document.querySelector("img");
// myImage.onclick = function () {
  // let mySrc = myImage.getAttribute("src");
  // if (mySrc === "images/pexels-neo-2653362.jpg") {
    // myImage.setAttribute("src", "pexels-danny-meneses-943096.jpg");
  // } else {
    // myImage.setAttribute("src", "pexels-neo-2653362.jpg");
  // }
// };
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
	let myName = prompt("请输入你的名字。");
	if (!myName) {
		setUserName()
	}else{
		localStorage.setItem("name", myName);
		myHeading.textContent = "Mozilla 酷毙了，" + myName;
	}
  // localStorage.setItem("name", myName);
  // myHeading.textContent = "Mozilla 酷毙了，" + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}
myButton.onclick = function () {
  setUserName();
};


