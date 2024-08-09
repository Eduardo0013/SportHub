import Button from "../../../core/components/button/Button"
import Form from "../../../core/components/form/Form"
import stylesheet from './create-user-modal.module.css'
import SecondaryButton from "../../../core/components/button/SecondaryButton"
import { v4 } from 'uuid'

const CreateUserModal = ({ user, handleClose }) => {

    return (
        <div className={stylesheet.CreateUserModal}>
            <Form
                className={stylesheet['CreateUserModal-form']}
                onSubmit={(ev) => { ev.preventDefault() }}>
                <div className={stylesheet['CreateUserModal-form_header']}>
                    Editar
                </div>
                <div className={stylesheet['CreateUserModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='user-name'>Nombre</Form.Label>
                        <Form.Control id="user-name" value={user?.nombre} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-apellido-paterno'>Apellido Paterno</Form.Label>
                        <Form.Control id="user-apellido-paterno" value={user?.apellidoPat} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-apellido-materno'>Apellido Materno</Form.Label>
                        <Form.Control id="user-apellido-materno" value={user?.apellidoMat} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-pemail'>Email</Form.Label>
                        <Form.Control id="user-email" value={user?.email} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-password'>Contraseña</Form.Label>
                        <Form.Control id="user-password" type="password" value={user?.password} required />
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