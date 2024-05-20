import styled from "styled-components";

export const LoginContainer = styled.div`
    background-position: center;
    background-size: cover;
    height: 100vh; 
    margin: 0; 
    display: flex; 
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`  
    width: 350px;
    text-align: center;
    border: 1px solid #f7eeda;
    border-radius: 12px;
    padding: 10px 20px;
    background: transparent;
    backdrop-filter: blur(6px);
    box-shadow: 5px 5px 10px 0 #ca9738;

    h2 {
    font-size: 30px;
    color: #0a0300;
    margin-bottom: 16px;
    }

    a.forgot,
    a.sign-up {
    color: rgb(3, 3, 3);
    text-decoration: none;
    }
`

export const Input = styled.div`
    position: relative;
    margin-bottom: 20px;

    input[type="email"], input[type="senha"] {
    border-radius: 10px;
    background: transparent;
    border: 2px solid #f0cf9b;
    width: 100%; 
    height: 40px; 
    padding: 0 20px;
    box-sizing: border-box;
    }

    i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    color: #f0cf9b;
}

    input::placeholder {
    color: rgb(9, 9, 9);
    }

    input[type="email"]:focus::placeholder,
    input[type="senha"]:focus::placeholder {
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