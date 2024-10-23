import TypographySubTitle from '@/components/customs/TypographySubTitleCustom';
import TypographyTitle from '@/components/customs/TypographyTitleCustom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { AllergiesOfHistory } from './AllergiesOfHistory';
import { PsychiatricHistory } from './PsychiatricHistory';
import { PathologicalHistory } from './PathologicalHistory';
import { NoPathologicalHistory } from './NoPathologicalHistory';
import { HereditaryFamilyHistory } from './HereditaryFamilyHistory';
import { NutritionalDiet } from './NutritionalDiet';


export default function SectorBackground() {
  return (
    <div>
      <TypographyTitle> ANTECEDENTES </TypographyTitle>
      <Accordion defaultExpanded sx={{ paddingLeft: 2, m: '0 !important', '&:before': {
                display: 'none',
            }}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <TypographySubTitle> ALERGIAS </TypographySubTitle>
        </AccordionSummary>
        <AccordionDetails>
              <AllergiesOfHistory />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ paddingLeft: 2, m: '0 !important', '&:before': {
                display: 'none',
            }}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header" >
          <TypographySubTitle > ANTECEDENTES PSIQUIÁTRICOS </TypographySubTitle>
        </AccordionSummary>
        <AccordionDetails>
          <PsychiatricHistory />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ paddingLeft: 2, m: '0 !important', '&:before': {
                display: 'none',
            }}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <TypographySubTitle> ANTECEDENTES PATOLÓGICOS </TypographySubTitle>
        </AccordionSummary>
        <AccordionDetails>
          <PathologicalHistory />
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ paddingLeft: 2, m: '0 !important', '&:before': {
                display: 'none',
            }}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
           <TypographySubTitle> ANTECEDENTES NO PATOLÓGICOS </TypographySubTitle>
        </AccordionSummary>
        <AccordionDetails>
          <NoPathologicalHistory />
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ paddingLeft: 2, m: '0 !important', '&:before': {
                display: 'none',
            }}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
           <TypographySubTitle>ANTECEDENTES HEREDOFAMILIARES</TypographySubTitle>
        </AccordionSummary>
        <AccordionDetails>
          <HereditaryFamilyHistory />
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ paddingLeft: 2, m: '0 !important', '&:before': {
                display: 'none',
            }}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
            <TypographySubTitle> DIETA NUTRIOLÓGICA</TypographySubTitle>
        </AccordionSummary>
        <AccordionDetails>
          <NutritionalDiet />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
