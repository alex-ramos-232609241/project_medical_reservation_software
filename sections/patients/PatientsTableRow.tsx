import AvatarPatient from '@/components/avatars/AvatarPatient';
import Iconify from '@/components/iconify';
import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeEventOpenMenu, TypePatientTableRow } from './types/types';

const TypographyItemTablePatient = styled(Typography)({
  fontSize: 13,
  color: 'grey',
  height: '100%'
  
})

export default function PatientsTableRow({
  id_numeric,
  full_name,
  phone_movil,
  code_value,
  email,
  city,
  identification_document,
  row,
}: TypePatientTableRow) {
  const [open, setOpen] = useState<Element | null>(null);
  const navigate = useNavigate();
  const handleOpenMenu = (event: TypeEventOpenMenu) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRedirect = (id: number) => {
    navigate(`/pacientes/${id}/item`)
  }

  return (
    <>
     
      <TableRow hover tabIndex={-1} role="checkbox" key={row.phone_movil} >
        <Stack onClick={() => {
          handleRedirect(row.id_patient)
        }} sx={{
          display: 'contents',
          cursor: 'pointer',
        }}>
          <TableCell ><TypographyItemTablePatient>{id_numeric}</TypographyItemTablePatient></TableCell>
          <TableCell component="th" scope="row"  >
            <Stack direction="row" alignItems="center" spacing={2} >
              <AvatarPatient />
              <Stack direction="column">
                <Typography sx={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'black'
                }} noWrap>
                  {full_name}
                </Typography>
                <Typography sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: 'grey'
                }} noWrap>
                  {email}
                </Typography>
              </Stack>
            </Stack>
          </TableCell>

          <TableCell><TypographyItemTablePatient>+{ code_value } {phone_movil}</TypographyItemTablePatient></TableCell>
          <TableCell><TypographyItemTablePatient>{email}</TypographyItemTablePatient></TableCell>
          <TableCell align="center"><TypographyItemTablePatient>{city}</TypographyItemTablePatient></TableCell>
          <TableCell ><TypographyItemTablePatient>{identification_document}</TypographyItemTablePatient></TableCell>
        </Stack>
      
        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow> 
      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
      
    </>
  );
}

