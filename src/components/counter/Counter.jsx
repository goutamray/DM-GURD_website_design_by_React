
import { TiArrowSortedDown } from "react-icons/ti";
import { RiArrowUpSFill } from "react-icons/ri";
import UseCounter from "../../hooks/UseCounter";



import "./Counter.css"; 
const Counter = () => {
  const { count,  handleIncrement, handleDescrement } = UseCounter(1)

  return (
    <>
      <div className="counter d-flex align-items-center">
         <h1> { count } </h1>
            <button className='upper' onClick={handleIncrement} > <RiArrowUpSFill /> </button>
             <button className='lower' onClick={handleDescrement}> <TiArrowSortedDown /> </button>
        </div>
    </>
  )
}


export default Counter


