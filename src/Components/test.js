import React from "react";
import ReactDOM from "react-dom";

const Counter = ({ value, onIncrement, onDecrement, hideIncrement }) => {

    const cakeList = [
        {name: "yuzy", amount: 5},
        {name: "aeble", amount: 2},
        {name: "hindbaer", amount: 4},
        {name: "brombaer", amount: 3},
        {name: "yulekrans", amount: 6}
    ]

    const cakeAmount = cakeList.reduce((acc, num) => {
        return acc += num.amount
    }, 0)

    console.log(cakeAmount)

    return (
      <div>
        <span>{value}</span>
        {value > 0 && ( <button onClick={() => {onDecrement();}}> - </button>)}
        {hideIncrement === false && value < 10 && (<button onClick={() => {onIncrement(); }}> + </button>)}
      </div>
    );
  };
  
  const Counters = () => {
    const [counters, setCounters] = React.useState([4, 0, 0, 5]);
  
    const sum = counters.reduce((acc, item) => acc + item, 0);
  
    return (
      <div>
        <p>Sum: {sum}</p>
        <button onClick={() => {setCounters([...counters, 0])}}> Add counter </button>
        <br />
        <div>
          {counters.map((value, index) => (
            <Counter value={value} hideIncrement={sum >= 20} 
                onIncrement={() => { const countersCopy = [...counters]; countersCopy[index] += 1; setCounters(countersCopy);}}
                onDecrement={() => { const countersCopy = [...counters]; countersCopy[index] -= 1; setCounters(countersCopy);}}
            />
          ))}
        </div>
      </div>
    );
  };

const rootElement = document.getElementById("root");
ReactDOM.render(<Counters />, rootElement);
