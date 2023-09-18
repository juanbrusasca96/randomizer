import { Avatar, Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AGE, JUEGOONLINEPRIMARIO, JUEGOONLINESECUNDARIO, JUEGOSPRIMARIOS, JUEGOSSECUNDARIOS, ESTUDIO, COSASESTUDIO, agePossibilities, queHacerList, queHacerListDropActivo, HISTORIA, COSASCONHISTORIA, totalWeight, weightPercentages, weightPercentagesDropActivo, COUNTER } from '../../utils/utils'

export default function Card() {
    const [elegido, setElegido] = useState()
    const [age, setAge] = useState()
    const [spinner, setSpinner] = useState(false)

    // const onClickHandler = () => {
    //     setSpinner(true)
    //     setTimeout(() => {
    //         const random = queHacerList[Math.floor(Math.random() * queHacerList.length)].name
    //         console.log(random);
    //         if (random === JUEGOONLINEPRIMARIO.name) {
    //             setElegido(JUEGOSPRIMARIOS[Math.floor(Math.random() * JUEGOSPRIMARIOS.length)].name)
    //         } else if (random === JUEGOONLINESECUNDARIO.name) {
    //             setElegido(JUEGOSSECUNDARIOS[Math.floor(Math.random() * JUEGOSSECUNDARIOS.length)].name)
    //         } else if (random === ESTUDIO.name) {
    //             setElegido(COSASESTUDIO[Math.floor(Math.random() * COSASESTUDIO.length)].name)
    //         } else if (random === HISTORIA.name) {
    //             setElegido(COSASCONHISTORIA[Math.floor(Math.random() * COSASCONHISTORIA.length)].name)
    //         } else {
    //             setElegido(random)
    //         }
    //         setAge(agePossibilities[Math.floor(Math.random() * agePossibilities.length)])
    //         setSpinner(false)
    //     }, 1000)
    // }

    const onClickHandler = (dropActivo) => {
        setSpinner(true);
        setTimeout(() => {
          const random = Math.random() * totalWeight(dropActivo?weightPercentagesDropActivo:weightPercentages);
          let accumulatedWeight = 0;
          let selectedOption = null;
      
          for (const [optionName, percentage] of Object.entries(dropActivo?weightPercentagesDropActivo:weightPercentages)) {
            accumulatedWeight += (percentage / 100) * totalWeight(dropActivo?weightPercentagesDropActivo:weightPercentages);
            if (random <= accumulatedWeight) {
              selectedOption = optionName;
              break;
            }
          }
          console.log(selectedOption);
          console.log(dropActivo);
      
          if (selectedOption) {
            switch (selectedOption) {
              case "JUEGOONLINEPRIMARIO":
                setElegido(JUEGOSPRIMARIOS[Math.floor(Math.random() * JUEGOSPRIMARIOS.length)].name);
                break;
              case "JUEGOONLINESECUNDARIO":
                setElegido(JUEGOSSECUNDARIOS[Math.floor(Math.random() * JUEGOSSECUNDARIOS.length)].name);
                setAge(agePossibilities[Math.floor(Math.random() * agePossibilities.length)]);
                break;
              case "HISTORIA":
                setElegido(COSASCONHISTORIA[Math.floor(Math.random() * COSASCONHISTORIA.length)].name);
                break;
              case "ESTUDIO":
                setElegido(COSASESTUDIO[Math.floor(Math.random() * COSASESTUDIO.length)].name);
                break;
              case "COUNTER":
                setElegido(COUNTER.name);
                break;
              default:
                setElegido("");
            }
          }
      
          setSpinner(false);
        }, 1000);
      };
      
    // const onClickHandlerDropActivo = () => {
    //     setSpinner(true)
    //     setTimeout(() => {
    //         const random = queHacerListDropActivo[Math.floor(Math.random() * queHacerListDropActivo.length)].name
    //         console.log(random);
    //         if (random === JUEGOONLINEPRIMARIO.name) {
    //             setElegido(JUEGOSPRIMARIOS[Math.floor(Math.random() * JUEGOSPRIMARIOS.length)].name)
    //         } else if (random === JUEGOONLINESECUNDARIO.name) {
    //             setElegido(JUEGOSSECUNDARIOS[Math.floor(Math.random() * JUEGOSSECUNDARIOS.length)].name)
    //         } else if (random === ESTUDIO.name) {
    //             setElegido(COSASESTUDIO[Math.floor(Math.random() * COSASESTUDIO.length)].name)
    //         } else if (random === HISTORIA.name) {
    //             setElegido(COSASCONHISTORIA[Math.floor(Math.random() * COSASCONHISTORIA.length)].name)
    //         } else {
    //             setElegido(random)
    //         }
    //         setAge(agePossibilities[Math.floor(Math.random() * agePossibilities.length)])
    //         setSpinner(false)
    //     }, 1000)
    // }

    return (
        <Grid container sx={{ width: '50%', padding: '1%' }}>
            {queHacerList.map((elem, i) => (
                <Grid key={i} container alignItems='center' sx={{ gap: '2%', margin: '2%' }}>
                    <Avatar src={elem.image} variant="rounded" />
                    <Typography>
                        {elem.name}
                    </Typography>
                </Grid>
            ))}
            <Grid container direction='column' sx={{ width: '35%' }}>
                <Button variant='contained' sx={{ margin: '3%' }} onClick={()=>onClickHandler(false)}>
                    Que hacer
                </Button>
                <Button variant='contained' sx={{ margin: '3%' }} onClick={()=>onClickHandler(true)}>
                    Drop counter activo
                </Button>
                {elegido &&
                    spinner ? <Grid container justifyContent='center'>
                    <CircularProgress />
                </Grid> :
                    <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        {elegido === AGE.name ? `${elegido}, ${age}` : elegido}
                    </Typography>}
                {/* <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        {elegido}
                    </Typography>} */}
            </Grid>
        </Grid>
    )
}
