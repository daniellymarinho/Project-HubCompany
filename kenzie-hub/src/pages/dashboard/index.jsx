import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../components/pagesHeader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  StyledHeader,
  StyledApresentation,
  StyledBody,
  ListTechs,
  ContainerList,
} from "./style";
import { ItemsTech } from "../../components/itemsTech";
import { useContext } from "react";
import { TechContext } from "../../context/techContext";
import { RenderTech } from "../../components/formCreateTech";
import { UserContext } from "../../context/userContext";
import { UpdateTechs} from "../../components/formUpdateTechs"

export const DashBorard = () => {
  const navigate = useNavigate();
  const { logout, toggleModal } = useContext(TechContext);
  const {  user,  listTech } = useContext(UserContext);

  return (
    <>
      <StyledHeader>
        <PageHeader />
        <button onClick={logout}>Sair</button>
      </StyledHeader>

      <StyledApresentation>
        <h3>Olá, {user.name}</h3>
        <span>{user.course_module}</span>
      </StyledApresentation>

      <StyledBody>
        <h3>Tecnologias</h3>
        <button onClick={toggleModal}>+</button>
      </StyledBody>
      <RenderTech/>
      < UpdateTechs/>
      <ContainerList>
          {listTech.length > 0 ? (
            <ListTechs>
              <ItemsTech />
            </ListTechs>
          ) : (
            <span className="Orientation">Você ainda não possui tecnologias</span>
          )}
      
      </ContainerList>
    </>
  );
};
