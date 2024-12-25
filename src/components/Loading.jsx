import { useRef,useEffect } from "react";
import loading from "../assets/video/load.webm";

const Loading = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = 3;
        }
      }, []);
      
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#111b1b] z-50">
      <video ref={videoRef} autoPlay muted
        className="w-full h-auto"
      >
        <source src={loading} type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;
