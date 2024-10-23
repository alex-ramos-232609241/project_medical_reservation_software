import TypographyTitle from '@/components/customs/TypographyTitleCustom';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

export default function VacunasSector() {
  return (
    <Stack sx={{mt: 1.5}}>
        <TypographyTitle>VACUNAS</TypographyTitle>
        <Paper
        component="form"
        sx={{  
            display: 'flex', 
            alignItems: 'center', 
            
            p: 2 
        }}>
        <InputBase
            sx={{ 
                ml: 1, 
                flex: 1 
            }}
            placeholder="Buscar vacunas"
            inputProps={{ 'aria-label': 'Buscar vacunas' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
    </Stack>
  );
}
