import Button from "@Modules/core/components/button/Button"
import Form from "@Modules/core/components/form/Form"
import stylesheet from './create-user-modal.module.css'
import SecondaryButton from "@Modules/core/components/button/SecondaryButton"
import { USERS_STORE, ROLES } from "@Modules/shared/config/web-services"
import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import useFetch from '@Modules/core/hooks/useFetch'
import Alert from '@Modules/core/components/alert/Alert'

const CreateUserModal = ({ user, handleClose, endpoint }) => {
    const [alert,setAlert] = useState({ isVisible : false, type: 'error' })
    const rolRef = useRef(null)
    const { loading, value } = useFetch(ROLES)
    const [roles, setRoles] = useState([])

    useEffect(() => {
        if (value) {
            const roles = value.roles.map(rol => {
                return {
                    label: rol.nombre,
                    value: rol.id
                }
            })
            setRoles(roles)
        }
    }, [loading])

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        const $form = ev.target
        const nombre = $form.querySelector('#user-name').value
        const apellido_pat = $form.querySelector('#user-apellido-paterno').value
        const apellido_mat = $form.querySelector('#user-apellido-materno').value
        const email = $form.querySelector('#user-email').value
        const password = $form.querySelector('#user-password').value
        const numeroTelefonico = $form.querySelector('#user-tel').value
        const rol = rolRef.current.getValue()[0].value
        const response = await fetch(USERS_STORE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization' : localStorage.getItem('token')
            },
            body: JSON.stringify({
                nombre,
                apellido_pat,
                apellido_mat,
                email,
                password,
                rol,
                numero_tel : numeroTelefonico
            })
        })
        const json = await response.json()
        console.log(json)
        if(response.status === 400){
            setAlert({
                type: 'error',
                message: JSON.stringify(json.errors ),
                isVisible: true
            })
            return  
        }
        if(!response.ok){
            setAlert({
                type: 'error',
                message: 'Se ha producido un error',
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
        <div className={stylesheet.CreateUserModal}>
            <Form
                className={stylesheet['CreateUserModal-form']}
                onSubmit={handleSubmit}>
                <div className={stylesheet['CreateUserModal-form_header']}>
                    Editar
                </div>
                {alert.isVisible && <Alert type={alert.type}>{alert.message}</Alert>}
                <div className={stylesheet['CreateUserModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='user-name'>Nombre</Form.Label>
                        <Form.Control id="user-name" value={user?.nombre} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-apellido-paterno'>Apellido Paterno</Form.Label>
                        <Form.Control id="user-apellido-paterno" value={user?.apellido_pat} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-apellido-materno'>Apellido Materno</Form.Label>
                        <Form.Control id="user-apellido-materno" value={user?.apellido_mat} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-rol'>Rol</Form.Label>
                        <Select id='user-rol'
                            options={roles}
                            ref={rolRef} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-email'>Email</Form.Label>
                        <Form.Control type="email" id="user-email" value={user?.email} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-tel'>Número telefónico</Form.Label>
                        <Form.Control id="user-tel" value={user?.numero_tel} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-password'>Contraseña</Form.Label>
                        <Form.Control
                            id="user-password"
                            type="password"
                            value={user?.password}
                            placeholder='12345a'
                            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$"
                            required />
                    </Form.Group>
                </div>
                <div className={stylesheet['CreateUserModal-form_footer']}>
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

export default CreateUserModal