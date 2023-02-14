import { useState } from "react";
import ConvertCurrencyService from '../services/ConvertCurrencyService';

import './appHooks.scss'

function useCountChange(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const randomValue = new ConvertCurrencyService()

  const onChange = (val) => {
    setCounter(counter => counter + val)
  }

  const randomNumber = () => {
    console.log('random')
    randomValue.getRandomValue().then(changeValue);
  }

  const changeValue = (val) => {
    setCounter(val)
  }

  return {
    counter: counter,
    onChange: onChange,
    randomNumber: randomNumber,
    changeValue: changeValue,
  }
}

const Counter = (props) => {
  let val = useCountChange(0);

  return (
    <div className="component">
      <div className="counter">{val.counter}</div>
      <div className="controls">
        <button onClick={() => val.onChange(1)}>INC</button>
        <button onClick={() => val.onChange(-1)}>DEC</button>
        <button onClick={val.randomNumber}>RND</button>
        <button onClick={() => val.changeValue(props.counter)}>RESET</button>
      </div>
    </div>
  )
}

const RndCounter = (props) => {
  let val = useCountChange(0);

  return (
    <div className="component">
      <div className="counter">{val.counter}</div>
      <div className="controls">
        <button onClick={val.randomNumber}>RND</button>
        <button onClick={() => val.changeValue(props.counter)}>RESET</button>
      </div>
    </div>
  )
}

const AppHooks = () => {
  return (
    <>
      <Counter counter={0} />
      <RndCounter counter={0} />
    </>
  )
}

export default AppHooks;