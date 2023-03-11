import { BsDice5Fill } from "react-icons/bs";
function Main(props) {
  return (
    <>
      <div className="main-card">
        <h2>"{props.data}"</h2>
        <h5>{props.ans}</h5>
        <button className="main-btn" onClick={props.getmore}>
          <BsDice5Fill size={"1.6em"} />
        </button>
      </div>
    </>
  );
}
export default Main;
