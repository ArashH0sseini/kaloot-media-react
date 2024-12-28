import loading from "../assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
