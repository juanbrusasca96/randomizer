import { Avatar, Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { agePossibilities, queHacerList, queHacerListDropActivo } from '../../utils/utils'

export default function Card() {
    const [elegido, setElegido] = useState()
    const [age, setAge] = useState()
    const [spinner, setSpinner] = useState(false)

    const onClickHandler = () => {
        setSpinner(true)
        setTimeout(() => {
            setElegido(queHacerList[Math.floor(Math.random() * queHacerList.length)].name)
            setAge(agePossibilities[Math.floor(Math.random() * agePossibilities.length)])
            setSpinner(false)
        }, 1000)
    }

    const onClickHandlerDropActivo = () => {
        setSpinner(true)
        setTimeout(() => {
            setElegido(queHacerListDropActivo[Math.floor(Math.random() * queHacerListDropActivo.length)].name)
            setAge(agePossibilities[Math.floor(Math.random() * agePossibilities.length)])
            setSpinner(false)
        }, 1000)
    }

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
                <Button variant='contained' sx={{ margin: '3%' }} onClick={onClickHandler}>
                    Que hacer
                </Button>
                <Button variant='contained' sx={{ margin: '3%' }} onClick={onClickHandlerDropActivo}>
                    Drop counter activo
                </Button>
                {elegido &&
                    spinner ? <Grid container justifyContent='center'>
                    <CircularProgress />
                </Grid> :
                    <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        {elegido === queHacerList[2].name ? `${elegido}, ${age}` : elegido}
                    </Typography>}
                    {/* <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        {elegido}
                    </Typography>} */}
            </Grid>
        </Grid>
    )
}
