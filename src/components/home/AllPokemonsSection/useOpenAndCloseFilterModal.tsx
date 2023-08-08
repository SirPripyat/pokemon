import { useState } from "react";

export default function useOpenAndCloseFilterModal() {
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);

  const openOrCloseFilterModal = () => {
    setFilterModalIsOpen(!filterModalIsOpen);
  };

  return {
    filterModalIsOpen,
    openOrCloseFilterModal,
  };
}
