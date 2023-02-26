export interface FormStateInterface {
  zwrotne: boolean
  osoba: string[]
  categoria: string
  tense: string[]
}

export type FormActionInterface = { type: "CHANGE_CATEGORY"; payload: string } | { type: "CHANGE_ZWROTNE"; payload: boolean } | { type: "CHANGE_OSOBY"; payload: string[] } | { type: "CHANGE_TENSE"; payload: string[] }

export const initialState: FormStateInterface = {
  zwrotne: true,
  osoba: ["IO"],
  categoria: "regularny",
  tense: ["Presente Indicativo", "Passato Congiuntivo"],
}

export function formReducer(state: FormStateInterface, action: FormActionInterface): FormStateInterface {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return { ...state, categoria: action.payload }
    case "CHANGE_ZWROTNE":
      return { ...state, zwrotne: action.payload }
    case "CHANGE_OSOBY":
      return { ...state, osoba: action.payload }
    case "CHANGE_TENSE":
      return { ...state, tense: action.payload }
    default:
      return state
  }
}
