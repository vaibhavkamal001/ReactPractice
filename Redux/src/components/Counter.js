import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { CounterActions } from "../store/counterRedux";

const Counter = () => {
  const dispatcher = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.toggle);

  const incrementHandler = () => {
    dispatcher(CounterActions.increment());
  };
  const decrementHandler = () => {
    dispatcher(CounterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatcher(CounterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decrementHandler}>Decrement</button>
    </main>
  );
};

export default Counter;
