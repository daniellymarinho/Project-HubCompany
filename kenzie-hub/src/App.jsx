import { Styled } from "./style";
import { AppRoutes } from "./rotes";
import {ToastContainer} from "react-toastify"

const App = () => {
  return (
    <>
      <Styled />
      <AppRoutes />
      <ToastContainer/>
    </>
  );
};

export default App;
