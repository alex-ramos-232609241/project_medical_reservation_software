import { useState } from 'react';
import { ItemNameAndCheckbox } from '@/components/customs/ItemNameAndCheckbox';
import { ItemNameAndCheckboxControl } from '@/components/customs/ItemNameAndCheckboxControl';

export const HereditaryFamilyHistory = () => {
    const [dates, setDates] = useState({
        diabetes: "",
        heart_disease: "",
        arterial_hypertension: "",
        thyroid_diseases: "",
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
                diabetes: event.target.value,
                heart_disease: event.target.value,
                arterial_hypertension: event.target.value,
                thyroid_diseases: event.target.value,
                chronic_kidney_disease: event.target.value,
                others: event.target.value,
            })
        }
   
    return <>
            <ItemNameAndCheckboxControl handleRadioGroup={handleRadioGroupControl}/>
            <ItemNameAndCheckbox title='Diabetes' name="diabetes" handleRadioGroup={handleRadioGroup} value={dates.diabetes}/>
            <ItemNameAndCheckbox title='Cardiopatías' name="heart_disease" handleRadioGroup={handleRadioGroup} value={dates.heart_disease}/>
            <ItemNameAndCheckbox title='Hipertensión Arterial' name="arterial_hypertension" handleRadioGroup={handleRadioGroup} value={dates.arterial_hypertension}/>
            <ItemNameAndCheckbox title='Enfermedades Tiroideas' name="thyroid_diseases" handleRadioGroup={handleRadioGroup} value={dates.thyroid_diseases}/>
            <ItemNameAndCheckbox title='Enfermedad Renal Crónica' name="chronic_kidney_disease" handleRadioGroup={handleRadioGroup} value={dates.chronic_kidney_disease}/>
            <ItemNameAndCheckbox title='Otros' name="others" handleRadioGroup={handleRadioGroup} value={dates.others}/>
    </>
};
