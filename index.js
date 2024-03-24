const button = document.getElementById("horoscope-form");
const textArea = document.getElementById("text-area");
const displayArea = document.getElementById("display-area");
let validHoroscopeString = "";
let textInDisplayArea = "";
const buttonstuff = document.getElementById("basic-button");

const horoscopes = [
  "aquarius",
  "capricorn",
  "virgo",
  "cancer",
  "gemini",
  "leo",
  "libra",
  "sagittarius",
  "scorpio",
  "taurus",
  "aries",
  "pisces",
  "ophiuchus",
];

// this function checks if the button is equal to the avaliable values
function buttonclick() {
  // to turn any valid values into comparable with our valid Horoscope Strings

  let values = `${textArea.value}`;
  validHoroscopeString = values.toLowerCase();

  !horoscopes.includes(validHoroscopeString)
    ? console.log(`sorry ${values} is not a valid horoscope`)
    : (console.log(`Your horoscope is ${values}`), console.log(values));
  // to return the valid messages for each of the horoscope signs
  switch (validHoroscopeString) {
    case `${validHoroscopeString}` === `aquarius`:
      textInDisplayArea = "You should be very proud of you acheivements sofar";
      break;
    case validHoroscopeString === "capricon":
      textInDisplayArea = `You  are skilled at navigating both the material and emotional re`;
      break;
    case validHoroscopeString === "virgo":
      textInDisplayArea = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
      break;
    case validHoroscopeString === "cancer":
      console.log("the problem is not the switch");
      textInDisplayArea = `You're highly intuitive and manifest your psychic abilities in tangible spaces`;
      break;
    case validHoroscopeString === "gemini":
      textInDisplayArea = `You're spontaneous, playful, and adorably erratic. you are driven by you insatiable curiosity.`;
      break;
    case validHoroscopeString === "leo":
      textInDisplayArea = `You are delighted to embrace your royal status and you love to bask in the spotlight and celeberate yourself`;
      break;
    case validHoroscopeString === "libra":
      textInDisplayArea = `You're obsessed with symmetry and strive to create equilibrium in all areas of life - especially when it comes to matters of the heart`;
      break;
    case validHoroscopeString === "sagittarius":
      textInDisplayArea = `You are always on a quest for knowledg, chasing after geographical, intellectual and spiritual adventures`;
      break;
    case validHoroscopeString === "scorpio":
      textInDisplayArea = `You use emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms.`;
      break;
    case validHoroscopeString === "taurus":
      textInDisplayArea = `You enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors`;
      break;
    case validHoroscopeString === "aries":
      textInDisplayArea = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
      break;
    case validHoroscopeString === "leo":
      textInDisplayArea = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
      break;
    case validHoroscopeString === "pisces":
      textInDisplayArea = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
      break;
    case validHoroscopeString === "ophiuchus":
      textInDisplayArea = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
      break;
    default:
      textInDisplayArea = "not a valid text";
      break;
  }
  displayArea.innerHTML = textInDisplayArea;
  console.log(textInDisplayArea);
}

buttonstuff.addEventListener("click", buttonclick);
