const button = document.getElementById("horoscope-form");
const buttonValue = button.ariaValueText;
function test() {
  console.log("button has been clicked");
  console.log("form has been submitted");
  button.removeEventListener("close", alert(buttonValue));
}
button.addEventListener("click", test);
let displayText = "this is just a place holder";

switch (value) {
  case (value === "aquarius") | "Aquarius":
    displayText = "";
    break;
  case (value === "Capricon") | "capricon":
    displayText = `You  are skilled at navigating both the material and emotional re`;
    break;
  case (value === "virgo") | "Virgo":
    displayText = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
    break;
  case (value === "Cancer") | "cancer":
    displayText = `You're highly intuitive and manifest your psychic abilities in tangible spaces`;
    break;
  case (value === "Gemini") | "gemini":
    displayText = `You're spontaneous, playful, and adorably erratic. you are driven by you insatiable curiosity.`;
    break;
  case (value === "Leo") | "leo":
    displayText = `You are delighted to embrace your royal status and you love to bask in the spotlight and celeberate yourself`;
    break;
  case (value === "Libra") | "libra":
    displayText = `You're obsessed with symmetry and strive to create equilibrium in all areas of life - especially when it comes to matters of the heart`;
    break;
  case (value === "sagittarius") | "Sagittarius":
    displayText = `You are always on a quest for knowledg, chasing after geographical, intellectual and spiritual adventures`;
    break;
  case (value === "Scorpio") | "scorpio":
    displayText = `You use emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms.`;
    break;
  case (value === "Taurus") | "taurus":
    displayText = `You enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors`;
    break;
  case (value === "Aries") | "aries":
    displayText = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
    break;
  case (value === "leo") | "leo":
    displayText = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
    break;
  case (value === "Pisces") | "pisces":
    displayText = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
    break;
  case (value === "Ophiuchus") | "ophiuchus":
    displayText = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
    break;
  default:
    break;
}
