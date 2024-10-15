import { SlLayers } from "react-icons/sl";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineDesktop } from "react-icons/ai";

import {
  Content,
  HeaderDiv,
  HeaderItens,
  Img,
  SubTitule,
  Text,
} from "./styles";

export function Header() {
  return (
    <HeaderDiv>
      <Img>
        <h1>Minha primeira pagina com React</h1>
      </Img>
      <HeaderItens>
        <Content>
          <AiOutlineDesktop size={75} color="#156fff" />
          <SubTitule>Somente para desktop</SubTitule>
          <Text>
            Vamos aprender, como utilizar um <br />
            framework
          </Text>
        </Content>
        <Content>
          <SlLayers size={75} color="#156fff" />
          <SubTitule>Criado com componentes</SubTitule>
          <Text>Utilizando o styled Components.</Text>
        </Content>
        <Content>
          <IoIosCheckmarkCircleOutline size={75} color="#156fff" />
          <SubTitule>Facíl aproveitamento</SubTitule>
          <Text>Estamos no caminho</Text>
        </Content>
      </HeaderItens>
    </HeaderDiv>
  );
}
