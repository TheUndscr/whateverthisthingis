import B from "./components/B"
import { useState } from "react";
import './styles.css';

function Cool(props: {amount: number}) {
  const [rand, setRand] = useState(new Array<number>(props.amount));
  const [bools, setBools] = useState(new Array<boolean>(props.amount));
  const list = [];

  function randNum() {
    const randPrototype = [...rand];
    const boolsPrototype = [...bools];
    for (let i = 0; i < props.amount; i++) {
      if (boolsPrototype[i]) continue;
      const randomNum = Math.floor((Math.random() * 999) + 1);
      randPrototype[i] = randomNum;
      if (randomNum < 100) {
        boolsPrototype[i] = true;
        continue;
      }
    }

    setRand([...randPrototype]);
    setBools([...boolsPrototype]);
  }

  for (let i = 0; i < props.amount; i++) {
    list.push(<B num={rand[i]} done={bools[i]} func={randNum}></B>);
  }

  return <>
    {...list}
  </>
}

function App() {
  return (
    <>
      <Cool amount={1500}></Cool>
    </>
  )
}

export default App
