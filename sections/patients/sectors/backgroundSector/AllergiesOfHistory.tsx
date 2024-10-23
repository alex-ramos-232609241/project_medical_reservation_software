import InputSearchAndOther from '@/components/generics/InputSearchAndOther';
import { Accordion, AccordionDetails } from '@mui/material';
import { useState } from 'react';

type AllergiesOfHistoryProps = {}

export const AllergiesOfHistory = ({}: AllergiesOfHistoryProps) => {
    const [dates, setDates] = useState({
      allergies_search: "",
      allergies_others: ""
    })
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
           setDates({
            ...dates,
            [event.target.name]: event.target.value
          })
    }
  
  const handleSearchAndOther = () => {
    console.log('handleSearchAnd')
  }
 
  return <>
  <Accordion defaultExpanded sx={{m: '0px !important', mt: 0,mb: 0}}>
      <AccordionDetails>
            <InputSearchAndOther 
              subTitleHead='Buscar Alergias'
              subTitleHeadOthers='Otras Alergias'
              nameSearch="allergies_search"
              nameOthers="allergies_others"
              handleSearchAndOther={handleSearchAndOther}
              handleOnChangeSearch={handleOnChange} 
              handleOnChangeOthers={handleOnChange}
            />
      </AccordionDetails>
    </Accordion>
</> 
};
