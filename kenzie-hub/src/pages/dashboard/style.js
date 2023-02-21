import styled from "styled-components"

export const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid var(--Grey-3);
padding: 30px 15px;

button{
  background: var(--Grey-3);
  border: 1px solid var(--Grey-3);
  padding: 5px 15px;
  border-radius: var(--radius);
  color: var(--Grey-0)
}

@media(min-width: 800px){
  padding: 2rem 8rem;
}
`

export const StyledApresentation = styled.div`

font-family: var(--font);
display: flex;
flex-direction: column;
gap: 10px;
border-bottom: 1px solid var(--Grey-3);
padding: 10px;

h3{
color: var(--Grey-0);
font-size: 18px;
font-weight: 700;
}

span{
  color: var(--Grey-1);
  font-size: 12px;
}

@media(min-width: 800px){
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 8rem;
}

`

export const StyledBody = styled.div`
font-family: var(--font);
color: var(--Grey-0);
display: flex;
gap: 10px;
padding: 10px;
justify-content: space-between;

button{
  background: var(--Grey-3);
  border: 1x solid var(--Grey-3);
  color: var(--Grey);
  padding: 5px 10px;
  border-radius: var(--radius);
}

@media(min-width: 800px){
  padding: 5rem 8rem;
}

`

export const ListTechs = styled.ul`
background: var(--Grey-3);
display: flex;
align-items: center;
gap: 5px;
flex-direction: column;
width: 90%;
border-radius: var(--radius);
font-family: var(--font);

@media(min-width: 800px){
  width: 83%;
}

`

export const ContainerList = styled.div`
display: flex;
justify-content: center;
font-family: var(--font);

.Orientation{
 color: var(--Grey-0);
 font-size: 16px;
 background: var(--Grey-3);
 border-radius: var(--radius);
 padding: 10px;
}

`