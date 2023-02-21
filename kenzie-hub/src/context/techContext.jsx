import { createContext } from "react";
import { api } from "../services";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./userContext";
import { ListTechs } from "../pages/dashboard/style";

export const TechContext = createContext({});

export const TechProviders = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const { listTech, setListTech, setUser } = useContext(UserContext);
  const [updateTechList, shouldUpdateTech] = useState(true);
  const [modalTech, setModalTech] = useState(null);
  const [updateModalTech, setUpdateModalTech] = useState({ id: null });

  const navigate = useNavigate();

  const toggleModal = () => {
    setModalIsOpen((current) => !current);
  };

  const toggleUpdateModal = (techId) => () => {
    setUpdateModal((current) => !current);
    const [tech] = listTech.filter((item) => item.id == techId);
    if (tech) {
      setUpdateModalTech(tech);
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get("/profile");
        setUser(response.data);
        setListTech(response.data.techs);
        navigate("/DashBoard")
        shouldUpdateTech(false);
      
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [updateTechList]);

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null)
    navigate("/login");
    toast.success("Até mais tarde");
  };

  const createTech = async (formData) => {
    try {
      await api.post("/users/techs", formData);
      shouldUpdateTech(true);
      toast.success("Tecnologia criada com sucesso");
    } catch (error) {
      toast.error("O usuário já possue essa tecnologia criada, você só pode atualizar")
      console.log(error);
    }
  };

  const removeTech = (techId) => async () => {
    try {
      await api.delete(`/users/techs/${techId} `);
      shouldUpdateTech(true);
      toast.success("Removido com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  const updateTech = async (formData, techId) => {
    try {
      await api.put(`/users/techs/${techId}`, formData);
      shouldUpdateTech(true);
      toast.success("Atualizado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        toggleModal,
        modalIsOpen,
        modalTech,
        updateModalTech,
        setModalTech,
        setUpdateModalTech,
        logout,
        toggleUpdateModal,
        updateModal,
        removeTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
