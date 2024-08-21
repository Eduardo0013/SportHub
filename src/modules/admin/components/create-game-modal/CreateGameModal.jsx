import { useEffect, useRef, useState } from "react"
import { EQUIPOS,PARTIDOS,TORNEOS } from '@Modules/shared/config/web-services'
import Button from "@Modules/core/components/button/Button"
import Form from "@Modules/core/components/form/Form"
import stylesheet from './create-game-modal.module.css'
import SecondaryButton from "@Modules/core/components/button/SecondaryButton"
import Select from "react-select"
import useFetch from '@Modules/core/hooks/useFetch'
import Alert from '@Modules/core/components/alert/Alert'

const CreateGameModal = ({ handleClose }) => {
    const equiposResponse = useFetch(EQUIPOS)
    const torneosResponse = useFetch(TORNEOS)
    const [torneos,setTorneos] = useState(null)
    const [equipos,setEquipos] = useState(null)
    const [alert, setAlert] = useState({ isActive: false, type: 'error' })
    const equipoUnoRef = useRef(null)
    const equipoDosRef = useRef(null)
    const torneoRef = useRef(null)

    useEffect(() => {
        if(equiposResponse.value){
            const equipos = equiposResponse.value.equipos.map(equipo => {
                return {
                    label: equipo.nombre,
                    value: equipo.id
                }
            })
            setEquipos(equipos)
        }
        if(torneosResponse.value){
            const torneos = torneosResponse.value.torneos.map(torneo => {
                return {
                    label: torneo.nombre,
                    value: torneo.id
                }
            })
            setTorneos(torneos)
        }
    },[equiposResponse.value,torneosResponse.value])

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        try {            
            const teamOne = equipoUnoRef.current.getValue()[0]
            const teamTwo = equipoDosRef.current.getValue()[0]
            const torneo = torneoRef.current.getValue()[0]
            const partido = {
                equipo_uno_id: teamOne.value,
                equipo_dos_id: teamTwo.value,
                torneo_id: torneo.value
            }
            const response = await fetch(PARTIDOS,{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : '*/* '
                },
                body: JSON.stringify(partido)
            })
            const json = await response.json()
            if(response.status === 400){
                setAlert({
                    isActive: true,
                    message: 'El nombre del deporte debe ser unico',
                    type: 'error'
                })
            }
            if(!response.ok){
                setAlert({
                    isActive: true,
                    message: json.message,
                    type: 'error'
                })
                return
            }
            setAlert({
                isActive: true,
                message: json.message,
                type: 'success'
            })
        } catch (error) {
            setAlert({
                isActive: true,
                message: 'Error, contacta con el administrador',
                type: 'error'
            })
        }
    }

    return (
        <div className={stylesheet.CreateGameModal}>
            <Form
                className={stylesheet['CreateGameModal-form']}
                onSubmit={handleSubmit}>
                <div className={stylesheet['CreateGameModal-form_header']}>
                    Editar
                </div>
                {alert.isActive && <Alert type={alert.type}>
                    {alert?.message}
                </Alert>}
                <div className={stylesheet['CreateGameModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='game-team-one'>Equipo 1</Form.Label>
                        <Select
                            id='game-team-one'
                            ref={equipoUnoRef}
                            options={equipos}
                            required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='game-team-two'>Equipo 2</Form.Label>
                        <Select
                            id='game-team-two'
                            ref={equipoDosRef}
                            options={equipos}
                            required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='game-tournament'>Torneo</Form.Label>
                        <Select
                            id='game-tournament'
                            ref={torneoRef}
                            options={torneos} 
                            required/>
                    </Form.Group>
                </div>
                <div className={stylesheet['CreateGameModal-form_footer']}>
                    <Button type="submit">
                        Guardar
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

export default CreateGameModal