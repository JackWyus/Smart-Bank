import React from "react";
import styled from "styled-components";
import Item from "../Components/Item";

import ImageFilter from '../Components/ImageFilter'

const Items = styled.div`
  margin: 2px 0;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: 12px;
  border-radius: 10px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
`

export default (props) => {
  return(
  <Items>
    {ImageFilter(props.type)}
    <Item {...props}/>
    <span>{props.date}</span>
  </Items>
  )
}