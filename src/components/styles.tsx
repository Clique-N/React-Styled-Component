import styled from "styled-components";

export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
`;
export const CardInfo = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 10px; 
`;

export const CardName = styled.h1`
    font-size: 14px;
    color: #374151;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-wrap: break-word;
`

export const CardPrice = styled.p`
    font-size: 14px;
    color: #6b7280;
    margin-top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button<{adicionado: boolean}>`
    background: ${({adicionado}) => (adicionado ? "#6c757d" : "#198754")};
    border: 1px solid #ccc; 
    border-radius: 10px;
    color: #d6ab9d;   

    &:hover {
    opacity: 0.9;
    }
`;