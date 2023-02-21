import logo from "../../assets/Logo.svg";
import { Page } from "./style";
import { FormLogin } from "../../components/formLogin";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigátoria").matches(),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { onSubmit } = useContext(UserContext);

  return (
    <Page>
      <header>
        <img src={logo} alt="" />
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLogin register={register} navigate={navigate} errors={errors} />
      </form>
    </Page>
  );
};
