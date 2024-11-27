import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #181f36;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    gap: 30px;
`

export const ContainerClients = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;


    @media(max-width: 1160px){
        grid-template-columns: 1fr;
    }
`

export const CardClients = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;

    p{
        color: #fff;
        font-size: 16px;
        font-weight: 200;
    }

    h3{
        color: #fff;
        font-size: 24px;
        margin-bottom: 5px;
        text-transform: capitalize;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;
    &:hover{
        opacity: .8;
    }

    &:active{
        opacity: .5;
    }
`

export const AvatarClient = styled.img`
    height: 80px;
`




