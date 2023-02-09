import { StyledFormRegister } from "./style";

export const FormRegister = ({ register, errors }) => {
  return (
    <StyledFormRegister>
      <fieldset>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name?.message}
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email?.message}
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite uma senha"
          {...register("password")}
        />
        {errors.password?.message}
      </fieldset>
      <fieldset>
        <label htmlFor="password">Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("password")}
        />
        {errors.password?.message}
      </fieldset>
      <fieldset>
        <label htmlFor="about">Bio</label>
        <input
          id="about"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        {errors.bio?.message}
      </fieldset>
      <fieldset>
        <label htmlFor="cellPhone">Contato</label>
        <input
          id="cellPhone"
          type="number"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact?.message}
      </fieldset>
      <label htmlFor="module">Selecionar módulo</label>
      <select name="" id="module" {...register("course_module")}>
        <option value="">Módulos</option>
        <option value="primeiro modulo">Primeiro módulo (Introdução ao frontEnd) </option>
        <option value="segundo modulo">Segundo módulo (frontEnd intermediário) </option>
        <option value="terceiro modulo">Terceiro módulo (frontEnd avançado) </option>
        <option value="quarto modulo">Quarto módulo (introdução ao backend) </option>
        <option value="quinto modulo">Quinto módulo (Backend intermediário) </option>
        <option value="sexto modulo ">Sexto módulo (Backend avançado) </option>
        {errors.course_module?.message}
      </select>
      
      <button type="submit">Cadastrar</button>
    </StyledFormRegister>
  );
};
