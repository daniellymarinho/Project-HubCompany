import styled from "styled-components";

export const StyledFormRegister = styled.div`
  font-family: var(--font);
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 20px;
  background: var(--Grey-3);
  margin: 0px 20px;
  border-radius: var(--radius);
  height: 50rem;

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    color: var(--Grey-0);
    font-size: 10px;
  }

  input,
  select {
    padding: 10px;
    background: var(--Grey-2);
    border: 1px solid var(--Grey-2);
    border-radius: var(--radius);
    color: var(--Grey-1);
  }

  button {
    background: var(--Color-primary-Negative);
    border: 1px solid var(--Color-primary-Negative);
    border-radius: var(--radius);
    color: var(--Grey);
    padding: 10px;
  }
`;
