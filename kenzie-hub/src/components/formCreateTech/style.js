import styled from "styled-components";

export const ModalBody = styled.div`
display: flex;
justify-content: center;

.modal-form{
  width: 40%;
}



`;

export const HeaderModal = styled.div`
  color: var(--Grey-0);
  background: var(--Grey-2);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-family: var(--font);

  span{
    font-size: 12px;
    font-weight: 700;
  }

  button{
    border: none;
    background: none;
    color: var(--Grey-1)
  } 
  
`;

export const FormModal = styled.form`

font-family: var(--font);
background: var(--Grey-3);
color: var(--Grey-0);
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

fieldset{
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0px 10px;
  padding: 10px;
  width: 90%;
}

input, select{
  background: var(--Grey-2);
  border: 1px solid var(--Grey-2);
  padding: 5px 10px;
  color: var(--Grey-0)
  height: 38px;
  border-radius: var(--radius)
 
}


label, span{
  font-size: 10px;
}


button{
  background: var(--Color-primary);
  border: 1px solid var(--Color-primary);
  color: var(--Grey);
  margin: 0px 0px 10px 0px;
  padding: 5px;
  border-radius: var(--radius);
  height: 38px;
  width: 90%;
  font-size: 12px;
  font-weight: 500;
  outline: none;
  
}

`;




