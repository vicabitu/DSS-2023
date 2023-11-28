import React, { ChangeEvent } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface Props {
  updateAge: (newValue: string) => void;
  updatePersonIncome: (newValue: string) => void;
  updateHomeOwnership: (newValue: string) => void;
  updatePersonEmpLength: (newValue: string) => void;
  updateLoanIntent: (newValue: string) => void;
  updateLoanGrade: (newValue: string) => void;
  updateLoanAmount: (newValue: string) => void;
  updateLoanIntRate: (newValue: string) => void;
  updateLoanPercentIncome: (newValue: string) => void;
  updateCbPersonDefaultOnFile: (newValue: string) => void;
  updateCbPersonCredHistLength: (newValue: string) => void;
}

export default function Form({
  updateAge,
  updatePersonIncome,
  updateHomeOwnership,
  updatePersonEmpLength,
  updateLoanIntent,
  updateLoanGrade,
  updateLoanAmount,
  updateLoanIntRate,
  updateLoanPercentIncome,
  updateCbPersonDefaultOnFile,
  updateCbPersonCredHistLength
}: Props) {
  const [homeOwnership, setHomeOwnership] = React.useState<string>('')
  const [loanIntent, setLoanIntent] = React.useState<string>('')
  const [loanGrade, setLoanGrade] = React.useState<string>('')
  const [cbPersonDefaultOnFile, setCbPersonDefaultOnFile] = React.useState<string>('')

  const handleUpdateAge = (event: ChangeEvent<HTMLInputElement>) => {
    updateAge(event.target.value)
  }

  const handleUpdatePersonIncome = (event: ChangeEvent<HTMLInputElement>) => {
    updatePersonIncome(event.target.value)
  }

  const handleHomeOwnership = (event: SelectChangeEvent) => {
    setHomeOwnership(event.target.value)
    updateHomeOwnership(event.target.value)
  }

  const handleUpdatePersonEmpLength = (event: ChangeEvent<HTMLInputElement>) => {
    updatePersonEmpLength(event.target.value)
  }

  const handleLoanIntent = (event: SelectChangeEvent) => {
    setLoanIntent(event.target.value)
    updateLoanIntent(event.target.value)
  }

  const handleLoanGrade = (event: SelectChangeEvent) => {
    setLoanGrade(event.target.value)
    updateLoanGrade(event.target.value)
  }

  const handleUpdateLoanAmount = (event: ChangeEvent<HTMLInputElement>) => {
    updateLoanAmount(event.target.value)
  }

  const handleUpdateLoanIntRate = (event: ChangeEvent<HTMLInputElement>) => {
    updateLoanIntRate(event.target.value)
  }

  const handleUpdateLoanPercentIncome = (event: ChangeEvent<HTMLInputElement>) => {
    updateLoanPercentIncome(event.target.value)
  }

  const handleUpdateCbPersonDefaultOnFile = (event: SelectChangeEvent) => {
    setCbPersonDefaultOnFile(event.target.value)
    updateCbPersonDefaultOnFile(event.target.value)
  }

  const handleUpdateCbPersonCredHistLength = (event: ChangeEvent<HTMLInputElement>) => {
    updateCbPersonCredHistLength(event.target.value)
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <CreditScoreIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingrese los datos para verificar
          </Typography>
          <Box sx={{ mt: 1 }}>   {/* onSubmit={handleSubmit} */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Edad de la persona"
              name="age"
              autoFocus
              onChange={handleUpdateAge}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="person-income"
              label="Ingresos anueales"
              id="person-income"
              onChange={handleUpdatePersonIncome}
            />
            <FormControl fullWidth variant="standard" sx={{ mt: 1}}>
              <InputLabel sx={{fontSize: 17}} id="person-home-ownership-label">Situacion Residencial</InputLabel>
              <Select
                labelId="person-home-ownership-label"
                id="person-home-ownership-select"
                value={homeOwnership}
                onChange={handleHomeOwnership}
                label="Situacion Residencial"
              >
                <MenuItem value={'RENT'}>Alquila</MenuItem>
                <MenuItem value={'MORTGAGE'}>Propietario con hipoteca</MenuItem>
                <MenuItem value={'OWN'}>Propietario</MenuItem>
                <MenuItem value={'OTHER'}>Otro</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="person-emp-length"
              label="Años de antigüedad en el empleo actual"
              name="person-emp-length"
              autoFocus
              onChange={handleUpdatePersonEmpLength}
            />
            <FormControl fullWidth variant="standard" sx={{ mt: 1}}>
              <InputLabel sx={{fontSize: 17}} id="loan-intent-label">Intención del préstamo</InputLabel>
              <Select
                labelId="loan-intent-label"
                id="loan-intent-select"
                value={loanIntent}
                onChange={handleLoanIntent}
                label="Intención del préstamo"
              >
                <MenuItem value={'EDUCATION'}>Educacion</MenuItem>
                <MenuItem value={'MEDICAL'}>Medico</MenuItem>
                <MenuItem value={'VENTURE'}>Inversiones/Riesgo</MenuItem>
                <MenuItem value={'PERSONAL'}>Personal</MenuItem>
                <MenuItem value={'DEBTCONSOLIDATION'}>Consolidación de deuda</MenuItem>
                <MenuItem value={'HOMEIMPROVEMENT'}>Mejoras para el hogar</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth variant="standard" sx={{ mt: 1}}>
              <InputLabel sx={{fontSize: 17}} id="loan-grade-label">Grado del préstamo</InputLabel>
              <Select
                labelId="loan-grade-label"
                id="loan-grade-select"
                value={loanGrade}
                onChange={handleLoanGrade}
                label="Grado del préstamo"
              >
                <MenuItem value={'A'}>A</MenuItem>
                <MenuItem value={'B'}>B</MenuItem>
                <MenuItem value={'C'}>C</MenuItem>
                <MenuItem value={'D'}>D</MenuItem>
                <MenuItem value={'E'}>E</MenuItem>
                <MenuItem value={'F'}>F</MenuItem>
                <MenuItem value={'G'}>G</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="loan-amount"
              label="Monto del préstamo"
              name="loan-amount"
              autoFocus
              onChange={handleUpdateLoanAmount}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="loan-int-rate"
              label="Tasa de interés"
              name="loan-int-rate"
              autoFocus
              onChange={handleUpdateLoanIntRate}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="loan-percent-income"
              label="Porcentaje que representa el préstamo con respecto al ingreso anual"
              name="loan-percent-income"
              autoFocus
              onChange={handleUpdateLoanPercentIncome}
            />
            <FormControl fullWidth variant="standard" sx={{ mt: 1}}>
              <InputLabel sx={{fontSize: 17}} id="mora-label">Estado de mora</InputLabel>
              <Select
                labelId="mora-label"
                id="mora-select"
                value={cbPersonDefaultOnFile}
                onChange={handleUpdateCbPersonDefaultOnFile}
                label="Estado de mora"
              >
                <MenuItem value={'Y'}>Y</MenuItem>
                <MenuItem value={'N'}>N</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="hist-length"
              label="Años de historial crediticio"
              name="hist-length"
              autoFocus
              onChange={handleUpdateCbPersonCredHistLength}
            />
          </Box>
        </Box>
      </Container>
  );
}