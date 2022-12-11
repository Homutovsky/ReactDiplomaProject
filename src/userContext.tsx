import { createContext, useContext } from "react"

export const UserContext = createContext<any>({
  userName: '',
  setUserName: () => {},
});


