import { Divider, Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActiveMedicinesSector from './sectors/ActiveMedicinesSector/ActiveMedicinesSector';
import SectorBackground from './sectors/backgroundSector/SectorBackground';
import ConsultationSector from './sectors/consultationsSector/ConsultationSector';
import InfoPatientSector from './sectors/patientSector/InfoPatientSector';
import VaccineSector from './sectors/vaccineSector/VaccineSector';
import SectorVitalSignsInformation from './sectors/vitalSingsSector/SectorVitalSignsInformation';

export const PatientItem = () => {
  let {id_patient} = useParams<{ id_patient: string }>();
  const id = Number(id_patient);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted  = true;
    const controller = new AbortController();
    setIsLoaded(true)
    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])

  return (
      <div className={`patient-item-details ${isLoaded ? 'loaded': ''}`}>
      <Stack direction='column'>
         <Stack direction='row'>
           <Grid container spacing={2}>
              <Grid item={true} xs={12} md={3.5} >
                <InfoPatientSector id_patient={id}/>
                <SectorVitalSignsInformation id_patient={id}/>
              </Grid>
              <Grid item={true} xs={12} md={5}>
                <SectorBackground />
                <VaccineSector />
                <ActiveMedicinesSector/>
              <Divider sx={{mt: 3}}/>
              </Grid>
              <Grid item={true} xs={12} md={3.5}>
                <ConsultationSector />
              </Grid>
           </Grid>
         </Stack>
      </Stack>
    </div >
    
  );
};
