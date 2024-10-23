import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputText } from '@/components/inputs/inputText';

interface TypesStartConsultation {
  open: boolean,
  handleClose: () => void
}

export default function StartConsultation({open, handleClose}: TypesStartConsultation) {
  const handleReasonForAppointment = () => {
    
  }
  return (
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Inicia Nueva Consulta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <InputText name='' value='' title='Motivo de su cita' onChangeAction={handleReasonForAppointment}/>
          </DialogContentText>
          <DialogContentText>
            <InputText name='' value='' title='Seleccionar para que especialidad' onChangeAction={handleReasonForAppointment}/>
          </DialogContentText>
          <DialogContentText>
            <InputText name='' value='' title='Seleccionar el doctor' onChangeAction={handleReasonForAppointment}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Iniciar</Button>
        </DialogActions>
      </Dialog>
  );
}
