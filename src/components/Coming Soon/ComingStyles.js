import styled from "styled-components";

export const Button = styled.button`
    width: 4rem;
    height: 3rem;
    padding: .75rem;
    outline: none;
    border: none;
    border-radius: 10px;
    color: var(--white-color);
    background: var(--red-color);
    &:hover{
        transition: .3s ease-in;
        width: 4.1rem;
    }
`