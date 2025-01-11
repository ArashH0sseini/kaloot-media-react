import { lazy, useState } from "react";
import { FadeIn, LeftMiddle } from "../helpers/styles";
const Rolls = lazy(() => import("./3dModels/Rolls"));

const Rolls3dBackground = () => {
  const [speed, set] = useState(1);

  return (
    <>
      <Rolls speed={speed} />
      <FadeIn />
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

export default Rolls3dBackground;
