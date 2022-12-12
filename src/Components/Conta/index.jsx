import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import styled from "styled-components";
import {Icon} from '../UI/index'
import { Box, Button, Balance, Detail, IconeTema } from "../UI/index";


/*Herança de Style, estamos pegando os valroes de Icon e somando com IconeMargin*/
/*O Styled component deve ser usando fora dos itens react, pois pode ocorrer erros de perfomance*/
const IconeMargin = styled(Icon)`
  margin-top: 2px;
`


const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Balance >
            <Detail >R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button  onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
