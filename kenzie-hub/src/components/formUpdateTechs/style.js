import styled from "styled-components";

export const HeaderForm = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--Grey-2);
  font-family: var(--font);
  color: var(--Grey-0);
  font-size: 12px;
  font-weight: 700;
  padding: 10px;

  button {
    border: none;
    background: none;
    color: var(--Grey-1);
  }
`;

export const FormUpdate = styled.form`
  background: var(--Grey-3);
  padding: 10px;
  font-family: var(--font);
  display: flex;
  flex-direction: column;
  gap: 10px;

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  label,
  span {
    color: var(--Grey-0);
    font-size: 12px;
  }

  input,
  select {
    background: var(--Grey-2);
    border: var(--Grey-2);
    color: var(--Grey-0);
    height: 38px;
    border-radius: var(--radius);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
 gap: 25px;
 font-size: 12px;

  .save-button {
    background: var(--Color-primary-Negative);
    border: var(--Color-primary-Negative);
    border-radius: var(--radius);
    color: var(--Grey);
    padding: 10px 35px;
  }

  .remove-button{
    background: var(--Grey-1);
    border: 1px solid var(--Grey-1);
    color: var(--Grey);
    border-radius: var(--radius);
    padding: 10px 30px;
    
  }
`;
