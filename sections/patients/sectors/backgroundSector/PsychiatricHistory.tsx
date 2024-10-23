import AddButton from '@/components/buttons/AddButon';
import { ItemNameAndCheckbox } from '@/components/customs/ItemNameAndCheckbox';
import { InputTextButton } from '@/components/inputs/inputTextButton';
import { Stack } from '@mui/material';
import { useState } from 'react';

export const PsychiatricHistory = () => {
  const [dates, setDates] = useState({
    psychiatric_history: "",
    areas_affected_disease: "",
    past_and_current_treatments: "",
    patient_family_group: "",
    aspects_of_social_life: "",
    aspects_of_working_life: "",
    relationship_with_authority: "",
    impulse_control: "",
    frustration_in_your_life: "",
    disease_coincidence: "",
    datesPsychiatric: "",
    support_from_family_social: ""
  })
  const handleRadioGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDates({
      ...dates,
      [event.target.name]: event.target.value
    })
  }
  const onChangeAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDates({
      ...dates,
      [event.target.name]: event.target.value
    })
  }
  const handleSavePsychiatricHistory = () => {

  }

  return <Stack sx={{paddingLeft: 2}}>
              <InputTextButton title='Antecedentes Psiquiatricos' name="psychiatric_history" onChangeAction={onChangeAction} value={dates.psychiatric_history}/>
            <ItemNameAndCheckbox title='Coincidencia de Enfermedad' name="disease_coincidence" handleRadioGroup={handleRadioGroup} value={dates.disease_coincidence}/>
          <InputTextButton title='Areas afectadas por la enfermedad' name="areas_affected_disease" onChangeAction={onChangeAction} value={dates.areas_affected_disease}/>
          <InputTextButton title='Tratamientos pasados y actuales' name="past_and_current_treatments" onChangeAction={onChangeAction} value={dates.past_and_current_treatments}/>
          <ItemNameAndCheckbox title='Apoyo del grupo familiar o social' name="support_from_family_social"  handleRadioGroup={handleRadioGroup} value={dates.support_from_family_social}/>
          <InputTextButton title='Grupo familiar del paciente' name="patient_family_group" onChangeAction={onChangeAction} value={dates.patient_family_group}/>
          <InputTextButton title='Aspectos de la vida social' name="aspects_of_social_life" onChangeAction={onChangeAction} value={dates.aspects_of_social_life}/>
          <InputTextButton title='Aspectos de la vida laboral' name="aspects_of_working_life" onChangeAction={onChangeAction} value={dates.aspects_of_working_life}/>
          <InputTextButton title='Relacion con la autoridad' name="relationship_with_authority" onChangeAction={onChangeAction} value={dates.relationship_with_authority}/>
          <InputTextButton title='Control de impulsos' name="impulse_control" onChangeAction={onChangeAction} value={dates.impulse_control}/>
          <InputTextButton title='Mapeo de frustración en su vida' name="frustration_in_your_life" onChangeAction={onChangeAction} value={dates.frustration_in_your_life}/>
          <AddButton text='Guardar' onClickAction={handleSavePsychiatricHistory}/>

  </Stack>
};
