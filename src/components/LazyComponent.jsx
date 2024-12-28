import { lazy, useState } from "react";
import { FadeIn, LeftMiddle } from "../components/styles";
const Overlay = lazy(() => import("../components/Overlay"));
const Rolls = lazy(() => import("./Rolls"));

const LazyComponent = () => {
  const [speed, set] = useState(1);

  return (
    <>
      <Rolls speed={speed} />
      <FadeIn />
      <Overlay />
      <LeftMiddle>
        <input
          type="range"
          min="0"
          max="10"
          value={speed}
          step="1"
          onChange={(e) => set(e.target.value)}
        />
      </LeftMiddle>
    </>
  );
};

export default LazyComponent;
