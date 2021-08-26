import ProductsDetail from "components/ProductsDetail";
import { server } from "config";
import { GetStaticProps } from "next";

export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/avocado`);
  const { allAvocados: productList } = await response.json();

  const paths = productList.map(({ id }: any) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    // Incremental static generation
    // fallback false -> cualquier pagina que no se espcifique en los paths, dará un 404
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${server}/api/avocado/${params?.id}`);
  const { getAvocado: productDetail } = await response.json();

  return { props: { productDetail } };
};

const ProductPage = ({ productDetail }: { productDetail: TProduct }) => {
  return <>{productDetail && <ProductsDetail producto={productDetail} />}</>;
};

export default ProductPage;
