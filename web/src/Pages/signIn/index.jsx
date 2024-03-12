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

function signIn() {
  return (
    <Content>
      <Logo src={Logomarca} />
      <Form>
        <h2>Faça Login</h2>
        <FormLine>
          <Label>Email</Label>
          <Input type="text" placeholder="Exemplo: exemplo@exemplo.com.br"></Input>
        </FormLine>
        <FormLine>
          <Label>Senha</Label>
          <Input type="password" placeholder="No mínimo 6 caracteres"></Input>
        </FormLine>
        <Button>Entrar</Button>
        <ButtonEmpty>Criar uma conta</ButtonEmpty>
      </Form>
    </Content>
  );
}

export default signIn;
