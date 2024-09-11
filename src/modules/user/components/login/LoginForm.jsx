import Form from '@Modules/core/components/form/Form'
import Button from '../../../core/components/button/Button'
import ButtonLink from '../../../core/components/button-link/ButtonLink'
import { useState } from 'react'
import { LOGIN } from '@Modules/shared/config/web-services'
import AlertFactory from '@Modules/core/components/alert/AlertFactory'
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
        <div className='flex items-center justify-center flex-col gap-2 grow h-full'>
            <div className='bg-black p-2 font-bold rounded-md text-center w-24 h-24 text-3xl'>
                <div className='text-white'>Sport</div>
                <div className='bg-orange-400 rounded-sm'>Hub</div>
            </div>
            <Form className="bg-white sm:w-10/12 md:w-6/12 lg:w-3/12 gap-5" onSubmit={handleSubmit}>
                <h3 className='text-2xl font-bold text-center py-2'>Inicia sesión en tu cuenta</h3>
                <Form.Group>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control id="email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" id="password"/>
                </Form.Group>
                <Button>Entrar</Button>
            </Form>
            <div className='flex gap-2 text-base'>
                <p className='text-gray-600'>No tienes cuenta? </p>
                <ButtonLink>Crea una</ButtonLink>
            </div>
            {alert?.isVisible && <AlertFactory type={alert?.type}>
                <p>
                    Credenciales incorrectas
                </p>
            </AlertFactory>}
        </div>
    )
}

export default LoginForm