import { useContext } from "react";
import { StyledItemsTech } from "./style";
import { UserContext } from "../../context/userContext";
import { TechContext } from "../../context/techContext";

export const ItemsTech = () => {
  const { listTech } = useContext(UserContext);
  const { toggleUpdateModal } = useContext(TechContext);

  return (
    <>
      {listTech.map((tech) => (
        <StyledItemsTech onClick={toggleUpdateModal(tech.id)} key={tech.id}>
          <span className="title">{tech.title}</span>
          <span className="status">{tech.status}</span>
        </StyledItemsTech>
      ))}
    </>
  );
};
