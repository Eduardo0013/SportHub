import Select from "react-select"
import useFetch from '@Modules/core/hooks/useFetch'
import { useEffect, useRef, useState } from "react"
import Form from "@Modules/core/components/form/Form"
import { put } from '@Modules/core/wrappers/http'
import stylesheet from './user-modal.module.css'
import errorMapper from '@Modules/shared/utils/ErrorMapper'
import AlertFactory from '@Modules/core/components/alert/AlertFactory'
import Button from "@Modules/core/components/button/Button"
import { USERS_STORE, ROLES } from "@Modules/shared/config/web-services"
import SecondaryButton from "@Modules/core/components/button/SecondaryButton"
import formJsonConverter from '@Modules/shared/utils/FormJsonConverter'

const UpdateUserModal = ({ handleClose,user }) => {
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
        const formData = new FormData($form)
        formData.append('rol', rolRef.current.getValue()[0].value)
        const body = formJsonConverter(formData)
        const response = await put(USERS_STORE, JSON.stringify(body), localStorage.getItem('token'))
        const json = await response.json()
        if (!response.ok) {
            const errors = errorMapper(json.errors)
            setAlert({
                type: 'error',
                message: errors,
                isVisible: true
            })
            return
        }
        setAlert({
            type: 'success',
            message: [json.message],
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
                {alert.isVisible && <AlertFactory type={alert.type}>{alert.message}</AlertFactory>}
                <div className={stylesheet['CreateUserModal-form_body']}>
                    <input type="hidden" value={user.id} name="id"/>
                    <Form.Group>
                        <Form.Label htmlFor='user-name'>Nombre</Form.Label>
                        <Form.Control id="user-name" name="nombre" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-apellido-paterno'>Apellido Paterno</Form.Label>
                        <Form.Control id="user-apellido-paterno" name="apellido_pat" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-apellido-materno'>Apellido Materno</Form.Label>
                        <Form.Control id="user-apellido-materno" name="apellido_mat" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-rol'>Rol</Form.Label>
                        <Select
                            id='user-rol'
                            name='rol'
                            options={roles}
                            ref={rolRef} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-email'>Email</Form.Label>
                        <Form.Control type="email" id="user-email" name="email" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-tel'>Número telefónico</Form.Label>
                        <Form.Control id="user-tel" name='numero_tel' required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-password'>Contraseña</Form.Label>
                        <Form.Control
                            id="user-password"
                            name="password"
                            type="password"
                            placeholder='12345a'
                            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$"
                            required />
                    </Form.Group>
                </div>
                <div className={stylesheet['CreateUserModal-form_footer']}>
                    <Button type="submit">
                        Actualizar
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

export default UpdateUserModal