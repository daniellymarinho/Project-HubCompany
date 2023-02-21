import { createContext, useContext } from "react";
import { api } from "../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TechContext } from "./techContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [listTech, setListTech] = useState([]);
 
  
  const navigate = useNavigate();
 


  const onSubmit = async (data) => {
    try {
      const response = await api.post("/sessions", data);

      setListTech(response.data.user.techs)
      setUser(response.data.user)

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      navigate("/DashBoard"), toast.success("Seja bem-vindo");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

   
 
  const onSubmitFunction = async (data) => {
    try {
      await api.post("/users", data);
      navigate("/login"), toast.success("Cadastro realizado com sucesso");
    } catch (error) {
      console.log(error), toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <UserContext.Provider value={{ onSubmit, onSubmitFunction, user, setUser, listTech, setListTech }}>
      {children}
    </UserContext.Provider>
  );
};
