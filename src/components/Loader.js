import RingLoader from "react-spinners/RingLoader";

const Loader = ({ loading }) => {
  return (
    <div className="content-center">
      <RingLoader color={"#ffffff"} loading={loading} size={100} />
    </div>
  );
};

export default Loader;
