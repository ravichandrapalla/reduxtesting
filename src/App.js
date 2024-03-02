import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, registered } from "./redux/actions";
import Game from "./Components/Game";

function App() {
  const dispatch = useDispatch();
  const { count, registered: reg } = useSelector((store) => store);
  // let count = useSelector();
  const handleShowStore = () => {
    console.log("count is ", count, "and registerd is", reg);
  };
  const DATA = {
    India: "Delhi",
    Russia: "Moscow",
    China: "Berlin",
  };

  return (
    <div className="App">
      {/* {count}
      {`registered status : ${reg}`}
      <button onClick={() => dispatch(increment(1))}>add 1</button>
      <button onClick={() => dispatch(decrement(1))}>Remove 1</button>
      <button onClick={() => dispatch(registered())}>Toggle Registered</button>
      <button onClick={handleShowStore}>Show Store</button>
      <p></p> */}
      <Game defaultData={DATA} />
    </div>
  );
}

export default App;
