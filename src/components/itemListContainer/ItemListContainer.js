import { Button } from '@mui/material'
import React , {useState} from 'react'



const useCounter = () => {
  const[counter  , setCounter ] = useState (0);

    const aumetar = () => setCounter (counter + 1 )
    const disminuir = () => setCounter (counter - 1)
    const reiniciar = () => setCounter (0)
    
    return {
      counter,
      aumetar,
      disminuir,
      reiniciar
    }

}
export const ItemListContainer = () => {
  const {counter , aumetar , disminuir , reiniciar} = useCounter()
  
  return (
    <div>
      <h1>Contador</h1>
      <div>{counter} </div>
       <Button onClick={aumetar}>+</Button>
       <Button onClick={disminuir}>-</Button>
       <Button onClick={reiniciar}>reset</Button>
    </div>
  )
}
