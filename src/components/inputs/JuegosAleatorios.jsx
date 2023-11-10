import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, FormControl, CircularProgress, Grid, Typography } from '@mui/material';

function JuegosAleatorios() {
    const [juegos, setJuegos] = useState(Array(10).fill(''));
    const [preferencias, setPreferencias] = useState(Array(10).fill(10));
    const [juegoSeleccionado, setJuegoSeleccionado] = useState('');
    const [spinner, setSpinner] = useState(false);

    const handleChangeJuego = (index, value) => {
        const nuevosJuegos = [...juegos];
        nuevosJuegos[index] = value;
        setJuegos(nuevosJuegos);
    };

    const handleChangePreferencia = (index, value) => {
        const nuevasPreferencias = [...preferencias];
        nuevasPreferencias[index] = value;
        setPreferencias(nuevasPreferencias);
    };

    const generarJuegoAleatorio = () => {
        setSpinner(true);
        setTimeout(() => {
            const juegosDisponibles = juegos.filter((juego, index) => juego !== '' && preferencias[index] > 0);
            if (juegosDisponibles.length > 0) {
                const probabilidades = juegosDisponibles.map((juego, index) => preferencias[index]);
                const totalPreferencias = probabilidades.reduce((a, b) => a + b, 0);
                const probabilidadesNormalizadas = probabilidades.map(p => p / totalPreferencias);

                // Genera un número aleatorio entre 0 y 1
                const random = Math.random();

                // Elige un juego en función de las probabilidades
                let acumulador = 0;
                let juegoSeleccionado = '';
                for (let i = 0; i < juegosDisponibles.length; i++) {
                    acumulador += probabilidadesNormalizadas[i];
                    if (random <= acumulador) {
                        juegoSeleccionado = juegosDisponibles[i];
                        break;
                    }
                }

                setJuegoSeleccionado(juegoSeleccionado);
            } else {
                setJuegoSeleccionado('No hay juegos disponibles');
            }
            setSpinner(false);
        }, 1000);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '5%' }}>
            <div style={{ width: '70%' }}>
                {juegos.map((juego, index) => (
                    <div key={index}>
                        <TextField
                            label={`${index + 1}`}
                            value={juego}
                            onChange={(e) => handleChangeJuego(index, e.target.value)}
                            InputLabelProps={{ style: { color: 'white' } }}
                            focused
                            InputProps={{
                                style: { color: 'white' },
                                className: "customTextField"
                            }}
                            sx={{ width: '65%', marginRight: '3%', marginBottom: '2%' }}
                        />
                        <FormControl sx={{ width: '15%' }} focused>
                            <Select
                                value={preferencias[index]}
                                onChange={(e) => handleChangePreferencia(index, e.target.value)}
                                sx={{ color: 'white', }}
                                labelId="demo-simple-select-error-label"
                                id="demo-simple-select-error"
                            >
                                {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((numero) => (
                                    <MenuItem key={numero} value={numero}>
                                        {numero}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                ))}
            </div>
            <div style={{ marginLeft: '20px', width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ minHeight: '60px' }}>
                    <Button variant="contained" color="primary" onClick={generarJuegoAleatorio} sx={{ marginBottom: '3%' }}>
                        Generar Juego Aleatorio
                    </Button>
                </div>
                <div style={{ minHeight: '60px' }}>
                    {spinner ? (
                        <Grid container justifyContent='center' style={{ height: '60px' }}>
                            <CircularProgress />
                        </Grid>
                    ) : (
                        <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                            {juegoSeleccionado && <p>{juegoSeleccionado}</p>}
                        </Typography>
                    )}
                </div>
            </div>

        </div>
    );
}

export default JuegosAleatorios;
