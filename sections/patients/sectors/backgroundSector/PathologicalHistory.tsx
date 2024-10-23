import { useState } from 'react';
import { ItemNameAndCheckbox } from '@/components/customs/ItemNameAndCheckbox';
import { ItemNameAndCheckboxControl } from '@/components/customs/ItemNameAndCheckboxControl';


export const PathologicalHistory = () => {
  const [dates, setDates] = useState({
    disease_coincidence: "",
    prior_hospitalization: "",
    previous_surgeries: "",
    diabetes: "",
    thyroid_diseases: "",
    arterial_hypertension: "",
    heart_disease: "",
    trauma: "",
    cancer: "",
    tuberculosis: "",
    transfusions: "",
    respiratory_pathologies: "",
    gastrointestinal_pathologies: "",
    sexually_transmitted_diseases: "",
    chronic_kidney_disease: "",
    others: "",

})
  const handleRadioGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDates({
      ...dates,
      [event.target.name]: event.target.value
    })
  }
  const handleRadioGroupControl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDates({
      disease_coincidence: event.target.value,
      prior_hospitalization: event.target.value,
      previous_surgeries: event.target.value,
      diabetes: event.target.value,
      thyroid_diseases: event.target.value,
      arterial_hypertension: event.target.value,
      heart_disease: event.target.value,
      trauma: event.target.value,
      cancer: event.target.value,
      tuberculosis: event.target.value,
      transfusions: event.target.value,
      respiratory_pathologies: event.target.value,
      gastrointestinal_pathologies: event.target.value,
      sexually_transmitted_diseases: event.target.value,
      chronic_kidney_disease: event.target.value,
      others: event.target.value
    })
}
  return <>
    <ItemNameAndCheckboxControl handleRadioGroup={handleRadioGroupControl}/>
    <ItemNameAndCheckbox title='Coincidencia de Enfermedad' name="disease_coincidence"  handleRadioGroup={handleRadioGroup} value={dates.disease_coincidence}/>
    <ItemNameAndCheckbox title='Hospitalización Previa' name="prior_hospitalization" handleRadioGroup={handleRadioGroup} value={dates.prior_hospitalization}/>
    <ItemNameAndCheckbox title='Cirugías Previas' name="previous_surgeries" handleRadioGroup={handleRadioGroup} value={dates.previous_surgeries}/>
    <ItemNameAndCheckbox title='Diabetes' name="diabetes" handleRadioGroup={handleRadioGroup} value={dates.diabetes}/>
    <ItemNameAndCheckbox title='Enfermedades Tiroideas' name="thyroid_diseases" handleRadioGroup={handleRadioGroup} value={dates.thyroid_diseases}/>
    <ItemNameAndCheckbox title='Hipertensión Arterial' name="arterial_hypertension" handleRadioGroup={handleRadioGroup} value={dates.arterial_hypertension}/>
    <ItemNameAndCheckbox title='Cardiopatias' name="heart_disease" handleRadioGroup={handleRadioGroup} value={dates.heart_disease}/>
    <ItemNameAndCheckbox title='Traumatismos' name="trauma" handleRadioGroup={handleRadioGroup} value={dates.trauma}/>
    <ItemNameAndCheckbox title='Cáncer' name="cancer" handleRadioGroup={handleRadioGroup} value={dates.cancer}/>
    <ItemNameAndCheckbox title='Tuberculosis' name="tuberculosis" handleRadioGroup={handleRadioGroup} value={dates.tuberculosis}/>
    <ItemNameAndCheckbox title='Transfusiones' name="transfusions" handleRadioGroup={handleRadioGroup} value={dates.transfusions}/>
    <ItemNameAndCheckbox title='Patologías Respiratorias' name="respiratory_pathologies" handleRadioGroup={handleRadioGroup} value={dates.respiratory_pathologies}/>
    <ItemNameAndCheckbox title='Patologías Gastrointestinales' name="gastrointestinal_pathologies" handleRadioGroup={handleRadioGroup} value={dates.gastrointestinal_pathologies}/>
    <ItemNameAndCheckbox title='Enfermedades de Transmisión Sexual' name="sexually_transmitted_diseases" handleRadioGroup={handleRadioGroup} value={dates.sexually_transmitted_diseases}/>
    <ItemNameAndCheckbox title='Enfermedad Renal Crónica' name="chronic_kidney_disease" handleRadioGroup={handleRadioGroup} value={dates.chronic_kidney_disease}/>
    <ItemNameAndCheckbox title='Otros' name="others" handleRadioGroup={handleRadioGroup} value={dates.others}/>
    </>
};
