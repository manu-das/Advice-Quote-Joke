import { useState, useEffect } from "react";

import Main from "../components/Main";
import axios from "axios";
const URL = "https://api.adviceslip.com/advice";

function Advice() {
  const [data, setData] = useState([]);

  const getadvice = () => {
    axios.get(URL).then((response) => {
      setData(response.data.slip);
      // console.log(response.data.slip);
    });
  };

  useEffect(() => {
    getadvice();
  }, []);

  return (
    <>
      <div className="container">
        <Main data={data.advice} getmore={getadvice} />
      </div>
    </>
  );
}

export default Advice;
