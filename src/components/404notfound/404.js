import { useNavigate } from "react-router-dom";

export const NotFound = ({ setId }) => {
  const navigate = useNavigate();

  setId(null);
  setTimeout(() => {
    setId(false);
    navigate("/");
  }, 2000);

  return (
    <>
      <h1>404 Page not Found</h1>
    </>
  );
};
