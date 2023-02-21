import { TechProviders } from "../../context/techContext";
import { UserProvider } from "../../context/userContext";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProviders>{children}</TechProviders>
    </UserProvider>
  );
};
