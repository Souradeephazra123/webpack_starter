import axios from "axios";

function generateJoke() {
  // return "I don't believe stairs because they always go up";
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  axios.get("https://icanhazdadjoke.com", config).then((res) => {
    document.getElementById("joke").innerHTML = res.data.joke
  })
}

export default generateJoke;
