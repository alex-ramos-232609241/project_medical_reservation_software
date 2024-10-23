import Iconify from '@/components/iconify';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Toolbar from '@mui/material/Toolbar';
import { TypePatientTableToolbar } from './types/types';

export default function PatientsTableToolbar({ filterName, onFilterName, handleNewPatient }: TypePatientTableToolbar) {
  return (
    <Toolbar
      sx={{
        height: 96,
        display: 'flex',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(0, 1, 0, 3),
      }}
    >
        <OutlinedInput
          value={filterName}
          onChange={onFilterName}
          placeholder="Buscar paciente..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
        <Button 
            variant="contained" 
            color="inherit" 
            startIcon={<Iconify icon="eva:plus-fill" />} 
            sx={{
              backgroundColor: 'violet',
              '&:hover': {
                backgroundColor: '#bc4ed8'
              }
            }}
            onClick={handleNewPatient}>
          Nuevo paciente
        </Button>
    </Toolbar>
  );
}
