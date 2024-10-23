import BasicSelectSex from '@/components/inputs/BasicSelectSex';
import { InputDateForEdit } from '@/components/inputs/inputDateForEdit';
import { InputEmailForEdit } from '@/components/inputs/inputEmailForEdit';
import { InputTextForEdit } from '@/components/inputs/inputTextForEdit';
import { InputTextForEditWithCountry } from '@/components/inputs/inputTextForEditWithCountry';
import { useAppDispatch } from '@/hooks/hooks';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { savePatient } from '@/slices/patientsSlice';
import { Box } from '@mui/material';
import { Button, CardActionArea, Grid, SelectChangeEvent, Stack, styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from "react-router";

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
export const PatientTemplate = ({ }: TemplatePatientProps) => {
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
  const [valueCodePhone, setValueCodePhone] = useState<CountryType>({
    code: 'PE',
    label: 'Peru',
    phone: '51'
  });
  const navigate = useNavigate();
  const [dates, setDates] = useState(datesClean)
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
      [event.target.name]: `${event.target.value}`
    })
  }

  const dispatch = useAppDispatch();
  const axiosInstance = useAxiosPrivate();
  const handleSaveNewPatient = async () => {
    dates.phone_label = valueCodePhone?.label
    dates.phone_code = valueCodePhone?.code
    dates.code_value = valueCodePhone?.phone
    dates.full_name = dates.first_name + ' ' + dates.last_name
    let dataSavePatient = {
      axiosInstance,
      dataPatient: dates
    }
    await dispatch(savePatient(dataSavePatient)).then(() => {
      setDates(datesClean)
      navigate('/pacientes')
    })
  }
  const handleCancelEditPatient = () => {
    navigate('/pacientes')
  }
  return <section>
    <Grid container spacing={2}>
      <Grid item={true} xs={12} md={3} sx={{ textAlign: "center" }}>
        <TypographyTitleForEditPatience>Nuevo paciente</TypographyTitleForEditPatience>
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
          />
          <InputTextForEdit
            nameTitle='Apellido(s)'
            name="last_name"
            onChangeAction={handleInputChangeAction}
          />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputDateForEdit nameTitle='Fecha de nacimiento'
            name="birth_date"
            onChangeAction={handleInputChangeAction}
          />
          <BasicSelectSex
            text='Sexo'
            name="sex_patient"
            handleChangeSelectSex={handleChangeSelectSex}
            sex={dates.sex_patient}
          />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputEmailForEdit
            nameTitle='Email'
            name="email"
            onChangeAction={handleInputChangeAction}
          />
          <Box sx={{ width: '100%', ml: 3}}  >
          <InputTextForEditWithCountry
            text='Teléfono móvil'
            name="phone_movil"
            onChangeGetPhoneMovil={onChangeGetPhoneMovil}
            valueCodePhone={valueCodePhone}
            setValueCodePhone={setValueCodePhone}
          />
          </Box>
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputTextForEdit
            nameTitle='Documento identidad'
            name="identification_document"
            onChangeAction={handleInputChangeAction}
          />
          <InputTextForEdit
            nameTitle='Teléfono fijo'
            name="landline"
            onChangeAction={handleInputChangeAction}
          />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputTextForEdit
            nameTitle='Número de expediente médico'
            name="medical_record_number"
            onChangeAction={handleInputChangeAction}
          />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <TypographyTitleForEditPatience> Informacion Demografica </TypographyTitleForEditPatience>
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputTextForEdit
            nameTitle='Dirección'
            name="direction"
            onChangeAction={handleInputChangeAction}
          />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputTextForEdit
            nameTitle='País'
            name="country"
            onChangeAction={handleInputChangeAction}
          />
          <InputTextForEdit
            nameTitle='Ciudad'
            name="city"
            onChangeAction={handleInputChangeAction}
          />
        </Stack>
        <Stack direction='row' sx={{ mt: 3 }}>
          <InputTextForEdit
            nameTitle='Código Postal'
            name="postal_code"
            onChangeAction={handleInputChangeAction}
          />
          <InputTextForEdit
            nameTitle='Numero Exterior'
            name="outdoor_number"
            onChangeAction={handleInputChangeAction}
          />
          <InputTextForEdit
            nameTitle='Numero Interior'
            name="interior_number"
            onChangeAction={handleInputChangeAction}
          />
        </Stack>
        <Grid container spacing={3} sx={{ mt: 1.5 }}>
          <Grid item={true} xs={4}></Grid>
          <Grid item={true} xs={4}><Button variant="outlined" onClick={handleCancelEditPatient}>
            Cancelar
          </Button></Grid>
          <Grid item={true} xs={4}><Button variant="contained" onClick={handleSaveNewPatient}>
            Guardar Cambios
          </Button></Grid>
        </Grid>

      </Grid >
      <Grid item={true} xs={12} md={3}></Grid>
    </Grid>
  </section>
};
