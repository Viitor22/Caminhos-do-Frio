import styled from "styled-components";
import { breakpoints, cores } from "../../style";


export const ContainerDiv = styled.div`
  display: none;
  width: 60px;
  margin: 20px auto;

  i {
    font-size: 56px;
  }


  @media (max-width: ${breakpoints.tablet}){
    display: flex;
  }

  .active {
    display: block;
  }
`
