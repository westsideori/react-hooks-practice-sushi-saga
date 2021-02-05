import React from "react";

function MoreButton({count, setCount, sushi}) {

  // if (count === 96) {
  //   setCount(0)
  // }

  const handleMoreClick = () => {
    if (count === sushi.length - 4) {
      setCount(0)
    } else {
      setCount((count) => count + 1)
    }
    console.log(count)
    
  }

  

  return (

    <button onClick={handleMoreClick}>More sushi!</button>

  )

}

export default MoreButton;
