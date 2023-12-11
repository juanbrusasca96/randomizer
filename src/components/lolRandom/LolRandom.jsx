import { Button, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { lolPositions, randomizeArray, suppChampions, topChampions } from '../../utils/utils'

export default function LolRandom() {
    const [elegido, setElegido] = useState()
    const [spinner, setSpinner] = useState(false)
    const [spinnerForChampions, setSpinnerForChampions] = useState(false)
    const [champions, setChampions] = useState([])

    const onClickHandler = () => {
        setSpinner(true)
        setTimeout(() => {
            setElegido(lolPositions[Math.floor(Math.random() * lolPositions.length)])
            setSpinner(false)
        }, 1000)
    }

    const onCLickHandlerChampion = (arrayName) => {
        let arrayToUse = []
        if (arrayName === 'top') {
            arrayToUse = topChampions
        } else if (arrayName === 'sup') {
            arrayToUse = suppChampions
        }
        setSpinnerForChampions(true)
        setTimeout(() => {
            setChampions(randomizeArray(arrayToUse))
            setSpinnerForChampions(false)
        }, 1000)
    }

    return (
        <Grid container direction='column'>
            <Grid container direction='column' sx={{ width: '20%' }} alignItems='center'>
                <Button variant='contained' sx={{ margin: '8%' }} onClick={onClickHandler}>
                    Random posicion
                </Button>
                {elegido &&
                    spinner ? <Grid container justifyContent='center'>
                    <CircularProgress />
                </Grid> :
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {elegido}
                    </Typography>}
                <Button variant='contained' sx={{ margin: '8%' }} onClick={() => onCLickHandlerChampion('top')}>
                    Mid
                </Button>
                <Button variant='contained' sx={{ margin: '8%' }} onClick={() => onCLickHandlerChampion('sup')}>
                    Support
                </Button>
                <Grid container sx={{ width: '100%' }}>
                    <hr />
                </Grid>
                <Grid>
                    {champions.length > 0 &&
                        spinnerForChampions ? <Grid container justifyContent='center'>
                        <CircularProgress />
                    </Grid> :
                        <Grid>
                            {champions.map((champ, i) => (
                                <Typography key={i} sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                                    {champ}
                                </Typography>
                            ))}
                        </Grid>}
                </Grid>
            </Grid>
        </Grid >
    )
}
