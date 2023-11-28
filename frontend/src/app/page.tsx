"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Form from '@/components/Form';
import AlertDialog from '@/components/AlertDialog';
import { Button, CircularProgress, Container } from '@mui/material';

export default function HomePage() {
  const [age, setAge] = React.useState<string>('')
  const [personIncome, setPersonIncome] = React.useState<string>('')
  const [homeOwnership, setHomeOwnership] = React.useState<string>('')
  const [personEmpLength, setPersonEmpLength] = React.useState<string>('')
  const [loanIntent, setLoanIntent] = React.useState<string>('')
  const [loanGrade, setLoanGrade] = React.useState<string>('')
  const [loanAmount, setLoanAmount] = React.useState<string>('')
  const [loanIntRate, setLoanIntRate] = React.useState<string>('')
  const [loanPercentIncome, setLoanPercentIncome] = React.useState<string>('')
  const [cbPersonDefaultOnFile, setCbPersonDefaultOnFile] = React.useState<string>('')
  const [cbPersonCredHistLength, setCbPersonCredHistLength] = React.useState<string>('')
  const [verificationInProgress, setVerificationInProgress] = React.useState<boolean>(false)
  const [openDialog, setOpenDialog] = React.useState<boolean>(false)
  const [dialogTitle, setDialogTitle] = React.useState<string>('')
  const [dialogContent, setDialogContent] = React.useState<string>('')

  const updateAge = (newValue: string) => {
    setAge(newValue)
  }

  const updatePersonIncome = (newValue: string) => {
    setPersonIncome(newValue)
  }

  const updateHomeOwnership = (newValue: string) => {
    setHomeOwnership(newValue)
  }

  const updatePersonEmpLength = (newValue: string) => {
    setPersonEmpLength(newValue)
  }

  const updateLoanIntent = (newValue: string) => {
    setLoanIntent(newValue)
  }

  const updateLoanGrade = (newValue: string) => {
    setLoanGrade(newValue)
  }

  const updateLoanAmount = (newValue: string) => {
    setLoanAmount(newValue)
  }

  const updateLoanPercentIncome = (newValue: string) => {
    setLoanPercentIncome(newValue)
  }

  const updateLoanIntRate = (newValue: string) => {
    setLoanIntRate(newValue)
  }

  const updateCbPersonDefaultOnFile = (newValue: string) => {
    setCbPersonDefaultOnFile(newValue)
  }

  const updateCbPersonCredHistLength = (newValue: string) => {
    setCbPersonCredHistLength(newValue)
  }

  const showDialog = (value: boolean) => {
    setOpenDialog(true)
  }

  const closeDialog = (value: boolean) => {
    setOpenDialog(false)
  }

  console.log(`Edad: ${age}`)
  console.log(`Ingresos anuales: ${personIncome}`)
  console.log(`Home ownership: ${homeOwnership}`)
  console.log(`Person emp length: ${personEmpLength}`)
  console.log(`Loan intent: ${loanIntent}`)
  console.log(`Loan grade: ${loanGrade}`)
  console.log(`Loan amount: ${loanAmount}`)
  console.log(`Loan int rate: ${loanIntRate}`)
  console.log(`Loan percent income: ${loanPercentIncome}`)
  console.log(`Estado de mora: ${cbPersonDefaultOnFile}`)
  console.log(`Años de historial crediticio: ${cbPersonCredHistLength}`)

  const  performVerification = async () => {
    setVerificationInProgress(true)
    const url = `http://localhost:8000?age=${age}&person_income=${personIncome}&person_home_ownership=${homeOwnership}&person_emp_length=${personEmpLength}&loan_intent=${loanIntent}&loan_grade=${loanGrade}&loan_amnt=${loanAmount}&loan_int_rate=${loanIntRate}&loan_percent_income=${loanPercentIncome}&cb_person_default_on_file=${cbPersonDefaultOnFile}&cb_preson_cred_hist_length=${cbPersonCredHistLength}`
    console.log(url)
    const response = await fetch(url);
    const data = await response.json()
    setTimeout(() => {
      console.log(data.state)
      if (data.state == 1) {
        console.log('Consulta rechazada')
        setDialogTitle('Consulta rechazada')
        setDialogContent('La persona no cuenta con las condiciones necesarias para que se le pueda otorgar el credito')
        setOpenDialog(true)
      } else {
        console.log('Consulta aprobada')
        setDialogTitle('Consulta aprobada')
        setDialogContent('La persona cuenta con las condiciones necesarias para que se le pueda otorgar el credito')
        setOpenDialog(true)
      }
      setVerificationInProgress(false);
    }, 1000);
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AlertDialog
          openDialog={openDialog}
          closeDialog={closeDialog}
          title={dialogTitle}
          content={dialogContent}
        />
        <Form
          updateAge={updateAge}
          updatePersonIncome={updatePersonIncome}
          updateHomeOwnership={updateHomeOwnership}
          updatePersonEmpLength={updatePersonEmpLength}
          updateLoanIntent={updateLoanIntent}
          updateLoanGrade={updateLoanGrade}
          updateLoanAmount={updateLoanAmount}
          updateLoanIntRate={updateLoanIntRate}
          updateLoanPercentIncome={updateLoanPercentIncome}
          updateCbPersonDefaultOnFile={updateCbPersonDefaultOnFile}
          updateCbPersonCredHistLength={updateCbPersonCredHistLength}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {verificationInProgress && (
            <Box sx={{ mt: 3, ml: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Typography variant="subtitle1">Verificacion en proceso...</Typography>
              <br/>
              <CircularProgress />
            </Box>
          )}
          {!verificationInProgress && (
            <Button
              variant="contained"
              onClick={performVerification}
              sx={{ mt: 3, ml: 1 }}
            >
              Verificar
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
}
