import { useEffect, useRef, useState } from 'react'
import { USERS, DEPORTES,EQUIPOS } from '@Modules/shared/config/web-services'
import stylesheet from './create-team-modal.module.css'
import Form from '@Modules/core/components/form/Form'
import Button from '@Modules/core/components/button/Button'
import SecondaryButton from '@Modules/core/components/button/SecondaryButton'
import Select from 'react-select'
import useFetch from '@Modules/core/hooks/useFetch'
import Alert from '@Modules/core/components/alert/Alert'

const CreateTeamModal = ({ team, handleClose }) => {
    const [alert,setAlert] = useState({ isVisible : false, type: 'error' })
    const usersResponse = useFetch(USERS)
    const deportesResponse = useFetch(DEPORTES)
    const [users,setUsers] = useState([])
    const [deportes,setDeportes] = useState([])
    const deporteRef = useRef(null)
    const miembroRef = useRef(null)

    useEffect(() => {
        if(usersResponse.value){
            const users = usersResponse.value.users.map(user => {
                return {
                    label : user.email,
                    value: user.id
                }
            })
            setUsers(users)
        }
        if(deportesResponse.value){
            const deportes = deportesResponse.value.deportes.map(deporte => {
                return {
                    value : deporte.id,
                    label : deporte.nombre
                }
            })
            setDeportes(deportes)
        }
    },[deportesResponse.value])

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        const $form = ev.target
        const nombre = $form.querySelector('#team-name').value
        const deporte_id = deporteRef.current.getValue()[0].value
        const miembros = miembroRef.current.getValue()
        const equipo = {
            nombre,
            deporte_id,
            miembros
        }
        const response = await fetch(EQUIPOS,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : '*/*'
            },
            body: JSON.stringify(equipo)
        })
        if(response.status === 404){
            setAlert({
                type: 'error',
                message: '404 Not Found',
                isVisible : true
            })
            return
        }
        const json = await response.json()

        if(!response.ok){
            setAlert({
                type: 'error',
                message: json.message,
                isVisible : true
            })
            return
        }
        setAlert({
            type : 'success',
            message: json.message,
            isVisible : true
        })
    }

    return (
        <div className={stylesheet.CreateTeamModal}>
            <Form
                className={stylesheet['CreateTeamModal-form']}
                onSubmit={handleSubmit}>
                <div className={stylesheet['CreateTeamModal-form_header']}>
                    Editar
                </div>
                {alert.isVisible && <Alert type={alert.type}>{alert?.message}</Alert>}
                <div className={stylesheet['CreateTeamModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='team-name'>Nombre</Form.Label>
                        <Form.Control id="team-name" value={team?.nombre} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='team-sport'>Deporte</Form.Label>
                        <Select 
                            options={deportes}
                            ref={deporteRef}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Miembros</Form.Label>
                        <Select 
                            isMulti
                            options={users}
                            ref={miembroRef}/>
                    </Form.Group>
                </div>
                <div className={stylesheet['CreateTeamModal-form_footer']}>
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

export default CreateTeamModal