import { useState, useEffect } from "react";
import Main from "../components/Main";
import axios from "axios";
const URL = "https://api.quotable.io/random";

function Quote() {
  const [quotedata, setQuotedata] = useState([]);

  const GetQuote = () => {
    axios.get(URL).then((response) => {
      setQuotedata(response.data);
    });
  };

  useEffect(() => {
    GetQuote();
  }, []);
  return (
    <>
      <div className="container">
        <Main
          data={quotedata.content}
          ans={quotedata.author}
          getmore={GetQuote}
        />
      </div>
    </>
  );
}

export default Quote;
