import { IconButtonProps } from "@mui/material";

export interface TypeListOfPatients {
  id_patient: number;
  first_name: string; 
  last_name: string; 
  full_name: string; 
  birth_date: string; 
  sex_patient: string; 
  email: string;
  phone_movil: string; 
  phone_label: string; 
  phone_code: string; 
  code_value: string; 
  url_photo: string; 
  identification_document: string;
  landline: string;
  medical_record_number: string;
  direction: string;
  country: string;
  city: string;
  postal_code: string;
  outdoor_number: string;
  interior_number: string 
}
export type TypeObjPatient = Omit<TypeListOfPatients, "id_patient">
export type TypePatientTableInfo = {
  amountOfPatients: number;
  listOfPatients: TypeListOfPatients[];
};

export interface TypeExpectedValue {
    valueStatePage: 'default' | 'withId' | 'dontId';
    id_patient?: number;
  }

export interface TypePatientTableRow {
    id_numeric: number;
    key: string;
    full_name: string;
    phone_movil?: string;
    code_value?: string;
    email?: string;
    city?: string;
    identification_document?: string;
    row: TypeListOfPatients;
  }

export interface TypeEventOpenMenu {
    currentTarget: EventTarget & HTMLButtonElement,
  }

export type PatientItemProps = {
    id_patient?: number
  }

interface TypeHeadLabel {
    id: string ;
    align?: "center" | "inherit" | "left" | "right" | "justify" | undefined;
    width?: string;
    minWidth?: string; 
    label?: string; 
}

export interface TypePatientsHead {
  order: 'asc' | 'desc';
  orderBy: string;
  headLabel: TypeHeadLabel[];
  onRequestSort: (event: React.MouseEvent<HTMLSpanElement>, property: string) => void;
}

export interface TypePatientTableToolbar {
    filterName: string;
    onFilterName: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleNewPatient: () => void;
  }

export interface TypeTableEmptyRows {
    emptyRows: number;
    height: number;
  }

export interface TypeTableNoData {
  query: string
}

export interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  export interface TypeTextPatients {
    'textPatient1': string,
    'textPatient2': string,
    'textPatient3': string,
    'textPatient4': string,
    'textPatient5': string,
    'textPatient6': string,
    'textPatient7': string,
    'textPatient8': string,
    'textPatient9': string,
    'textPatient10': string,
    'textPatient11': string,
    'textPatient12': string,
    'textPatient13': string,
    'textPatient14': string,
    'textPatient15': string,
    'textPatient16': string,
    'textPatient17': string,
    'textPatient18': string,
    'textPatient19': string,
    'textPatient20': string,
    'textPatient21': string,
    'textPatient22': string,
    'textPatient23': string,
    'textPatient24': string,
    'textPatient25': string,
    'textPatient26': string,
    'textPatient27': string,
    'textPatient28': string,
    'textPatient29': string,
    'textPatient30': string,
    'textPatient31': string,
}
export interface TypeStatePagePatient {
  valueStatePage: 'default' | 'withId' | 'dontId';
  id_patient?: number;
}
