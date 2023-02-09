import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../components/pagesHeader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledHeader, StyledApresentation, StyledBody } from "./style";
import { api } from "../../services";
import { useEffect, useState } from "react";

export const DashBorard = () => {
  const navigate = useNavigate();

  const getProfile = async () => {
    return await api.get("/profile");
  };
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getProfileFromAPI() {
      const { data } = await getProfile();
      setProfile(data);
    }
    getProfileFromAPI();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    toast.success("Até mais tarde");
  };

  return (
    <>
      <StyledHeader>
        <PageHeader />
        <button onClick={logout}>Sair</button>
      </StyledHeader>
      {profile === null ? (
        <></>
      ) : (
        <StyledApresentation>
          <h3>Olá, {profile.name}</h3>
          <span>{profile.course_module}</span>
        </StyledApresentation>
      )}
      <StyledBody>
        <h3>Que pena! Estamos em desenvolvimento </h3>
        <span>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
      </StyledBody>
    </>
  );
};
