import { useEffect, useRef, useState } from "react"
import { v4 } from "uuid"
import { EQUIPOS, DEPORTES, TORNEOS } from '@Modules/shared/config/web-services'
import Button from "@Modules/core/components/button/Button"
import Form from "@Modules/core/components/form/Form"
import stylesheet from './create-tournament-modal.module.css'
import SecondaryButton from "@Modules/core/components/button/SecondaryButton"
import Select from 'react-select'
import Slider from '@Modules/core/components/form/Slider'
import useFetch from '@Modules/core/hooks/useFetch'
import Alert from '@Modules/core/components/alert/Alert'

const CreateTournamentModal = ({ tournament, handleClose }) => {
    const deportesResponse = useFetch(DEPORTES)
    const equiposResponse = useFetch(EQUIPOS)
    const [deportes, setDeportes] = useState([])
    const [equipos, setEquipos] = useState([])
    const deporteRef = useRef(null)
    const miembrosRef = useRef(null)
    const [alert, setAlert] = useState({
        isVisible: false,
        type: 'error'
    })

    useEffect(() => {
        if (deportesResponse.value) {
            const deportes = deportesResponse.value.deportes.map(deporte => {
                return {
                    label: deporte.nombre,
                    value: deporte.id
                }
            })
            setDeportes(deportes)
        }
        if (equiposResponse.value) {
            const equipos = equiposResponse.value.equipos.map(equipo => {
                return {
                    label: equipo.nombre,
                    value: equipo.id
                }
            })
            setEquipos(equipos)
        }
    }, [deportesResponse.value])

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        const $form = ev.target
        const nombre = $form.querySelector('#tournament-name').value
        const descripcion = $form.querySelector('#tournament-description').value
        const ubicacion = $form.querySelector('#tournament-location').value
        const fecha_inicio = $form.querySelector('#tournament-date-init').value
        const fecha_fin = $form.querySelector('#tournament-date-end').value
        const deporte_id = deporteRef.current.getValue()[0].value
        const privado = false
        const payload = {
            torneo: { nombre, descripcion, ubicacion, fecha_inicio, fecha_fin, deporte_id, privado }
        }
        const response = await fetch(TORNEOS, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(payload)
        })
        const json = await response.json()

        if (!response.ok) {
            setAlert({
                type: 'error',
                isVisible: true,
                message: 'Se produjo un error'
            })
            return
        }
        setAlert({
            type: 'success',
            isVisible: true,
            message: json.message
        })
    }

    return (
        <div className={stylesheet.CreateTournamentModal}>
            <Form
                className={stylesheet['CreateTournamentModal-form']}
                onSubmit={handleSubmit}>
                <div className={stylesheet['CreateTournamentModal-form_header']}>
                    Editar
                </div>
                {alert.isVisible && <Alert type={alert.type}>{alert.message}</Alert>}
                <div className={stylesheet['CreateTournamentModal-form_body']}>
                    <div className={stylesheet['CreateTournamentModal-form_row']}>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-name'>Nombre</Form.Label>
                            <Form.Control id="tournament-name" value={tournament?.nombre} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-description'>Descripción</Form.Label>
                            <Form.Control id="tournament-description" value={tournament?.descripcion} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-location'>Ubicación</Form.Label>
                            <Form.Control id="tournament-location" value={tournament?.nombre} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-sport'>Deporte</Form.Label>
                            <Select
                                id='tournament-sport'
                                options={deportes}
                                ref={deporteRef} />
                        </Form.Group>
                    </div>
                    <div className={stylesheet['CreateTournamentModal-form_row']}>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-date-init'>Inicio</Form.Label>
                            <Form.Control id="tournament-date-init" type="date" value={tournament?.nombre} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-date-end'>Finalización</Form.Label>
                            <Form.Control id="tournament-date-end" type="date" value={tournament?.descripcion} />
                        </Form.Group>
                    </div>
                    <Form.Group>
                        <Form.Label>Miembros</Form.Label>
                        <Select
                            ref={miembrosRef}
                            isMulti
                            options={equipos} />
                    </Form.Group>
                    <div className={stylesheet['CreateTournamentModal-form_row']}>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-private' className='text-gray-400'>Torneo Privado - Proximamente</Form.Label>
                            <Slider />
                        </Form.Group>
                    </div>
                </div>
                <div className={stylesheet['CreateTournamentModal-form_footer']}>
                    <Button type="submit">
                        Guardar
                    </Button>
                    <Button className='bg-red-600 hover:bg-red-500'>
                        Eliminar
                    </Button>
                    <SecondaryButton
                        onClick={handleClose}>
                        Cerrar
                    </SecondaryButton>
                </div>
            </Form>
        </div>
    )
}

export default CreateTournamentModal