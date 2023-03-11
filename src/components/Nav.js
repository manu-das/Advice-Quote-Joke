import { Route, Routes, Link } from "react-router-dom";
import Advice from "../pages/Advice";
import Joke from "../pages/Joke";
import Quote from "../pages/Quote";

function Nav() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">
            <button>Quotes</button>
          </Link>
          <Link to="/Advice">
            <button>Advices </button>
          </Link>
          <Link to="/Joke">
            <button>Jokes</button>
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Quote />} />
        <Route path="/Joke" element={<Joke />} />
        <Route path="/Advice" element={<Advice />} />
      </Routes>
    </>
  );
}
export default Nav;
