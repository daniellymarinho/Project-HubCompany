import logo from "../../assets/Logo.svg";
import { Page } from "./style";
import { FormLogin } from "../../components/formLogin";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      navigate("/DashBoard"), toast.success("Seja bem-vindo");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

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
