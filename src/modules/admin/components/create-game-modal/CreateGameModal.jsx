import Button from "@Modules/core/components/button/Button"
import Form from "@Modules/core/components/form/Form"
import stylesheet from './create-game-modal.module.css'
import SecondaryButton from "@Modules/core/components/button/SecondaryButton"
import Select from "react-select"
import useFetch from '@Modules/core/hooks/useFetch'
import { EQUIPOS } from '@Modules/shared/config/web-services'
import { useEffect, useState } from "react"

const CreateGameModal = ({ game, handleClose }) => {
    const equiposResponse = useFetch(EQUIPOS)
    const [equipos,setEquipos] = useState(null)

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
    },[equiposResponse.value])

    return (
        <div className={stylesheet.CreateGameModal}>
            <Form
                className={stylesheet['CreateGameModal-form']}
                onSubmit={(ev) => { ev.preventDefault() }}>
                <div className={stylesheet['CreateGameModal-form_header']}>
                    Editar
                </div>
                <div className={stylesheet['CreateGameModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='game-team-one'>Equipo 1</Form.Label>
                        <Select
                            options={equipos}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='game-team-two'>Equipo 2</Form.Label>
                        <Select
                            options={equipos}/>
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