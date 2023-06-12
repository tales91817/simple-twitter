import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState('');

  return (
    <SidebarContext.Provider value={{ selectedButton, setSelectedButton }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);