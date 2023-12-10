import generateJoke from "./generateJokes";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

const jokeBtn = document.getElementById("Jokebtn");
jokeBtn.addEventListener("click", generateJoke);
generateJoke();
