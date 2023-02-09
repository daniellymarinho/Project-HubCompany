import { StyledFormLogin, StyledOrientation } from "./style";

export const FormLogin = ({register, navigate, errors}) => {
  
  return (
    <StyledFormLogin>
      <span className="title">Login</span>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email?.message}
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password?.message}
      </fieldset>
      <button type="submit">Entrar</button>
      <StyledOrientation>
        <span>Ainda não possui uma conta?</span>
        <button className="register-button" onClick={() => navigate("/")} type="button" >Cadastra-se </button>
      </StyledOrientation>
    </StyledFormLogin>
  );
};
