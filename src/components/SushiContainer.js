import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, handleMoneySpent, money}) {

  const [count, setCount] = useState(0)

  const sushiList = sushi.map((sushiPiece) => {
    // return <Sushi key={sushiPiece.id} name={sushiPiece.name} image={sushiPiece.img_url} price={sushiPiece.price} />
    return <Sushi sushiPiece={sushiPiece} key={sushiPiece.id} handleMoneySpent={handleMoneySpent} money={money}/>
  })

  return (
    <div className="belt">

      {sushiList[count]}
      {sushiList[count + 1]}
      {sushiList[count + 2]}
      {sushiList[count + 3]}

      
      <MoreButton count={count} setCount={setCount} sushi={sushi}/>
    </div>
  );
}

export default SushiContainer;
