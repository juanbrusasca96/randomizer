import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Grid, Avatar, Typography, Button, CircularProgress } from '@mui/material'
import WinRate from '../winrate/WinRate'
import { calcularWinRate, hardSupport, offLane, softSupport } from '../../utils/utils'

export default function CardHero() {
    const [heroes, setHeroes] = useState([])
    const [heroesWithMoreWinRate, setHeroesWithMoreWinRate] = useState([])
    const [secondGroupHeroesWithMoreWinRate, setSecondGroupHeroesWithMoreWinRate] = useState([])
    const [spinner, setSpinner] = useState(false)

    async function getAllHeroes() {
        const response = await axios.get('https://api.opendota.com/api/heroStats', { mode: 'no-cors' })
        const heroesBeforeWinRate = response.data
        const heroesWithWinRate = heroesBeforeWinRate.map((hero) => ({ ...hero, winRate: calcularWinRate(hero['5_pick'], hero['5_win']) }))
        setHeroes(heroesWithWinRate.sort(compareForWinRate))
    }

    function compareForWinRate(heroA, heroB) {
        return heroB.winRate - heroA.winRate
    }

    const onClickHandler = (arrayName) => {
        let arrayToUse = []
        if (arrayName === 'off') {
            arrayToUse = offLane
        } else if (arrayName === 'soft') {
            arrayToUse = softSupport
        } else if (arrayName === 'hard') {
            arrayToUse = hardSupport
        }
        setSpinner(true)
        let heroesSelected = []
        for (let i = 0; i < heroes.length; i++) {
            if (arrayToUse.includes(heroes[i].localized_name)) {
                heroesSelected.push(heroes[i].localized_name)
            }
            if (heroesSelected.length >= 5) {
                break
            }
        }
        setTimeout(() => {
            setHeroesWithMoreWinRate(randomizeArray(heroesSelected.slice(0, 3)))
            setSecondGroupHeroesWithMoreWinRate(heroesSelected.slice(3, 5))
            setSpinner(false)
        }, 1000)
    }

    function randomizeArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        getAllHeroes()
    }, [])

    return (
        <Grid container sx={{ padding: '3%', width: '100%' }}>
            <Grid sx={{ width: '45%' }}>
                {
                    heroes.map((hero) => (
                        <Grid key={hero.id} container alignItems='center'>
                            <Grid container alignItems='center' sx={{ margin: '2%', gap: '15px', width: '45%' }}>
                                <Avatar src={`https://api.opendota.com${hero.img}`} variant="rounded" />
                                <Typography>{hero.localized_name}</Typography>
                            </Grid>
                            <Grid sx={{ width: '45%' }}>
                                <WinRate progress={hero.winRate} />
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid container direction='column' justifyContent='flex-start' alignItems='center' sx={{ width: '45%', gap: '20px' }} >
                <Button variant='contained' onClick={() => onClickHandler('off')}>Off lane</Button>
                <Button variant='contained' onClick={() => onClickHandler('soft')}>Soft support</Button>
                <Button variant='contained' onClick={() => onClickHandler('hard')}>Hard Support</Button>
                <Grid>
                    {heroesWithMoreWinRate.length > 0 &&
                        spinner ? <Grid container justifyContent='center'>
                        <CircularProgress />
                    </Grid> :
                        <Grid>
                            {heroesWithMoreWinRate.map((hero) => (
                                <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                                    {hero}
                                </Typography>
                            ))}
                            <hr />
                            {secondGroupHeroesWithMoreWinRate.map((hero) => (
                                <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                                    {hero}
                                </Typography>
                            ))}
                        </Grid>}
                </Grid>
            </Grid>
        </Grid>
    )
}
