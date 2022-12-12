import React from "react";
import { Box,Button } from "../UI/index"
import { extratoLista } from '../../info'
import Items from "../../Items";

 const Extrato = () => 
{
  return(
    <Box>
      {
        extratoLista.updates.map(({id,type,from, value, date}) => {
          return(
            <Items key={id} type={type} from={from} value={value} date={date}/>
          )
        })
      }
      <Button>Ver Mais!</Button>
    </Box>
  )
}

export default Extrato;