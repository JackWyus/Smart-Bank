import React from "react";
import ThemeOn from '../../assets/images/themeOn.svg'
import ThemeOff from '../../assets/images/themeOff.svg'
import { Icon } from "../UI";

const claro = <Icon src={ThemeOn} alt="Tema claro"/>
const escuro = <Icon src={ThemeOff} alt="Tema escuro"/>

export default (({tema}) => (tema ? escuro: claro)) ;
