import { IniciarConsultaButton } from '@/components/buttons/IniciarConsultaButton';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { ScheduleConsultation } from './ScheduleConsultation';
import { ScheduledConsultations } from './ScheduledConsultations';
import StartConsultation from './StartConsultation';

export default function ConsultationsSector() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
      <IniciarConsultaButton text='Iniciar Consulta' onClickAction={handleClickOpen} />
      <StartConsultation open={open} handleClose={handleClose} />
      <ScheduleConsultation />
      <ScheduledConsultations />
    </Stack>
  );
}
