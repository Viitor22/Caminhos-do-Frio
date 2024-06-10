import styled from "styled-components";
import { cores } from "../../style";

export const Wrapper = styled.div`
    .is-open{
      width: 0px;
      transition: 0.4s ease;
  }

  .active{
      background: ${cores.preto};
      transform: scale(1.05);
      color: ${cores.principal};
      box-shadow: 0 0 30px -10px ${cores.preto};
      transition: all 0.5s ease;
      cursor: pointer;
    }
`

export const AsideContainer = styled.div`
    display: block;
    background-color: ${cores.principal};
    width: 250px;
    overflow: hidden;
    transition:all 0.5s ease;
    height: 100%;
    position: fixed;
    top: 0;

    .header {
      display: flex;
      align-items: center;
      padding: 0 20px;
    }

    span{
        font-weight: 600;
        padding: 10px 25px;
        font-size: 0.8em;
        letter-spacing: 2px;
        transition: opacity 0.3s;
        opacity: 0.5;
    }
      
`
export const BtnCollapse = styled.a`
    transition: left, right, 0.3s;
    position: fixed;
    left: 235px;
    top: 160px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${cores.principal};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    cursor: pointer;
    color: white;
    z-index: 1;
    box-shadow: 1px 1px 1px ${cores.secundario};
    text-decoration: none;

    &:hover {
      background: ${cores.preto};
      transform: translateX(50%);
      color: ${cores.principal};
      box-shadow: 0 0 30px -10px ${cores.preto};
      transition: all 0.5s ease;
    }
`

export const MenuItem = styled.li`
  background-color: ${cores.principal};
  display: flex;
  color: ${cores.preto};
  padding: 12px 8px;
  margin:0;
  transition: all .1s;
  font-size: 14px;
  transition: all 0.5s ease;
  text-decoration: none;
  align-items: center;
  height: 45px;

  &:hover{
    background: ${cores.preto};
    transform: scale(1.05);
    color: ${cores.principal};
    box-shadow: 0 0 30px -10px ${cores.preto};
    transition: all 0.5s ease;
    cursor: pointer;

    i {
      animation: swing ease-in-out 0.8s 1 alternate;
    }

    &:after{
      content: "";
      transition: transform 0.3s;
      border-right: 2px solid currentcolor;
      border-bottom: 2px solid currentcolor;
      width: 5px;
      height: 5px;
      transform: rotate(-45deg);
    }
  
    @keyframes swing {
      0%, 30%, 50%, 70%, 100% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(10deg);
      }
      40% {
        transform: rotate(-10deg);
      }
      60% {
        transform: rotate(5deg);
      }
      80% {
        transform: rotate(-5deg);
      }
    }
}
`