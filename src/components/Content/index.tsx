import { Main, DivMainContent, Image, Text, H2 } from "./styles";

import image1 from "../../assets/cosmos-swirl-2-scaled.jpg";
import image2 from "../../assets/florian-olivo-4hbJ-eymZ1o-unsplash-scaled-e1616631053918.jpg";
import image3 from "../../assets/temperatura-superficie-oceano-esta-mais-alta.webp";

export function Content() {
  return (
    <>
      <Main>
        <DivMainContent>
          <H2>Lorem ipsum dolor</H2>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            id nobis ab labore eveniet fuga excepturi, impedit vitae dicta
            recusandae laboriosam velit doloribus? Numquam mollitia, dolorem
            molestiae magnam totam id quaerat minus est vitae repellendus
            praesentium quod libero, rem veritatis aut alias officiis ratione
            minima fugit eos sed amet! Fugit assumenda dolor nihil quasi
            aliquid. Ipsam voluptatem illo alias beatae odit earum accusantium
            corrupti facilis ratione eaque adipisci inventore doloremque facere
            nostrum culpa consequatur minima similique expedita, quasi
            recusandae consequuntur quo rerum saepe. Blanditiis molestiae nemo
            quos soluta iure dolorum eius, corporis, rem temporibus assumenda
            hic dolores, ea quidem possimus!
          </Text>
        </DivMainContent>
        <Image src={image1} />
      </Main>
      <Main>
        <Image src={image2} />
        <DivMainContent>
          <H2>Lorem ipsum dolor</H2>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            id nobis ab labore eveniet fuga excepturi, impedit vitae dicta
            recusandae laboriosam velit doloribus? Numquam mollitia, dolorem
            molestiae magnam totam id quaerat minus est vitae repellendus
            praesentium quod libero, rem veritatis aut alias officiis ratione
            minima fugit eos sed amet! Fugit assumenda dolor nihil quasi
            aliquid. Ipsam voluptatem illo alias beatae odit earum accusantium
            corrupti facilis ratione eaque adipisci inventore doloremque facere
            nostrum culpa consequatur minima similique expedita, quasi
            recusandae consequuntur quo rerum saepe. Blanditiis molestiae nemo
            quos soluta iure dolorum eius, corporis, rem temporibus assumenda
            hic dolores, ea quidem possimus!
          </Text>
        </DivMainContent>
      </Main>
      <Main>
        <DivMainContent>
          <H2>Lorem ipsum dolor</H2>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            id nobis ab labore eveniet fuga excepturi, impedit vitae dicta
            recusandae laboriosam velit doloribus? Numquam mollitia, dolorem
            molestiae magnam totam id quaerat minus est vitae repellendus
            praesentium quod libero, rem veritatis aut alias officiis ratione
            minima fugit eos sed amet! Fugit assumenda dolor nihil quasi
            aliquid. Ipsam voluptatem illo alias beatae odit earum accusantium
            corrupti facilis ratione eaque adipisci inventore doloremque facere
            nostrum culpa consequatur minima similique expedita, quasi
            recusandae consequuntur quo rerum saepe. Blanditiis molestiae nemo
            quos soluta iure dolorum eius, corporis, rem temporibus assumenda
            hic dolores, ea quidem possimus!
          </Text>
        </DivMainContent>
        <Image src={image3} />
      </Main>
    </>
  );
}
