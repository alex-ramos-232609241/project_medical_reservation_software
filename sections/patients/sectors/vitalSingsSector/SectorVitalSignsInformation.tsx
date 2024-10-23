import SvgCleanColor from '@/components/svg-clean-color';
import { useAppDispatch } from '@/hooks/hooks';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { getVitalSignsId } from '@/slices/vitalSignsSlice';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Settings from '@mui/icons-material/Settings';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


interface TypePatientVitalSings {
  id_patient?: number | undefined;
}
const CustomTextField = styled(TextField)({
  width: '40%',
  '& label.Mui-focused': {
    color: 'red',
  },
  '&.MuiInput-underline:after': {
    borderBottomColor: 'grey',
  },
  '&.MuiOutlinedInput-input': {
    color: 'grey',
    background:'transparent',
    padding: '0px !important',
  },
  '& .MuiOutlinedInput-root': {
      padding: '0px 1px 0px 5px',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: 'transparent !important',
    },
  },
});

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});
interface TypeInitialVitalSigns {
  id_vital_signs: number;
  height: string;
  weight: string;
  body_mass: string;
  temperature: string;
  breathing_frequency: string;
  systolic: string;
  diastolic: string;
  heart_rate: string;
  body_fat_percentage: string;
  muscle_mass: string;
  head_circumference: string;
  oxygen_saturation: string;
  percentage_of_water: string;
  percentage_of_visceral_fat:string;
  bones: string;
  metabolism: string;
  protein: string;
  protein_percentage: string;
  body_age: string;
  abdominal_perimeter: string;
}
export default function SectorVitalSignsInformation({id_patient}: TypePatientVitalSings) {
  
 
  const [dates, setDates] = useState<TypeInitialVitalSigns>({
    id_vital_signs: 0,
    height: '',
    weight: '',
    body_mass: '',
    temperature: '',
    breathing_frequency: '',
    systolic: '',
    diastolic: '',
    heart_rate: '',
    body_fat_percentage: '',
    muscle_mass: '',
    head_circumference: '',
    oxygen_saturation: '',
    percentage_of_water: '',
    percentage_of_visceral_fat: '',
    bones: '',
    metabolism: '',
    protein: '',
    protein_percentage: '',
    body_age: '',
    abdominal_perimeter: '',
  })

  const data = [
    { icon: <SvgCleanColor src="../../../assets/icons/ic_height.svg" />, label: 'Estatura' , value: dates.height , name: 'height'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_weight.svg" />, label: 'Peso', value:  dates.weight, name: 'weight'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_body_mass.svg" />, label: 'Masa Corporal', value:  dates.body_mass, name: 'body_mass'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_temperature.svg" />, label: 'Temperatura', value:  dates.temperature, name: 'temperature'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_breathing_frequency.svg" />, label: 'Frecuencia Respiratoria' , value: dates.breathing_frequency, name: 'breathing_frequency'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_diastolic.svg" />, label: 'Sistóla' , value: dates.systolic, name: 'systolic'}, 
    { icon: <SvgCleanColor src="../../../assets/icons/ic_diastolic.svg" />, label: 'Diastóla' , value: dates.diastolic, name: 'diastolic'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_heart_rate.svg" />, label: 'Frecuencia Cardiaca', value:  dates.heart_rate, name: 'heart_rate'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_body_fat.svg" />, label: 'Porcentaje de Grasa Corporal', value:  dates.body_fat_percentage, name: 'body_fat_percentage'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_muscle_mass.svg" />, label: 'Masa Muscular', value:  dates.muscle_mass, name: 'muscle_mass'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_head_circumference.svg" />, label: 'Perímetro Cefálico' , value: dates.head_circumference, name: 'head_circumference'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_oxygen_saturation.svg" />, label: 'Saturación de Oxígeno' , value: dates.oxygen_saturation, name: 'oxygen_saturation'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_percentage_water.svg" />, label: 'Porcentaje de Agua', value: dates.percentage_of_water, name: 'percentage_of_water'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_percentage_visceral_fat.svg" />, label: 'Porcentaje de Grasa Visceral' , value: dates.percentage_of_visceral_fat, name: 'percentage_of_visceral_fat'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_bones.svg" />, label: 'Huesos', value:  dates.bones, name: 'bones'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_metabolism.svg" />, label: 'Metabolismo' , value: dates.metabolism, name: 'metabolism'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_protein.svg" />, label: 'Porcentaje de Proteinas' , value: dates.protein_percentage, name: 'protein_percentage'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_body_age.svg" />, label: 'Edad del cuerpo', value:  dates.body_age, name: 'body_age'},
    { icon: <SvgCleanColor src="../../../assets/icons/ic_abdominal_perimeter.svg" />, label: 'Perímetro abdominal' , value: dates.abdominal_perimeter, name: 'abdominal_perimeter'},
  ];
  const dispatch = useAppDispatch();
  const axiosInstance = useAxiosPrivate();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getVitalSignsApiId = async () => {
      const response = await dispatch(getVitalSignsId({ axiosInstance, controller, id_patient: id_patient }))
      isMounted && setDates(response.payload.listVitalSignsInfo);
    }
    getVitalSignsApiId();
    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])
  const handleInputChangeAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDates({
      ...dates,
      [event.target.name]: event.target.value
    })
  }
  return (
    <Box >
        <Paper elevation={0} >
          <FireNav component="nav" disablePadding>
            <ListItem  disablePadding>
              <ListItemButton sx={{ height: '50' }}>
                <ListItemText
                  primary="SIGNOS VITALES"
                  primaryTypographyProps={{
                    color: 'rgb(33, 43, 54)',
                    fontWeight: '600',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
              <Tooltip title="Configuración">
                <IconButton
                  size="large"
                  sx={{
                    '& svg': {
                      color: 'rgb(33, 43, 54)',
                      transition: '0.2s',
                      transform: 'translateX(0) rotate(0)',
                    },
                  }}
                >
                  <Settings />
                  <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: '',
              }}
            >
              {
                data.map((item) => (
                  <ListItemButton
                    sx={{ p: 0.1, minHeight: 32, color: 'rgb(99, 115, 129)' }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 13, fontWeight: 'medium', color: 'rgb(99, 115, 129)' }}
                    />
                    <CustomTextField key={item.name} disabled={false} value={item.value} name={item.name} onChange={handleInputChangeAction} sx={{
                      fontSize: '11px',
                      textAlign: 'center'
                    }}>

                    </CustomTextField>
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
    </Box>
  );
}
