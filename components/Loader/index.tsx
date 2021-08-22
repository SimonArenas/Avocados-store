import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <div style={{ position: "absolute", top: "45%", right: "45%" }}>
      <Loader type="ThreeDots" color="#6ab04c" height={80} width={80} />
    </div>
  );
};

export default Spinner;
