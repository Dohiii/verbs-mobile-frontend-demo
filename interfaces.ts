export interface Verb {
  IO: string
  LEI: string
  LORO: string
  LUI: string
  NOI: string
  TU: string
  VOI: string
  category: string
  correctWord: string
  czasownik: string
  group: string
  pluc: string
  tense: string
  tlumaczenie: string
}

export interface AppStateInterface {
  topFormSelected: boolean
  isLoading: boolean
  verb: Verb
  count: number
  fullVerbCount: number
  inny_czasownik_clicked: number
  inputColor: string
  originalInputColor: string
  successColor: string
  errorColor: string
  flashMessages: string[]
  inputValue: string
  icon: string
}

export type AppActionInterface = { type: "ENABLE_FORME_CZASOWNIKA" } | { type: "ENABLE_ODMIEN_CZASOWNIK" } | { type: "STOP_LOADING" } | { type: "SET_VERB_IN_STATE"; payload: Verb } | { type: "COUNT_ADD" } | { type: "COUNT_ZERO" } | { type: "FULL_VERB_COUNT_ADD" } | { type: "FULL_VERB_COUNT_ZERO" } | { type: "INNY_CZASOWNIK" } | { type: "SUBMIT_CZASOWNIK_FORME" } | { type: "WRONG_ATTEMPT" } | { type: "CORRECT_ATTEMPT" } | { type: "BACK_TO_NORMAL_INPUT_COLOR" } | { type: "FLASH_MESSAGE"; payload: string }

// Defaults

export const initialVerb: Verb = {
  IO: "",
  LEI: "",
  LORO: "",
  LUI: "",
  NOI: "",
  TU: "",
  VOI: "",
  category: "",
  correctWord: "",
  czasownik: "",
  group: "",
  pluc: "",
  tense: "",
  tlumaczenie: "",
}
