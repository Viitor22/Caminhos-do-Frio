import styled from "styled-components";
import { breakpoints, cores } from "../../style";


export const ContainerDiv = styled.div`
.nav-bar {
    display: none;
    justify-content: space-between;
    padding: 1.5rem 6rem;
}

.mobile-menu-icon {
    display: none;
}

.mobile-menu {
    display: none;

        .links{
            display: flex;
        }

        .hover{
        display: flex;
        padding: 0px 20px;
        align-items: center;
        position: relative;
            &:hover{
                .dropdown-content{
                    display: block;
                    z-index: 2;
                }
            }
        }
}

@media screen and (max-width: ${breakpoints.tablet}) {
    .nav-bar {
        display: flex;
        padding: 1.5rem 4rem;
    }

    .mobile-menu-icon {
        display: block;
    }
    .mobile-menu-icon button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;
    }
    .mobile-menu .nav-item {
        display: block;
        padding-top: 1.2rem;
    }

    .open {
        display: block;
    }
}
`

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    top: 75%;
    right: -80%;
    background-color: #fff;
    width: 200px;
    border-radius: 4px;
    box-shadow: 0 0 40px -10px ${cores.preto};
    margin-top: 12px;
    overflow: hidden;
    transition:all .5s;

    li{
        background-color: ${cores.branco};
        display: flex;
        justify-content: space-between;
        color: ${cores.preto};
        padding: 12px 8px;
        margin:0;
        transition:all .1s;
        font-size: 14px;
        transition:all .5s;
        text-decoration: none;
    }

    li:hover{
        background: ${cores.preto};
        transform: scale(1.05);
        color: ${cores.principal};
        box-shadow: 0 0 30px -10px ${cores.preto};
        transition:all .5s;
        cursor: pointer;
    }
}
`