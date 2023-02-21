import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../context/techContext";
import { FormModal, HeaderModal, ModalBody } from "./style";
import Modal from "react-modal";
import * as yup from "yup";

export const RenderTech = () => {
  const { register, handleSubmit } = useForm();
  const { createTech, toggleModal, modalIsOpen } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData)

  }
  Modal.setAppElement('#root');
  const schema = yup.object().shape({
    title: yup.string().required("Título é obrigatório"),
    status: yup.string().required("Escolha um status")
  })
  
  return (
    <ModalBody>
      <Modal className="modal-form" overlayClassName=""  isOpen={modalIsOpen} onRequestClose={toggleModal}>
        <HeaderModal>
          <span>Cadastrar Tecnologia</span>
          <button onClick={toggleModal}>X</button>
        </HeaderModal>
        <FormModal onSubmit={handleSubmit(submit)}>
          <fieldset>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" {...register("title")} />
          </fieldset>
          <fieldset>
            <span>Selecionar status</span>
            <select {...register("status")}>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
            </select>
          </fieldset>
          <button type="submit">Cadastrar Tecnologia</button>
        </FormModal>
      </Modal>
    </ModalBody>
  );
};
