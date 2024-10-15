import styled from "styled-components";

import Background from "../../assets/matterhorn-2.jpg";

export const Img = styled.div`
  width: 100%;
  height: 200px;
  background-position: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContatoContent = styled.div`
 display:flex;
 padding: 50px 150px;
 justify-content:space-between;
`;

export const DivIcons = styled.div`
  display:flex;
  flex-wrap:nowrap;
  gap:25px;
`

