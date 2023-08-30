import { useDispatch, useSelector } from "react-redux"
import { counterValue } from "../model/selectors/counterValue/counterValue"
import { counterActions } from "../model/slice/CounterSlice"
import { Button } from "shared/ui/Button/Button"
export function Counter() {
  const dispatch = useDispatch()
  const count = useSelector(counterValue)

  const inc = () => {
    dispatch(counterActions.increment())
  }
  const dec = () => {
    dispatch(counterActions.decrement())
  }


  return (
    <>
      <div data-testid="counter-title">{count}</div>
      <div>
        <Button data-testid="inc-btn" onClick={inc} >
          increment
        </Button>
        <Button data-testid="dec-btn" onClick={dec}>
          decrement
        </Button>
      </div>
    </>
  )
}
