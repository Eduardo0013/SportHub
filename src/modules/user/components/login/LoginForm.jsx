import Form from '@Modules/core/components/form/Form'
import Button from '../../../core/components/button/Button'
import ButtonLink from '../../../core/components/button-link/ButtonLink'
import { useState } from 'react'
import { LOGIN } from '@Modules/shared/config/web-services'
import Alert from '@Modules/core/components/alert/Alert'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [alert,setAlert] = useState({ isVisible: false, type: 'error'})
    const navigate = useNavigate()

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        const $form = ev.target
        const email = $form.querySelector('#email').value
        const password = $form.querySelector('#password').value
        const body = { email, password }
        const response = await fetch(LOGIN,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : '*/*'
            },
            body: JSON.stringify(body)
        })
        const json = await response.json()
        if(!response.ok || !response.status === 401){
            setAlert({
                ...alert,
                isVisible: true,
                message : json.message
            })
            return
        }
        localStorage.setItem('user',JSON.stringify(json.user))
        localStorage.setItem('token',json.token)
        navigate('/admin/dashboard')
    }

    return (
        <div className='flex items-center flex-col gap-2'>
            {alert?.isVisible && <Alert type={alert?.type}>
                <p>
                    Credenciales incorrectas
                </p>
            </Alert>}
            <Form className="border rounded-md bg-white" onSubmit={handleSubmit}>
                <h3 className='text-2xl font-semibold text-center py-2'>Iniciar Sesión</h3>
                <Form.Group>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control id="email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" id="password"/>
                </Form.Group>
                <div className='flex gap-3 justify-end'>
                    <ButtonLink>Crear Cuenta</ButtonLink>
                    <Button>Entrar</Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm