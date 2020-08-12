import { useState } from "react";

type Modal = {
  isShowing: boolean;
  toggle: () => void;
};

const useModal = (): Modal => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = (): void => {
    setIsShowing(!isShowing);
  };

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
