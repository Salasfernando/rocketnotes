import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';





export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis ratione minus consectetur ea earum blanditiis sunt reiciendis cumque, repellendus facere magnam harum commodi inventore nostrum aspernatur nihil excepturi eligendi.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />

          </Section>

          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  );
}