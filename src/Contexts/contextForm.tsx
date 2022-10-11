import { createContext, ReactNode, useContext, useReducer } from 'react';

// type do state
type State = {
    currentStep: number;
    name: string;
    rg: string;
    cpf: string;
    city: string;
    address: string;
    sus: string;
    dataNasc: string;
    estCivil: string;
    state: string;
    vicios: string;
    enf: string
    preso: string;
    processo: string;
    artigo: string;
    pai: string;
    mae: string;
    fone: string;
}

// type do Action
type Action = {
    type: FormActions;
    payload: any;
}

// type da prop do provider
type FormProviderProps = {
    children: ReactNode;
}

// type do contexto
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

// Dados iniciais
const initialData: State = {
    currentStep: 0,
    name: '',
    rg: '',
    cpf: '',
    city: '',
    address: '',
    sus: '',
    dataNasc: '',
    estCivil: '',
    state: '',
    vicios: '',
    enf: '',
    preso: '',
    processo: '',
    artigo: '',
    pai: '',
    mae: '',
    fone: ''
}

// Contexto
const contextForm = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setRg,
    setCpf,
    setSus,
    setNasc,
    setEstCivil,
    setAddress,
    setCity,
    setState,
    setVicios,
    setEnf,
    setPreso,
    setProcesso,
    setArtigo,
    setPai,
    setMae,
    setFone
}

const formReducer = (state: State, action: Action) => {

    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName: 
            return {...state, name: action.payload}
        case FormActions.setRg:
            return {...state, rg: action.payload}
        case FormActions.setCpf:
            return {...state, cpf: action.payload}
        case FormActions.setNasc: 
            return {...state, dataNasc: action.payload}
        case FormActions.setAddress:
            return {...state, address: action.payload}
        case FormActions.setCity:
            return {...state, city: action.payload}
        case FormActions.setEstCivil:
            return {...state, estCivil: action.payload}
        case FormActions.setEnf:
            return {...state, enferm: action.payload}
        case FormActions.setArtigo:
            return {...state, article: action.payload}
        case FormActions.setMae:
            return {...state, mother: action.payload}
        case FormActions.setPai:
            return {...state, father: action.payload}
        case FormActions.setPreso: 
            return {...state, preso: action.payload}
        case FormActions.setProcesso:
            return {...state, process: action.payload}
        case FormActions.setState:
            return {...state, states: action.payload}
        case FormActions.setSus:
            return {...state, sus: action.payload}
        case FormActions.setVicios:
            return {...state, vicios: action.payload}
        default:
            return state;
    }
}

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {

    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = { state, dispatch };


    return(
        <contextForm.Provider value={value}>
            { children }
        </contextForm.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext(contextForm);

    if(context === undefined) {
        throw new Error('O useForm precisa ser usado dentro do FormProvider');
    }

    return context;
}