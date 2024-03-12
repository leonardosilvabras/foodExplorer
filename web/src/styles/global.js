import {createGlobalStyle} from "styled-components";
import { Colors } from "./colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    background: ${Colors.Dark[100]};
  }
`;
