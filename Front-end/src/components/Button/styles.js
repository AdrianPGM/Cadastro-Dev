import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : 'solid 1px white'};
    cursor: pointer;
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'} ;
    font-size: 16px;
    color: white;
    padding: 16px 32px;
    width: fit-content;
    border-radius: 30px;

    &:hover{
        opacity: .8;
    }
    
    &:active{
        opacity: .5;
    }
`