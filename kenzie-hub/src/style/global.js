import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --Color-primary: #FF577F;
  --Color-primary-Focus: #FF427F;
  --Color-primary-Negative: #59323F;
  --Grey-0: #F8F9FA;
  --Grey-1: #868E96;
  --Grey-2: #343B41;
  --Grey-3: #212529;
  --Grey-4: #121214;
  --Grey: #ffff;
  --Sucess: #3FE864;
  --Negative: #E83F5B;
  
  --font: 'Inter', sans-serif;

  --radius: 4px;
--color: rgba(0, 0 ,0, 0.8)
}

body{
  background: var( --Grey-4)
}

`;
