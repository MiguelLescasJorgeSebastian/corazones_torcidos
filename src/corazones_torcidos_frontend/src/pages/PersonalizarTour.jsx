import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import QRCode from 'qrcode.react';
import axios from 'axios';
import { useAuthClient } from '../services/use-auth-client';

export default function PersonalizarTour() {
  const [taller, setTaller] = React.useState('');
  const [qrValue, setQrValue] = React.useState(null);
  const { whoamiActor } = useAuthClient();

  const handleChange = (event) => {
    setTaller(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await whoamiActor.whoami();
    const reservation = {
      nombre: event.target.nombre.value,
      cantidad: event.target.cantidad.value,
      llevanCarro: event.target.llevanCarro.checked,
      necesitanCarro: event.target.necesitanCarro.checked,
      taller,
      fecha: event.target.fecha.value,
      precio: 100, // precio por defecto
    };
    // Aquí deberías enviar la reserva al servidor
    // axios.post('/api/reservas', reservation, { headers: { Authorization: `Bearer ${token}` } });
    setQrValue(JSON.stringify(reservation));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        margin: 'auto',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="nombre" label="Nombre" />
        <TextField required id="cantidad" label="Cantidad de integrantes" type="number" />
      </div>
      <FormGroup>
        <FormControlLabel control={<Checkbox id="llevanCarro" />} label="¿Llevan carro?" labelPlacement="start" />
        <FormControlLabel control={<Checkbox id="necesitanCarro" />} label="¿Necesitan carro?" labelPlacement="start" />
      </FormGroup>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Taller</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="taller"
          value={taller}
          label="Taller"
          onChange={handleChange}
        >
          <MenuItem value={10}>Taller 1</MenuItem>
          <MenuItem value={20}>Taller 2</MenuItem>
          <MenuItem value={30}>Taller 3</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="fecha"
        label="Fecha"
        type="date"
        defaultValue="2022-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button type="submit" variant="contained" style={{marginTop: '20px'}}>Enviar</Button>
      {qrValue && <QRCode value={qrValue} />}
    </Box>

    

  );
}