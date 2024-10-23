import Iconify from '@/components/iconify';
import SvgCleanColor from '@/components/svg-clean-color';
import { useAppDispatch } from '@/hooks/hooks';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { getPatientId } from '@/slices/patientsSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider, Grid, MenuItem, Popover, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExpandMoreProps } from '../../types/types';
import { calculateAge } from '../../utils';

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TypographyForUserTitle = styled(Typography)(() => ({
  color: 'rgb(0, 75, 80)',
  fontSize: '13px',
  fontWeight: 600,
  width: '40%',
  textAlign: 'right'
}))
const TypographyForUserValue = styled(Typography)(() => ({
  color: 'rgb(0, 75, 80)',
  fontSize: '13px',
  fontWeight: 500,
  width: '80%',
  textAlign: 'left',
}))
interface TypeInfoPatientSector {
  id_patient: number | undefined;
}

interface TypeObjPatientId {
  full_name: string,
  birth_date: string,
  sex_patient: string,
  identification_document: string,
  email: string,
  phone_movil: string,
  code_value: string,
  direction: string
}

export default function InfoPatientSector({ id_patient }: TypeInfoPatientSector) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = useState<Element | null>(null);
  const [patientId, setPatientId] = useState<TypeObjPatientId>({
    full_name: '',
    birth_date: '',
    sex_patient: '',
    identification_document: '',
    email: '',
    phone_movil: '',
    code_value: '',
    direction: ''
  });

  const dispatch = useAppDispatch();
  const axiosInstance = useAxiosPrivate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOpenMenu = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  let toValue = `/pacientes/${id_patient}/editar`

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getPatientIdApi = async () => {
      const response = await dispatch(getPatientId({ axiosInstance, controller, id_patient }))
      isMounted && setPatientId(response.payload.listOfPatients[0]);
    }
    getPatientIdApi();
    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])


  return (
    <Card sx={{
      borderRadius: 0.5,
      backgroundColor: 'rgb(229, 248, 242)'
    }}>
      <CardHeader
        avatar={
          <SvgCleanColor src='../../../assets/avatars/avatar_3.jpg' />
        }
        action={
          <IconButton aria-label="settings" onClick={handleOpenMenu}>
            <MoreVertIcon />
          </IconButton>
        }
        sx={{ color: 'rgb(0, 75, 80)' }}
        title={patientId.full_name}
        subheader={calculateAge(patientId.birth_date)}
      />

      <CardActions disableSpacing>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Divider />
      <Collapse in={expanded} timeout="auto" unmountOnExit>

        <CardContent sx={{
          alignItem: 'flex-end',
          color: 'rgb(0, 75, 80)'
        }}>
          <Grid container>
            <Grid item={true} xs={12}>
              <Stack direction="row">
                <TypographyForUserTitle paragraph>
                  Sexo:
                </TypographyForUserTitle>
                <TypographyForUserValue paragraph>
                  &nbsp; {patientId.sex_patient}
                </TypographyForUserValue>
              </Stack>
              <Stack direction="row">
                <TypographyForUserTitle paragraph>
                  Identificacion:
                </TypographyForUserTitle>
                <TypographyForUserValue paragraph>
                  &nbsp; {patientId.identification_document}
                </TypographyForUserValue>
              </Stack>
              <Stack direction="row">
                <TypographyForUserTitle paragraph>
                  Correo:
                </TypographyForUserTitle>
                <TypographyForUserValue paragraph>
                  &nbsp; {patientId.email}
                </TypographyForUserValue>
              </Stack>
              <Stack direction="row">
                <TypographyForUserTitle paragraph>
                  Teléfono:
                </TypographyForUserTitle>
                <TypographyForUserValue paragraph>
                  &nbsp; +{patientId.code_value} {patientId.phone_movil}
                </TypographyForUserValue>
              </Stack>
              <Stack direction="row">
                <TypographyForUserTitle paragraph>
                  Dirección:
                </TypographyForUserTitle>
                <TypographyForUserValue paragraph>
                  &nbsp; {patientId.direction}
                </TypographyForUserValue>
              </Stack>
              <Stack direction="row"></Stack>
            </Grid>
            <Grid item={true} xs={9}>

            </Grid>
          </Grid>

        </CardContent>
      </Collapse>
      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Link to={toValue} style={{
            textDecoration: 'none',
            width: '100%'
          }}>
            <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
            Editar Paciente
          </Link>
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Eliminar Paciente
        </MenuItem>
      </Popover>
    </Card>
  );
}
