import { CartUseContext } from "../../content/cart-contex";

export const NotFound = () => {
  const { navigate, setId } = CartUseContext();

  setTimeout(() => {
    setId(true);
    navigate("/");
  }, 2000);

  return (
    <>
      <h1>404 Page not Found</h1>
    </>
  );
};
