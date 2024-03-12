import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const Content = styled.div`
  display: grid;
  grid-template-areas: "LOGO FORM";
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Logo = styled.img`
  grid-area: LOGO;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  background: ${Colors.Dark[700]};
  
  padding: 4rem;
  gap: 2rem;

  border-radius: 1rem;

  grid-area: FORM;

  > h2 {
    color: ${Colors.Ligth[100]};
    font-size: 2rem;
    text-align: center;
  }
`;

export const Label = styled.label`
  color: ${Colors.Ligth[400]};
`;

export const Input = styled.input`
  background: none;
  border: 1px solid ${Colors.Ligth[100]};
  padding: 1rem 1rem;
  border-radius: 5px;
  width: 21.75rem;
`;

export const Button = styled.button`
  background: ${Colors.Tomato[100]};
  color: ${Colors.Ligth[100]};
  border: none;

  height: 4rem;
`;

export const ButtonEmpty = styled.button`
  color: ${Colors.Ligth[100]};
  border: none;
  background: none;
  height: 4rem;
`;

export const FormLine = styled.div`
  display: flex;
  flex-direction: column;
`