import styled from "styled-components";
import Background from "../../assets/matterhorn-2.jpg";

export const HeaderDiv = styled.header`
    background-color: rgba(180,180,180, .1);
    padding:1px;
`
export const Img = styled.div`
  width: 100%;
  height: 500px;
  background-position: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderItens = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    text-align: center;
    margin:50px 10%;
` 

export const Content = styled.div`
    margin: 50px 0;
    line-height: 35px;
`
export const SubTitule = styled.h2`
    font-size:26px;
    color: #3c3c3d;
`

export const Text = styled.p`
    font-size:20px;
    line-height: 25px;
    margin-top:10px;
    color: rgba(0,0,0,.7);
`

