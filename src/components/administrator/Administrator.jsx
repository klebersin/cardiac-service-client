import react, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Stack, Modal, Box, TextField, FormGroup } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'nombres', headerName: 'nombres', width: 150 },
    { field: 'apellidos', headerName: 'apellidos', width: 150 },
    { field: 'especialidad', headerName: 'especialidad', type: 'number', width: 150 },
    { field: 'correo', headerName: 'correo', type: 'number', width: 150 },
    { field: 'telefono', headerName: 'telefono', type: 'number', width: 90 },
    { field: 'pais', headerName: 'pais', type: 'number', width: 90 },
    { field: 'provincia', headerName: 'provincia', type: 'number', width: 90 },
];

var rows = [
    {
        id: 1,
        nombres: 'alexis',
        apellidos: 'huayna ',
        especialidad: 'Psicologia',
        correo: 'ahuayna@unsa.edu.pe',
        telefono: '958478123',
        pais: 'Peru',
        provincia: 'Arequipa'
    },
    {
        id: 2,
        nombres: 'richi',
        apellidos: 'smith',
        especialidad: 'matematica',
        correo: 'rsmith@unsa.edu.pe',
        telefono: '598123684',
        pais: 'Peru',
        provincia: 'Puno'
    }
];

const Administrator = ({props}) => {
    const [open, setOpen] = useState(false);
    const [medico, setMedico] = useState({
        nombres: '',
        apellidos: '',
        especialidad: '',
        correo: '',
        telefono: '',
        pais: '',
        provincia: ''
    });
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addMedico = () => {
        console.log("Axios Process");
        var nuevo_medico = {
            id: rows.length + 1,
            nombres: medico.nombres,
            apellidos: medico.apellidos,
            especialidad: medico.especialidad,
            correo: medico.correo,
            telefono: medico.telefono,
            pais: medico.pais,
            provincia: medico.provincia
        }
        rows.push(nuevo_medico);
        setOpen(false);
    };

    const actualizarCampo = e => {
        setMedico({
            ...medico,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <div>
                <Button variant="contained" onClick={handleOpen}>Agregar médico</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    Formulario de registro de medicos
                    <TextField
                        label="nombres"
                        name="nombres"
                        variant="standard"
                        value={medico.nombres}
                        onChange={actualizarCampo}
                        fullWidth/>
                    <TextField 
                        label="apellidos"
                        name="apellidos"
                        variant="standard"
                        value={medico.apellidos}
                        onChange={actualizarCampo}
                        fullWidth/>
                    <TextField
                        label="especialidad"
                        name="especialidad"
                        variant="standard"
                        value={medico.especialidad}
                        onChange={actualizarCampo}
                        fullWidth/>
                    <TextField
                        label="correo"
                        name="correo"
                        variant="standard"
                        value={medico.correo}
                        onChange={actualizarCampo}
                        fullWidth/>
                    <TextField
                        label="telefono"
                        name="telefono"
                        variant="standard"
                        value={medico.telefono}
                        onChange={actualizarCampo}
                        fullWidth/>
                    <TextField
                        label="pais"
                        name="pais"
                        variant="standard"
                        value={medico.pais}
                        onChange={actualizarCampo}
                        fullWidth/>
                    <TextField
                        label="provincia"
                        name="provincia"
                        variant="standard"
                        value={medico.provincia}
                        onChange={actualizarCampo}
                        fullWidth/>

                    <Stack spacing={2} direction="row">
                        <Button onClick={addMedico}>Agregar</Button>
                        <Button onClick={handleClose}>Cancelar</Button>
                    </Stack>
                </Box>
            </Modal>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default Administrator;