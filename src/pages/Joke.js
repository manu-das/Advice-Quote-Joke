import axios from "axios";
import { useState, useEffect } from "react";
import Main from "../components/Main";
const URL = "https://v2.jokeapi.dev/joke/Any";

function Joke() {
  const [jokedata, setJokedata] = useState([]);

  const GetJokes = () => {
    axios.get(URL).then((response) => {
      setJokedata(response.data);
      //console.log(response.data);
    });
  };

  useEffect(() => {
    GetJokes();
  }, []);

  return (
    <>
      <div className="container">
        <Main
          data={jokedata.setup}
          ans={jokedata.delivery}
          getmore={GetJokes}
        />
      </div>
    </>
  );
}

export default Joke;
