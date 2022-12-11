import React, { useContext, useState } from "react";
import { themes } from "./themes";

export const ThemeContext = React.createContext<any>(themes.light)

export const useTheme = () => {
  return useContext(ThemeContext)
}
