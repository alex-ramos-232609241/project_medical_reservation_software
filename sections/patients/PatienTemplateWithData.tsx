import BasicSelectSex from '@/components/inputs/BasicSelectSex';
import { InputDateForEdit } from '@/components/inputs/inputDateForEdit';
import { InputEmailForEdit } from '@/components/inputs/inputEmailForEdit';
import { InputTextForEdit } from '@/components/inputs/inputTextForEdit';
import { InputTextForEditWithCountry } from '@/components/inputs/inputTextForEditWithCountry';
import { useAppDispatch } from '@/hooks/hooks';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { getPatientId,  updatePatient } from '@/slices/patientsSlice';
import { Box } from '@mui/material';
import { Button, CardActionArea, Grid, SelectChangeEvent, Stack, styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';
import { TypeObjPatient } from './types/types';


type TemplatePatientProps = {}
interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}
const TypographyTitleForEditPatience = styled(Typography)(() => ({
  color: 'rgb(33, 43, 54)',
  fontSize: '14px',
  fontWeight: 600,
  paddingLeft: '24px',
  paddingTop: '15px',
  backgroundColor: 'transparent'
}))
export const PatientTemplateWithData = ({ }: TemplatePatientProps) => {
  const datesClean = {
    first_name: '',
    last_name: '',
    full_name: '',
    birth_date: '',
    sex_patient: '',
    email: '',
    phone_movil: '',
    phone_label: '',
    phone_code: '',
    code_value: '',
    url_photo: '', 
    identification_document: '',
    landline: '',
    medical_record_number: '',
    direction: '',
    country: '',
    city: '',
    postal_code: '',
    outdoor_number: '',
    interior_number: ''
  }
  const navigate = useNavigate();
  const [dates, setDates] = useState<TypeObjPatient>(datesClean)
  
  const handleInputChangeAction = (event: React.ChangeEvent<HTMLInputElement>) => {
  
    setDates({
      ...dates,
      [event.target.name]: event.target.value
    })
  }
  const handleChangeSelectSex = (event: SelectChangeEvent) => {
    setDates({
      ...dates,
      [event.target.name]: event.target.value
    })
  }
  const onChangeGetPhoneMovil = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDates({
      ...dates,
      
      [event.target.name]: event.target.value
    })
  }

  let { id_patient } = useParams();
  let id_patient_number = Number(id_patient);
  const dispatch = useAppDispatch();
  const axiosInstance = useAxiosPrivate();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getPatientApiId = async () => {
      const response = await dispatch(getPatientId({ axiosInstance, controller, id_patient: id_patient_number }))
      isMounted && setDates(response.payload.listOfPatients[0]);
      isMounted && setValueCodePhone({
        code: response.payload.listOfPatients[0].phone_code,
        label: response.payload.listOfPatients[0].phone_label,
        phone: response.payload.listOfPatients[0].code_value
      });
      
    }
    getPatientApiId();
    return () => {
      isMounted = false;
      
      controller.abort();
    }
  }, [])
  const [valueCodePhone, setValueCodePhone] = useState<CountryType>({
    code: '',
    label: '',
    phone: ''
  });
  useEffect(() => {
    const {label, code, phone} = valueCodePhone;
    setDates({
      ...dates,
      phone_label: label,
      phone_code: code,
      code_value: phone,
    })
  }, [valueCodePhone])
  useEffect(() => {
    const {first_name, last_name} = dates;
    setDates({
      ...dates,
      full_name: first_name+' '+last_name
    })
  }, [ dates.first_name, dates.last_name])

  useEffect(() => {
    setIsLoaded(true)
  },[])

  const handleUpdatePatient = async (id: number) => {
    console.log('handleUpdatePatient')
    
    let dataUpdatePatient = {
      axiosInstance,
      dataPatientUpdate: dates,
      id_patient: id_patient_number
    }
    await dispatch(updatePatient(dataUpdatePatient)).then(() => {
      setDates(datesClean)
      setValueCodePhone({
        code: '',
        label: '',
        phone: ''
      })
      navigate(`/pacientes/${id}/item`)
    })
  }
  const handleCancelEditPatient = (id: number) => {
    navigate(`/pacientes/${id}/item`)
  }
  return <section >
    <Grid container spacing={2} className={`patient-with-data ${isLoaded ? 'loaded': ''}`}>
      <Grid item={true} xs={12} md={3} sx={{ textAlign: "center" }}>
        <TypographyTitleForEditPatience>Paciente</TypographyTitleForEditPatience>
        <Card sx={{
          background: 'rgb(200, 250, 214)',
          height: 250,
          pointerEvents: "none"
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image="/assets/avatars/profile_15.avif"
            />
          </CardActionArea>
        </Card>
        <Button variant="outlined" sx={{ color: 'rgb(0, 167, 111)', mt: 2 }}>
          Cambiar avatar +
        </Button>
      </Grid>
      <Grid item={true} xs={12} md={6}>
        <Stack direction='row' >
          <InputTextForEdit
            nameTitle='Nombre(s)'
            name="first_name"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.first_name} />
          <InputTextForEdit
            nameTitle='Apellido(s)'
            name="last_name"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.last_name} />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputDateForEdit
            nameTitle='Fecha de nacimiento'
            name="birth_date"
            onChangeAction={handleInputChangeAction}
            defaultValue={dates.birth_date} />
          <BasicSelectSex
            text='Sexo'
            name="sex_patient"
            handleChangeSelectSex={handleChangeSelectSex}
            sex={dates.sex_patient}
            id_patient={id_patient_number}
            defaultValue={dates.sex_patient} />

        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputEmailForEdit
            nameTitle='Email'
            name="email"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.email} />
          <Box sx={{ width: '100%', ml: 3}}  >
          <InputTextForEditWithCountry
            text='Teléfono móvil'
            name="phone_movil"
            onChangeGetPhoneMovil={onChangeGetPhoneMovil}
            valueCodePhone={valueCodePhone}
            phoneAndCodeCountry={dates.phone_movil}
            phoneAndCode={dates.phone_code}
            CodeAndValueCountry={dates.code_value}
            setValueCodePhone={setValueCodePhone} />
            </Box>
        </Stack>
        
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputTextForEdit
            nameTitle='Documento identidad'
            name="identification_document"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.identification_document} />
          <InputTextForEdit
            nameTitle='Teléfono fijo'
            name="landline"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.landline} />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputTextForEdit
            nameTitle='Número de expediente médico'
            name="medical_record_number"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.medical_record_number} />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <TypographyTitleForEditPatience> Informacion Demografica </TypographyTitleForEditPatience>
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputTextForEdit
            nameTitle='Dirección'
            name="direction"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.direction} />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputTextForEdit
            nameTitle='País'
            name="country"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.country} />
          <InputTextForEdit
            nameTitle='Ciudad'
            name="city"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.city} />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputTextForEdit
            nameTitle='Código Postal'
            name="postal_code"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.postal_code} />
          <InputTextForEdit
            nameTitle='Numero Exterior'
            name="outdoor_number"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.outdoor_number} />
          <InputTextForEdit
            nameTitle='Numero Interior'
            name="interior_number"
            onChangeAction={handleInputChangeAction}
            id_patient={id_patient_number}
            defaultValue={dates.interior_number} />
        </Stack>
        <Grid container spacing={3} sx={{ mt: 1.5 }}>
          <Grid item={true} xs={4}></Grid>
          <Grid item={true} xs={4}><Button variant="outlined" onClick={() => {
            handleCancelEditPatient(id_patient_number)
          }
          }>
            Cancelar
          </Button></Grid>
          <Grid item={true} xs={4}><Button variant="contained" onClick={() => {handleUpdatePatient(id_patient_number)}}>
            Guardar Cambios
          </Button></Grid>
        </Grid>

      </Grid >
      <Grid item={true} xs={12} md={3}></Grid>
    </Grid>
  </section>
};
