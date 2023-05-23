import { Avatar, Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Card({ list }) {
    const [elegido, setElegido] = useState()
    const [spinner, setSpinner] = useState(false)

    const onClickHandler = () => {
        setSpinner(true)
        setTimeout(() => {
            setElegido(list[Math.floor(Math.random() * list.length)].name)
            setSpinner(false)
        }, 1000)

    }
    return (
        <Grid container sx={{ width: '50%', padding: '1%' }}>
            {list.map(elem => (
                <Grid container alignItems='center' sx={{ gap: '3%', margin: '3%' }}>
                    <Avatar src={elem.image} variant="rounded" />
                    <Typography>
                        {elem.name}
                    </Typography>
                </Grid>
            ))}
            <Grid container direction='column' sx={{ width: '35%' }}>
                <Button variant='contained' sx={{ margin: '3%', marginBottom: '10%' }} onClick={onClickHandler}>
                    Que hacer
                </Button>
                {elegido &&
                    spinner ? <Grid container justifyContent='center'>
                    <CircularProgress />
                </Grid> :
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {elegido}
                    </Typography>}
            </Grid>
        </Grid>
    )
}
