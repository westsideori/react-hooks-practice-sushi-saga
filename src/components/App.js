import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  
  const [sushi, setSushi] = useState([])
  const [money, setMoney] = useState(100)
  const [eatenSushis, setEatenSushis] = useState([])



  const handleMoneySpent = (sushiPiece) => {
    setMoney((money) => money - sushiPiece.price)
    setEatenSushis([...eatenSushis, sushiPiece])

  }

  

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        setSushi(data)
      })
  }, [])

  console.log(sushi)

  return (
    <div className="app">
      <SushiContainer sushi={sushi}  handleMoneySpent={handleMoneySpent} money={money} />
      <Table money={money} eatenSushis={eatenSushis} />
    </div>
  );
}

export default App;
