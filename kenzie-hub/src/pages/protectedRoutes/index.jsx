import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext, useEffect } from "react";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    if(!user){
        navigate("/login")
    }

  }, [])

  return (
    <>
    {user ? <Outlet /> : null}
    </>
  )


};
