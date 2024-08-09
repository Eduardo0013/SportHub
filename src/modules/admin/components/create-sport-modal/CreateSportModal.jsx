import Button from "../../../core/components/button/Button"
import Form from "../../../core/components/form/Form"
import stylesheet from './create-sport-modal.module.css'
import SecondaryButton from "../../../core/components/button/SecondaryButton"

const CreateSportModal = ({ sport, handleClose }) => {

    return (
        <div className={stylesheet.CreateSportModal}>
            <Form
                className={stylesheet['CreateSportModal-form']}
                onSubmit={(ev) => { ev.preventDefault() }}>
                <div className={stylesheet['CreateSportModal-form_header']}>
                    Editar
                </div>
                <div className={stylesheet['CreateSportModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='sport-name'>Nombre</Form.Label>
                        <Form.Control id="sport-name" value={sport?.nombre} />
                    </Form.Group>
                </div>
                <div className={stylesheet['CreateSportModal-form_footer']}>
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

export default CreateSportModal