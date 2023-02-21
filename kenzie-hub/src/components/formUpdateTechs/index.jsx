import { useContext } from "react";
import Modal from "react-modal";
import { TechContext } from "../../context/techContext";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/userContext";
import { HeaderForm, FormUpdate, ButtonsContainer } from "./style";
import * as yup from "yup";

export const UpdateTechs = () => {
  const { register, handleSubmit } = useForm();
  const {
    updateModal,
    toggleUpdateModal,
    removeTech,
    updateTech,
    updateModalTech,
  } = useContext(TechContext);

  Modal.setAppElement("#root");

  const submit = (formData) => {
    updateTech(formData, updateModalTech.id);
  };
  const onRemoveTech = async () => {
    await removeTech(updateModalTech.id)();
    toggleUpdateModal(updateModalTech.id);
  };

  const schema = yup.object().shape({
   status: yup.string().required 
  });

  return (
    <div>
      <Modal
        className="modal"
        isOpen={updateModal}
        onRequestClose={toggleUpdateModal}
      >
        <HeaderForm>
          <span>Tecnologia Detalhes</span>
          <button onClick={toggleUpdateModal(updateModalTech.id)}>X</button>
        </HeaderForm>
        <FormUpdate onSubmit={handleSubmit(submit)}>
          <fieldset>
            <label htmlFor="name">Nome do projeto</label>
            <input id="name" type="text" defaultValue={updateModalTech.title}/>
          </fieldset>
          <fieldset>
            <span>Status</span>
            <select {...register("status")}>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
            </select>
          </fieldset>
          <ButtonsContainer>
            <button className="save-button" type="submit">
              Salvar alterações
            </button>
            <button
              className="remove-button"
              type="button"
              onClick={onRemoveTech}
            >
              Excluir
            </button>
          </ButtonsContainer>
        </FormUpdate>
      </Modal>
    </div>
  );
};
