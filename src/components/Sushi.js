import React, { useState } from "react";

function Sushi({sushiPiece, handleMoneySpent, money}) {

  const [isEaten, setIsEaten] = useState(false)
  
  
  const handleEating = (sushiPiece) => {
    if (money >= sushiPiece.price && !isEaten) {
      setIsEaten(true)
      handleMoneySpent(sushiPiece)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEating(sushiPiece)}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={sushiPiece.img_url}
            alt={sushiPiece.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiPiece.name} - ${sushiPiece.price}
      </h4>
    </div>
  );
}

export default Sushi;
