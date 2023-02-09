import styled from "styled-components";

export const StylePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 1rem;
  align-items: center;
  font-family: var(--font);
  width: 290px;

  button {
    background: var(--Grey-3);
    border: 1px solid var(--Grey-3);
    color: var(--Grey-0);
    font-weight: 600;
    font-size: 10px;
    padding: 10px 20px;
    border-radius: var(--border);
  }

  @media (min-width: 800px) {
    width: 30%;
  }
`;

export const StyleDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: var(--font);
  padding: 15px 0px;

  h3 {
    color: var(--Grey-0);
    font-size: 18px;
    font-weight: 700;
  }

  span {
    color: var(--Grey-1);
    font-size: 12px;
  }
`;

export const StyledForm = styled.form`
  font-family: var(--font);
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--Grey-3);
  margin: 0px 20px;
  border-radius: var(--radius);
  width: 290px;

  @media (min-width: 800px) {
    width: 30%;
  }
`;
