import Button from "@Modules/core/components/button/Button"
import Form from "@Modules/core/components/form/Form"
import stylesheet from './create-user-modal.module.css'
import SecondaryButton from "@Modules/core/components/button/SecondaryButton"

const CreateUserModal = ({ user, handleClose, endpoint }) => {
    
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
                        <Form.Control id="user-apellido-paterno" value={user?.apellido_pat} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-apellido-materno'>Apellido Materno</Form.Label>
                        <Form.Control id="user-apellido-materno" value={user?.apellido_mat} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-pemail'>Email</Form.Label>
                        <Form.Control id="user-email" value={user?.email} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='user-password'>Contraseña</Form.Label>
                        <Form.Control
                            id="user-password"
                            type="password"
                            value={user?.password}
                            placeholder='Nueva contraseña'
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