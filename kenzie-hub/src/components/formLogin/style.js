import styled from "styled-components";

export const StyledFormLogin = styled.div`
  font-family: var(--font);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: var(--Grey-3);
  border-radius: var(--radius);
  padding: 15px 20px;
  width: 260px;
  height: 450px;

  .title {
    color: var(--Grey-0);
    font-size: 14px;
    font-weight: 700;
    padding: 25px 0px 10px 0px;
  }

  label {
    color: var(--Grey-0);
    font-size: 10px;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    background: var(--Grey-2);
    border: 1px solid var(--Grey-2);
    color: var(--Grey-0);
    border-radius: var(--radius);
    padding: 0.7rem 3rem;
  }

  button {
    background: var(--Color-primary);
    border: 1px solid var(--Color-primary);
    color: var(--Grey);
    width: 259px;
    border-radius: var(--radius);
    height: 39px;
  }

  @media (min-width: 800px) {
    width: 350px;
  }
`;

export const StyledOrientation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  gap: 20px;
  font-family: var(--font);
  align-items: center;

  span {
    color: var(--Grey-1);
    font-weight: 600;
    font-size: 10px;
  }

  .register-button {
    background: var(--Grey-1);
    border: 1px solid var(--Grey-1);
    color: var(--Grey);
    font-weight: 500;
    font-size: 12px;
    border-radius: var(--radius);
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 259px;
  }
`;
