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

    i {
    margin-right: 12px;
  }

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
      margin-left: 12px;
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

export const Modal = styled.div`
    z-index: 1;   
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;

    &.visible{
        display: flex;
    }

    `
    export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    `

    export const ModalContent = styled.div`
    z-index: 1;   
    max-width: 1024px;
    padding: 8px;
    background-color: ${cores.branco};
    position: relative;

    header{
        display: flex;
        justify-content: flex-end;

        img{
            z-index: 1;
            cursor: pointer;
        }
    }
`
export const ModalContentContainer = styled.div`
    padding: 0px 16px 16px 16px;
    display: flex;

    img{
        width: 280px;
        height: 280px;
        object-fit: cover;
    }

    .text-content{
        margin-left: 22px;

        p{
            margin: 20px 0px;
        }

        button {
            max-width: 225px;
            border: none;
            padding: 6px;
        }

        img{
            width: 80px;
            height: 80px;
            margin-left: 65%;
            object-fit: cover;
        }
    }
`
export const WrapperModal = styled.div`  
    width: 450px;
    text-align: center;
    border: 1px solid #f7eeda;
    border-radius: 12px;
    padding: 20px;
    background: ${cores.principal};
    backdrop-filter: blur(6px);
    box-shadow: 5px 5px 10px 0 #ca9738;

    h2 {
        font-size: 30px;
        color: #f0cf9b;
    }

    form {
        padding-top: 50px;
        a{
        text-decoration: none;
        }

        p {
            color: #f0cf9b;
        }

        .sign-up {
            color: #ffffff;
        }
    }
`

export const Input = styled.div`
    position: relative;
    margin-bottom: 20px;

    input, select {
        border-radius: 10px;
        background: transparent;
        border: 2px solid #f0cf9b;
        width: 100%;
        height: 40px;
        padding: 0 20px;
        box-sizing: border-box;
        color: #ffffff;
    }

    i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    color: #f0cf9b;
}

    input::placeholder,
        select {
        color: #ffffff;
    }

        select option {
        color: #000000;
    }

    input[type="email"]:focus::placeholder,
    input[type="senha"]:focus::placeholder,{
    transform: translateY(-100%);
    transition: transform 0.2s ease-in-out;
    }

    input[type="email"]:not(:focus)::placeholder,
    input[type="senha"]:not(:focus)::placeholder {
    transform: translateY(0%);
    transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out;
    font-size: 16px;
    }
`
export const LoginButton = styled.button`
    background: #f0cf9b;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 45px;
    width: 200px;
    height: 40px;
    margin: 16px 0 16px 0;
`