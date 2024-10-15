import styled from "styled-components";



export const Main = styled.main`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
`;

export const DivMainContent = styled.div`
    padding:120px 80px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
`

export const Text = styled.p`
    font-size: 18px;
    color: rgba(1,1,1, .6);
`

export const H2 = styled.h2`
    font-size: 32px;
    margin-bottom: 10px;
`