import logo from "assets/images/logo.svg";
import "styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { SET_COUNT } from "store/reducers/count/action";

function App() {
  const { counter } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const onClickIncrement = () => {
    dispatch({
      type: SET_COUNT,
      payload: {
        counter: counter + 1,
      },
    });
  };
  const onClickDecrement = () => {
    dispatch({
      type: SET_COUNT,
      payload: {
        counter: counter + 1,
      },
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        Count : {counter}
        <div>
          <button onClick={() => onClickIncrement()}>Increment +</button>
          <br />
          <button onClick={() => onClickDecrement()}>Decrement -</button>
        </div>
      </header>
    </div>
  );
}

export default App;
