import PolicyLayout from "./layout";
import PolicyContextProvider from "./context/provider";

/**
 * Renders the Policy Module
 * @returns {JSX.Element} Policy Module
 */
const Policy: React.FC = () => {
  return (
    <PolicyContextProvider>
      <PolicyLayout />
    </PolicyContextProvider>
  );
};

export default Policy;
