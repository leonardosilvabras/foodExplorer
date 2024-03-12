import {
  Content,
  Logo,
  Form,
  Label,
  Input,
  Button,
  ButtonEmpty,
  FormLine,
} from "./styles";

import Logomarca from "../../assets/Group 5946.svg"

function signUp() {
  return (
    <Content>
      <Logo src={Logomarca} />
      <Form>
        <h2>Crie sua conta</h2>
        <FormLine>
          <Label>Seu nome</Label>
          <Input type="text" placeholder="Exemplo: Maria da Silva"></Input>
        </FormLine>
        <FormLine>
          <Label>Email</Label>
          <Input type="text" placeholder="Exemplo: exemplo@exemplo.com.br"></Input>
        </FormLine>
        <FormLine>
          <Label>Senha</Label>
          <Input type="password" placeholder="No mínimo 6 caracteres"></Input>
        </FormLine>
        <Button>Criar conta</Button>
        <ButtonEmpty>Já tenho uma conta</ButtonEmpty>
      </Form>
    </Content>
  );
}

export default signUp;
