const textArea = document.getElementById("text-area");
const displayArea = document.getElementById("display-area");
const button = document.getElementById("submit-button");
const form = document.getElementById("horoscope-form");
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

function handleClick() {
  // to turn any valid values into comparable with our valid Horoscope Strings
  let textValues = `${textArea.value}`;
  let validHoroscopeString = textValues.toLowerCase();
  let ishoroscopeTrue = false;

  let textInDisplayArea = "";

  // to return the valid messages for each of the horoscope signs

  function getDisplayMessage() {
    switch ((validHoroscopeString, ishoroscopeTrue)) {
      case ishoroscopeTrue === true && validHoroscopeString === `aquarius`:
        textInDisplayArea =
          "You should be very proud of you acheivements sofar";
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "capricon":
        textInDisplayArea = `You  are skilled at navigating both the material and emotional re`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "virgo":
        textInDisplayArea = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "cancer":
        console.log("the problem is not the switch");
        textInDisplayArea = `You're higbreak;ly intuitive and manifest your psychic abilities in tangible spaces`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "gemini":
        textInDisplayArea = `You're spontaneous, playful, and adorably erratic. you are driven by you insatiable curiosity.`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "leo":
        textInDisplayArea = `You are delighted to embrace your royal status and you love to bask in the spotlight and celeberate yourself`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "libra":
        textInDisplayArea = `You're obsessed with symmetry and strive to create equilibrium in all areas of life - especially when it comes to matters of the heart`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "sagittarius":
        textInDisplayArea = `You are always on a quest for knowledg, chasing after geographical, intellectual and spiritual adventures`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "scorpio":
        textInDisplayArea = `You use emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms.`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "taurus":
        textInDisplayArea = `You enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "aries":
        textInDisplayArea = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "leo":
        textInDisplayArea = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "pisces":
        textInDisplayArea = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
        break;
      case ishoroscopeTrue === true && validHoroscopeString === "ophiuchus":
        textInDisplayArea = `You're Bold and Ambitious.You dive headfirst into even the most challenging situations and make sure you come out on top`;
        break;
      default:
        console.log("the getdisplaly message switch is not working");
        break;
    }
    displayArea.innerText = textInDisplayArea;
  }

  //to check if the text input is a valid horoscope and displays the adequate message

  !horoscopes.includes(validHoroscopeString)
    ? (displayArea.innerText = `sorry ${textValues} is not a valid horoscope`)
    : ((ishoroscopeTrue = true),
      console.log(textValues),
      getDisplayMessage(ishoroscopeTrue, validHoroscopeString));
}

button.addEventListener("click", handleClick);
form.addEventListener("submit", handleClick);
