import styled from "styled-components";

export const LoginContainer = styled.div`
    background-position: center;
    background-size: cover;
    height: 85vh; 
    margin: 0; 
    display: flex; 
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`  
    width: 450px;
    text-align: center;
    border: 1px solid #f7eeda;
    border-radius: 12px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
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