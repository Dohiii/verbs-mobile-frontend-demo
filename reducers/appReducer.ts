import { AppStateInterface, AppActionInterface, initialVerb } from "../interfaces"

export const initialState: AppStateInterface = {
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
}

export function appReducer(state: AppStateInterface, action: AppActionInterface): AppStateInterface {
  switch (action.type) {
    case "STOP_LOADING":
      return { ...state, isLoading: false }
    case "SET_VERB_IN_STATE":
      return { ...state, verb: action.payload }
    case "COUNT_ADD":
      return { ...state, count: state.count + 1 }
    case "COUNT_ZERO":
      return { ...state, count: 0 }
    case "FULL_VERB_COUNT_ADD":
      return { ...state, fullVerbCount: state.fullVerbCount + 1 }
    case "FULL_VERB_COUNT_ZERO":
      return { ...state, fullVerbCount: 0 }
    case "INNY_CZASOWNIK":
      return { ...state, count: 0, inny_czasownik_clicked: state.inny_czasownik_clicked + 1 }
    case "SUBMIT_CZASOWNIK_FORME":
      return state
    case "WRONG_ATTEMPT":
      return { ...state, inputColor: state.errorColor }
    case "CORRECT_ATTEMPT":
      return { ...state, inputColor: state.successColor }
    case "BACK_TO_NORMAL_INPUT_COLOR":
      return { ...state, inputColor: state.originalInputColor }
    case "FLASH_MESSAGE":
      return { ...state, flashMessages: [...state.flashMessages, action.payload] }
    default:
      return state
  }
}
