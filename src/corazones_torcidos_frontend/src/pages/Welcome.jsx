import React from 'react';
import {  Button, Typography } from '@material-ui/core';
import '../style/Welcome.css'; // Asegúrate de que la ruta al archivo CSS es correcta
import { useNavigate } from 'react-router-dom';



const Welcome = () => {
    const navigate = useNavigate();

     
    return (
     

        <div className="welcome">
        <Typography variant="h2" component="h1" gutterBottom>
            ¡Bienvenido a Corazones Torcidos!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
            Ofrecemos tours con talleres para que conozcas de una manera más profunda la comunidad.
        </Typography>
        <Button 
  variant="contained" 
  color="secondary" 
  onClick={() => { navigate('/registro'); }}
>
  Crea tu tour personalizado
</Button>
    </div>
    );
};

export default Welcome;