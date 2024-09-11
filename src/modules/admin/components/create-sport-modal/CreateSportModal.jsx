import Button from "../../../core/components/button/Button"
import Form from "../../../core/components/form/Form"
import stylesheet from './create-sport-modal.module.css'
import SecondaryButton from "../../../core/components/button/SecondaryButton"
import { DEPORTES } from "@Modules/shared/config/web-services"
import { useState } from "react"
import AlertFactory from "../../../core/components/alert/AlertFactory"

const CreateSportModal = ({ handleClose }) => {
    const [alert, setAlert] = useState({ isActive: false, type: 'error' })

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        try {
            const $form = ev.target
            const nombre = $form.querySelector('#sport-name').value
            if(!nombre || nombre.length === 0){
                setAlert({
                    isActive: true,
                    message: 'Debes escribir un nombre',
                    type: 'error'
                })
                return
            }
            const payload = { nombre }
            const token = localStorage.getItem('token')
            const response = await fetch(DEPORTES, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : token
                },
                body: JSON.stringify(payload)
            })
            const json = await response.json()
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
                message: 'Error, contacta al administrador',
                type: 'error'
            })
        }
    }

    return (
        <div className={stylesheet.CreateSportModal}>
            <Form
                className={stylesheet['CreateSportModal-form']}
                onSubmit={handleSubmit}>
                <div className={stylesheet['CreateSportModal-form_header']}>
                    Editar
                </div>
                {alert.isActive && <AlertFactory type={alert.type}>
                    {alert?.message}
                </AlertFactory>}
                <div className={stylesheet['CreateSportModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='sport-name'>Nombre</Form.Label>
                        <Form.Control id="sport-name" />
                    </Form.Group>
                </div>
                <div className={stylesheet['CreateSportModal-form_footer']}>
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

export default CreateSportModal