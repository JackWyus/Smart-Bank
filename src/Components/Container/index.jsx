import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import styled from "styled-components";
import Extrato  from '../Extrato/index'


const ContainerComponent = styled.div`
  min-height: 90vh;
  padding: 0px 15vw;

  background-color: ${({theme}) => theme.body};
`
const Conteudo = styled.section`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({theme}) => theme.text};

  @media(max-width: 800px) 
  {
    flex-direction: column;
  }
`

export default () => {
  return (
    <ContainerComponent>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato/>
      </Conteudo>
    </ContainerComponent>
  );
};