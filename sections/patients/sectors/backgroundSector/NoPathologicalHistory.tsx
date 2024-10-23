import { ItemNameAndCheckbox } from '@/components/customs/ItemNameAndCheckbox';
import { ItemNameAndCheckboxControl } from '@/components/customs/ItemNameAndCheckboxControl';
import { useState } from 'react';

export const NoPathologicalHistory = () => {
    const [dates, setDates] = useState({
        disease_coincidence: "",
        physical_activity: "",
        smoking: "",
        alcoholism: "",
        substance_use_drugs: "",
        recent_vaccine_or_immunization: "",
        others: ""
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
            physical_activity: event.target.value,
            smoking: event.target.value,
            alcoholism: event.target.value,
            substance_use_drugs: event.target.value,
            recent_vaccine_or_immunization: event.target.value,
            others: event.target.value
        })
    }
    return <>
        <ItemNameAndCheckboxControl handleRadioGroup={handleRadioGroupControl}/>
        <ItemNameAndCheckbox title='Coincidencia de Enfermedad' name="disease_coincidence" handleRadioGroup={handleRadioGroup}value={dates.disease_coincidence}/>
        <ItemNameAndCheckbox title='Actividad Física' name="physical_activity" handleRadioGroup={handleRadioGroup} value={dates.physical_activity}/>
        <ItemNameAndCheckbox title='Tabaquismo' name="smoking" handleRadioGroup={handleRadioGroup}value={dates.smoking} />
        <ItemNameAndCheckbox title='Alcoholismo' name="alcoholism" handleRadioGroup={handleRadioGroup}value={dates.alcoholism} />
        <ItemNameAndCheckbox title='Uso de otras sustancias (Drogas)' name="substance_use_drugs" handleRadioGroup={handleRadioGroup} value={dates.substance_use_drugs}/>
        <ItemNameAndCheckbox title='Vacuna o Inmunización reciente' name="recent_vaccine_or_immunization" handleRadioGroup={handleRadioGroup} value={dates.recent_vaccine_or_immunization}/>
        <ItemNameAndCheckbox title='Otros' name="others" handleRadioGroup={handleRadioGroup} value={dates.others}/>
    </>
};
