"use strict";

let burgerbar = document.getElementById("burger-bar");
let list = document.getElementById("u-list");
let logo = document.getElementById("logo");
let singUp2 = document.querySelectorAll(".sign-up");
let wraper = document.getElementById("header-wraper");
let Seemorebnt = document.getElementById("more-btn");
let textcoontent = document.getElementById("text");
let plorem = document.getElementById("plorem");
let lessBtn = document.querySelector(".less");
let p = document.createElement("p");
let p2 = document.createElement("p");
const formElement = document.getElementById("resgitration");
let validation = document.querySelector(".validation");
const body = document.querySelector(".body");
let singUp = document.getElementById("sign-up");
let pteg = document.getElementById("pteg");
let morebtn = document.getElementById("seemore-button");
let lessbtn2 = document.querySelector(".less2");
let topscrole = document.querySelector(".fa-chevron-up");
let xmark = document.querySelector(".fa-xmark");
burgerbar.addEventListener("click", function () {
  list.classList.toggle("list-active");
  burgerbar.classList.toggle("active");
  logo.classList.toggle("active-logo");
  singUp.classList.toggle("active-btn");
  wraper.classList.toggle("avtive-wraper");
  body.classList.toggle("active-body");
});

Seemorebnt.addEventListener("click", function () {
  more();
  lessBtn.classList.toggle("less-active");
  Seemorebnt.classList.toggle("SeeMore-btnactive");
});

lessBtn.addEventListener("click", function () {
  p.textContent = "";
  Seemorebnt.classList.remove("SeeMore-btnactive");
  lessBtn.classList.remove("less-active");
});

function more() {
  fetch(
    "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1",
    {
      method: "GET",
    }
  )
    .then(function (pasuxi) {
      if (!pasuxi.ok) {
        throw pasuxi.status;
      }

      return pasuxi.json();
    })
    .then(function (migebulipasuxi) {
      migebulipasuxi
        .forEach((element) => {
          p.innerText = element;
          plorem.appendChild(p);
        })

        .catch(function (errori) {
          if (errori == 404) {
            let p = document.createElement("p");
            p.textContent = "Server Error";
            plorem.appendChild(p);
          }
        });
    });
}

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = {};

  let usernameValue = document.getElementById("usernamefield").value;

  if (usernameValue == "") {
    errors.username = "Username can not be empty";
  }

  let passwValue1 = document.getElementById("passwordfield").value;
  let passwValue2 = document.getElementById("passwordfield2").value;

  if (passwValue1 == "") {
    errors.passw = "Password field can not be empty";
  }

  if (passwValue1 != passwValue2) {
    errors.passw2 = "Passwords do not match";
  }

  let agree = document.getElementById("agree").checked;

  if (!agree) {
    errors.check = "You must agree our terms and conditions";
  }

  let gender = false;
  e.target.querySelectorAll('[name = "gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select Your Gender";
  }

  console.log(errors);

  e.target.querySelectorAll(".error-text").forEach((el) => {
    el.innerText = "";
  });

  for (let item in errors) {
    console.log(item);

    let errorText = document.getElementById("error-" + item);

    if (errorText) {
      errorText.innerText = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    e.target.submit();
  }
});

let passwField = document.getElementById("passwordfield");
let icon = document.getElementById("showIcon");

icon.addEventListener("click", function () {
  if (passwField.type == "password") {
    passwField.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwField.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

function validationemail() {
  let emailValue = document.getElementById("emailfield").value;
  let errortextEmail = document.getElementById("emailError");
  let patternEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(patternEmail)) {
    errortextEmail.innerText = "Your Email is valid";
    errortextEmail.style.color = "green";
  } else {
    errortextEmail.innerText = "Your Email is invalid";
    errortextEmail.style.color = "red";
  }

  if (emailValue == "") {
    errortextEmail.innerText = "";
  }
}
document
  .getElementById("emailfield")
  .addEventListener("keyup", validationemail);

xmark.addEventListener("click", function () {
  validation.classList.remove("active-validation");
  body.classList.remove("body-active");
  wraper.classList.remove("wraper-active");
});

singUp2.forEach((el) => {
  el.addEventListener("click", function () {
    body.classList.toggle("body-active");
    validation.classList.toggle("active-validation");
    wraper.classList.toggle("wraper-active");
  });
});
const data = [
  {
    id: 1,
    text: "Lessons and insights from 8 years ",

    title: "men is at the computer",
    url: "./assets/imiges/nexcent 3.jpg",
  },
  {
    id: 2,
    text1: "Lessons and insights from 8 years",

    title: "nexcent",
    url: "./assets/imiges/nexcent.jpg",
  },
  {
    id: 3,
    text: "Lessons and insights from 8 years",

    title: "nexcent2",
    url: "./assets/imiges/nextenc4.png",
  },
];
let slidercontent = document.getElementById("slider-content");
let sliderwraper = document.getElementById("slider-wraper");
let sliderIndex = 0;

function creatdiv() {
  let div = document.createElement("div");
  return div;
}
function creatimg(item) {
  let img = document.createElement("img");
  img.classList.add("imige-active");
  img.src = `${item.url}`;
  img.alt = `${item.title}`;
  return img;
}
function createDots() {
  let dotsWraper = document.createElement("div");
  dotsWraper.classList.add("dots-Wraper");

  data.forEach((element) => {
    let dotChild = document.createElement("div");
    dotChild.classList.add("dot-item");
    dotChild.setAttribute("data-id", element.id - 1);

    dotChild.addEventListener("click", function (e) {
      let dotId = e.target.getAttribute("data-id");
      console.log(dotId);
      sliderIndex = dotId;
      slide();
    });
    dotsWraper.appendChild(dotChild);
  });

  return dotsWraper;
}
function slide() {
  slidercontent.innerHTML = "";
  let divelement = creatdiv();
  let imigelement = creatimg(data[sliderIndex]);
  let dots = createDots();
  divelement.appendChild(imigelement);
  slidercontent.appendChild(divelement);
  slidercontent.appendChild(dots);
}
slide();
morebtn.addEventListener("click", function () {
  buttonaxios();
});

function buttonaxios() {
  axios
    .get("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
    .then((response) => {
      response.forEach((e) => {
        p2.innerText = e;
        pteg.appendChild(p2);
      });
    })
    .catch(function (error) {
      let paragrap = document.createElement("p");
      paragrap.textContent = "Server Error";
      pteg.appendChild(paragrap);
    });
}
topscrole.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
