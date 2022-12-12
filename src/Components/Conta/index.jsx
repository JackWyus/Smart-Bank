import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import styled from "styled-components";
import {corPrimaria} from '../UI/variaveis'

const ContaComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
 @media(max-width: 800px)
 {
  width: 95%;
  margin: 5px;
 }

.saldo{
  font-weight: 700;
  font-size: 32px;
}

.detalhe {
  color: ${corPrimaria};
  font-size: 24px;
}

.imagem-icone {
  height: 25px;
  width: 25px;
}

.btn {
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: ${corPrimaria};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
}
`



const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <ContaComponent>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <img className="imagem-icone" src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <div className="saldo">
            <span className="detalhe">R$</span> 0,00{" "}
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        <img
          style={{ marginTop: "2px" }}
          className="imagem-icone"
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </button>
    </ContaComponent>
  );
};

export default Conta;
