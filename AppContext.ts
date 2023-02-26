import { createContext, Dispatch } from "react"
import { AppActionInterface, AppStateInterface, initialVerb } from "./interfaces"

interface AppContextInterface {
  state: AppStateInterface
  dispatch: Dispatch<AppActionInterface>
}

const AppContext = createContext<AppContextInterface>({
  state: {
    topFormSelected: true,
    isLoading: true,
    count: 0,
    fullVerbCount: 0,
    inny_czasownik_clicked: 0,
    verb: initialVerb,
    errorColor: "#E97777",
    successColor: "#B6E2A1",
    inputColor: "#333",
    originalInputColor: "#333",
    inputValue: "",
    icon: "block",
    flashMessages: [],
  },
  dispatch: () => {},
})

export { AppContext, AppContextInterface }
