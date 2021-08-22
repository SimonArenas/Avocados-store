import { useRouter } from "next/router";

const Producto = () => {
  const {
    query: { producto },
  } = useRouter();
  return <div>Esta es la pagina del producto: {producto}</div>;
};

export default Producto;
