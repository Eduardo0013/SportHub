import { useEffect, useRef, useState } from "react"
import { EQUIPOS,PARTIDOS,TORNEOS } from '@Modules/shared/config/web-services'
import Button from "@Modules/core/components/button/Button"
import Form from "@Modules/core/components/form/Form"
import stylesheet from './create-game-modal.module.css'
import SecondaryButton from "@Modules/core/components/button/SecondaryButton"
import Select from "react-select"
import useFetch from '@Modules/core/hooks/useFetch'

const CreateGameModal = ({ game, handleClose }) => {
    const equiposResponse = useFetch(EQUIPOS)
    const torneosResponse = useFetch(TORNEOS)
    const [torneos,setTorneos] = useState(null)
    const [equipos,setEquipos] = useState(null)
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
        console.log(await response.text())
    }

    return (
        <div className={stylesheet.CreateGameModal}>
            <Form
                className={stylesheet['CreateGameModal-form']}
                onSubmit={handleSubmit}>
                <div className={stylesheet['CreateGameModal-form_header']}>
                    Editar
                </div>
                <div className={stylesheet['CreateGameModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='game-team-one'>Equipo 1</Form.Label>
                        <Select
                            id='game-team-one'
                            ref={equipoUnoRef}
                            options={equipos}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='game-team-two'>Equipo 2</Form.Label>
                        <Select
                            id='game-team-two'
                            ref={equipoDosRef}
                            options={equipos}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='game-tournament'>Torneo</Form.Label>
                        <Select
                            id='game-tournament'
                            ref={torneoRef}
                            options={torneos} />
                    </Form.Group>
                </div>
                <div className={stylesheet['CreateGameModal-form_footer']}>
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

export default CreateGameModal