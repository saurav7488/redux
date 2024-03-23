import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./store/slice"

const App = () => {
    const c = useSelector(state => state.counter)
    const dispatch = useDispatch()
  return (
    <div>
         <h1>Count : {c}</h1> 
         <button onClick={()=>dispatch(increment())} >Increment</button>
         <button onClick={()=>dispatch(decrement())} >Decrement</button>
    </div>
  )
}

export default App
