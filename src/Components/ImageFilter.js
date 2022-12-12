import React from "react"

//Icones svg
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'

//Importando a image
import {IconeTema} from './UI/index'


//Função responsável por retornar Icones baseado no seu 'Type'
export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt='Restaurante'/>,
    Utilidades: <IconeTema src={utilidades} alt='utilidades'/>,
    Transporte: <IconeTema src={transporte} alt='transporte'/>,
    Saude: <IconeTema src={saude} alt='saude'/>,
    Default: <IconeTema src={outros} alt='outros'/>
  }
  //baseado no seu type, retorne um elemento jsx ou retorne o icone Default
  return Images[type] || Images.Default;
};