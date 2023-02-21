import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PageHeader } from "../../components/pagesHeader";
import { StylePage, StyledHeader, StyleDescription, StyledForm } from "./style";
import { FormRegister } from "../../components/formRegister";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const formSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação de senha deve ser igual a senha")
    .required("Confirmação de senha é obrigatória"),

  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  course_module: yup.string().required("Campo obrigatório"),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();

  const {onSubmitFunction} = useContext(UserContext)

  return (
    <StylePage>
      <StyledHeader>
        <PageHeader />
        <button onClick={() => navigate("/login")}>Voltar</button>
      </StyledHeader>
      <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
        <StyleDescription>
          <h3>Crie sua conta</h3>
          <span className="">Rapido e grátis, vamos nessa</span>
        </StyleDescription>
        <FormRegister register={register} errors={errors} />
      </StyledForm>
    </StylePage>
  );
};
