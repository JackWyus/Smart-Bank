import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import styled from "styled-components";
import {fundoClaro} from "../UI/variaveis"

const ContainerComponent = styled.div`

  background-color: ${fundoClaro};
  min-height: 90vh;
  padding: 0px 15vw;

.conteudo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 800px) 
{
  .conteudo {
    flex-direction: column;
  }
}
`


const Container = () => {
  return (
    <ContainerComponent>
      <Titulo>Olá Fulano!</Titulo>
      <section className="conteudo">
        <Conta />
      </section>
    </ContainerComponent>
  );
};

export default Container;
