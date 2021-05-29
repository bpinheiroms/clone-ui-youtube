import { useContext } from "react";
import { HeaderContext } from "../context/Header";

export function useSpecialHeader() {
  const { isMobileSearchOpen, setIsMobileSearchOpen } =
    useContext(HeaderContext);

  return { isMobileSearchOpen, setIsMobileSearchOpen };
}
