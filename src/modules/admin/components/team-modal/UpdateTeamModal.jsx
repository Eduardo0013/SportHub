import { useEffect, useState } from 'react'
import { USERS, DEPORTES, EQUIPOS } from '@Modules/shared/config/web-services'
import stylesheet from './create-team-modal.module.css'
import Form from '@Modules/core/components/form/Form'
import Button from '@Modules/core/components/button/Button'
import SecondaryButton from '@Modules/core/components/button/SecondaryButton'
import Select from 'react-select'
import AlertFactory from '@Modules/core/components/alert/AlertFactory'
import useFetch from '@Modules/core/hooks/useFetch'

const UpdateTeamModal = ({ handleClose }) => {
    const [alert, setAlert] = useState({ isVisible: false, type: 'error' })
    const usersResponse = useFetch(USERS)
    const deportesResponse = useFetch(DEPORTES)
    const [users, setUsers] = useState([])
    const [deportes, setDeportes] = useState([])
    
    useEffect(() => {
        if (usersResponse.value) {
            const users = usersResponse.value.users.map(user => {
                return {
                    label: user.email,
                    value: user.id
                }
            })
            setUsers(users)
        }
        if (deportesResponse.value) {
            const deportes = deportesResponse.value.deportes.map(deporte => {
                return {
                    value: deporte.id,
                    label: deporte.nombre
                }
            })
            setDeportes(deportes)
        }
    }, [deportesResponse.value])
    
    const handleSubmit = async () => {
        ev.preventDefault()
        const $form = ev.target
        const formData = new FormData($form)
        const nombre = formData.get('team-name')
        const deporte_id = formData.get('team-sport')
        const miembros = formData.get('team-members')

        const equipo = {
            nombre,
            deporte_id,
            miembros
        }
        const response = await fetch(EQUIPOS, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify(equipo)
        })
        if (response.status === 404) {
            setAlert({
                type: 'error',
                message: '404 Not Found',
                isVisible: true
            })
            return
        }
        const json = await response.json()

        if (!response.ok) {
            setAlert({
                type: 'error',
                message: json.message,
                isVisible: true
            })
            return
        }
        setAlert({
            type: 'success',
            message: json.message,
            isVisible: true
        })
    }

    return (
        <div className={stylesheet.CreateTeamModal}>
            <Form
                className={stylesheet['CreateTeamModal-form']}
                onSubmit={handleSubmit}>
                <div className={stylesheet['CreateTeamModal-form_header']}>
                    Editar - Proximamente
                </div>
                {alert.isVisible && <AlertFactory type={alert.type}>{alert?.message}</AlertFactory>}
                <div className={stylesheet['CreateTeamModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='team-name'>Nombre</Form.Label>
                        <Form.Control
                            name='team-name'
                            id="team-name"
                            required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='team-sport'>Deporte</Form.Label>
                        <Select
                            name='team-sport'
                            id='team-sport'
                            options={deportes}
                            required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='team-members'>Miembros</Form.Label>
                        <Select
                            options={users}
                            id='team-members'
                            name='team-members'
                            isMulti />
                    </Form.Group>
                </div>
                <div className={stylesheet['CreateTeamModal-form_footer']}>
                    <Button type="submit" disabled>
                        Actualizar
                    </Button>
                    <SecondaryButton
                        type='button'
                        onClick={handleClose}>
                        Cerrar
                    </SecondaryButton>
                </div>
            </Form>
        </div>
    )
}

export default UpdateTeamModal