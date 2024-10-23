import { ItemNameAndCheckbox } from '@/components/customs/ItemNameAndCheckbox';
import { ItemNameAndCheckboxControl } from '@/components/customs/ItemNameAndCheckboxControl';
import { ItemNameAndFiveCheckbox } from '@/components/customs/ItemNameAndFiveCheckbox';
import { ItemNameAndThreeCheckbox } from '@/components/customs/ItemNameAndThreeCheckbox';
import { InputTextButton } from '@/components/inputs/inputTextButton';
import { useState } from 'react';

export const NutritionalDiet = () => {
    const [dates, setDates] = useState({
        breakfast: "",
        snack_in_morning: "",
        meal: "",
        afternoon_snack: "",
        dinner: "",
        food_prepared_at_home: "",
        food_discomfort: "",
        medications_supplements: "",
        other_diets_carried_out: "",
        current_weight_related_condition: "",
        personal_history_related_to_weight: "",
        liquid_consumption: "",
        nutrition_education: "",
        appetite_level: "",
        glasses_of_water_a_day: "",
        food_preferences: "",
        ideal_weight: "",
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
            ...dates,
            breakfast: event.target.value,
            snack_in_morning: event.target.value,
            meal: event.target.value,
            afternoon_snack: event.target.value,
            dinner: event.target.value,
            food_prepared_at_home: event.target.value,
            food_discomfort: event.target.value,
            medications_supplements: event.target.value,
            other_diets_carried_out: event.target.value,
            current_weight_related_condition: event.target.value,
            personal_history_related_to_weight: event.target.value,
            liquid_consumption: event.target.value,
            nutrition_education: event.target.value,
            appetite_level: event.target.value,
            glasses_of_water_a_day: event.target.value,
            others: event.target.value
        })
    }
    const onChangeAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDates({
            ...dates,
            [event.target.name]: event.target.value
          })
    }
    console.log("dates nutritional")
    console.log(dates)
    console.log("****dates")
    return <>
        <ItemNameAndCheckboxControl handleRadioGroup={handleRadioGroupControl}/>
        <ItemNameAndCheckbox title='Desayuno' name="breakfast" handleRadioGroup={handleRadioGroup} value={dates.breakfast} />
        <ItemNameAndCheckbox title='Colación en la mañana' name="snack_in_morning" handleRadioGroup={handleRadioGroup} value={dates.snack_in_morning} />
        <ItemNameAndCheckbox title='Comida' name="meal" handleRadioGroup={handleRadioGroup} value={dates.meal} />
        <ItemNameAndCheckbox title='Colación en la tarde' name="afternoon_snack" handleRadioGroup={handleRadioGroup} value={dates.afternoon_snack} />
        <ItemNameAndCheckbox title='Cena' name="dinner" handleRadioGroup={handleRadioGroup} value={dates.dinner} />
        <ItemNameAndCheckbox title='Alimentos preparados en casa?' name="food_prepared_at_home" handleRadioGroup={handleRadioGroup} value={dates.food_prepared_at_home} />
        <ItemNameAndFiveCheckbox title='Nivel de apetito' name="appetite_level" handleRadioGroup={handleRadioGroup} value={dates.appetite_level}/>
        <ItemNameAndThreeCheckbox title='Vasos de agua al dia' name="glasses_of_water_a_day"  handleRadioGroup={handleRadioGroup} value={dates.glasses_of_water_a_day}/>
        <InputTextButton title='Preferencias de alimentos' name="food_preferences" onChangeAction={onChangeAction} value={dates.food_preferences}/>

        <ItemNameAndCheckbox title='Malestares por alimentos' name="food_discomfort" handleRadioGroup={handleRadioGroup}  value={dates.food_discomfort} />
        <ItemNameAndCheckbox title='Medicamentos, complementos o suplementos' name="medications_supplements" handleRadioGroup={handleRadioGroup}  value={dates.medications_supplements} />
        <ItemNameAndCheckbox title='Otras dietas realizadas' name="other_diets_carried_out" handleRadioGroup={handleRadioGroup}  value={dates.other_diets_carried_out} />
        <InputTextButton title='Peso ideal' name="ideal_weight" onChangeAction={onChangeAction} value={dates.ideal_weight}/>
        <ItemNameAndCheckbox title='Padecimiento Actual relacionado al peso' name="current_weight_related_condition" handleRadioGroup={handleRadioGroup}  value={dates.current_weight_related_condition} />
        <ItemNameAndCheckbox title='Antecedentes personales relacionados al peso' name="personal_history_related_to_weight" handleRadioGroup={handleRadioGroup}  value={dates.personal_history_related_to_weight} />
        <ItemNameAndCheckbox title='Consumo de líquidos' name="liquid_consumption" handleRadioGroup={handleRadioGroup}  value={dates.liquid_consumption} />
        <ItemNameAndCheckbox title='Educación nutriológica' name="nutrition_education" handleRadioGroup={handleRadioGroup}  value={dates.nutrition_education} />
        <ItemNameAndCheckbox title='Otros' name="others" handleRadioGroup={handleRadioGroup}  value={dates.others} />
    </>
};
