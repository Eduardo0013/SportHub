import stylesheet from './create-team-modal.module.css'
import Form from '@Modules/core/components/form/Form'
import Button from '@Modules/core/components/button/Button'
import SecondaryButton from '@Modules/core/components/button/SecondaryButton'
import ComboBox from '@Modules/core/components/form/ComboBox'

const CreateTeamModal = ({ team, handleClose }) => {
    return (
        <div className={stylesheet.CreateTeamModal}>
            <Form
                className={stylesheet['CreateTeamModal-form']}
                onSubmit={(ev) => { ev.preventDefault() }}>
                <div className={stylesheet['CreateTeamModal-form_header']}>
                    Editar
                </div>
                <div className={stylesheet['CreateTeamModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='team-name'>Nombre</Form.Label>
                        <Form.Control id="team-name" value={team?.nombre} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='team-sport'>Deporte</Form.Label>
                        <ComboBox id='team-sport'>
                            <ComboBox.Item>Futbol</ComboBox.Item>
                            <ComboBox.Item>Backet Ball</ComboBox.Item>
                        </ComboBox>
                    </Form.Group>
                    Invitar Miembros
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