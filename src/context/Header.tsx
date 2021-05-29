import { createContext, useContext, useEffect, useState } from "react";

export interface HeaderContextData {
  isMobileSearchOpen: boolean;
  setIsMobileSearchOpen: any;
}

export const HeaderContext = createContext<HeaderContextData>({} as HeaderContextData);

export const HeaderProvider: React.FC = ({ children }) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <HeaderContext.Provider
      value={{ isMobileSearchOpen, setIsMobileSearchOpen }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

