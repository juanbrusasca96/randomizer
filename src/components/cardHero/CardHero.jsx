import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Grid, Avatar, Typography } from '@mui/material'

export default function CardHero() {
    const [heroes, setHeroes] = useState([])

    async function getAllHeroes() {
        const response = await axios.get('https://api.opendota.com/api/heroStats',{mode:'no-cors'})
        setHeroes(response.data)
    }

    useEffect(() => {
        getAllHeroes()
    }, [])

    return (
        <Grid container sx={{padding: '3%'}}>
            {
                heroes.map((hero) => (
                    <Grid key={hero.id} container alignItems='center' sx={{margin:'1%', gap:'15px'}}>
                        <Avatar src={`https://api.opendota.com${hero.img}`} variant="rounded" />
                        <Typography>{hero.localized_name}</Typography>
                    </Grid>
                ))
            }
        </Grid>
    )
}
