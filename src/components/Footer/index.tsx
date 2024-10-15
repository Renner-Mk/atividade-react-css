import { ContatoContent, Img, DivIcons } from "./style";

import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <Img>
        <h1>Contato</h1>
      </Img>
      <ContatoContent>
        <div>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <small>&copy; Your Website 2024.All Rights Reserved.</small>
        </div>
        <DivIcons>
          <FaFacebook size={40} color="#156fff" />
          <FaTwitterSquare size={40} color="#156fff" />
          <FaInstagram size={40} color="#156fff" />
        </DivIcons>
      </ContatoContent>
    </>
  );
}
