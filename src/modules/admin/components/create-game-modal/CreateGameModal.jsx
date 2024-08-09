import Button from "@Modules/core/components/button/Button"
import Form from "@Modules/core/components/form/Form"
import stylesheet from './create-game-modal.module.css'
import SecondaryButton from "@Modules/core/components/button/SecondaryButton"
import TeamComboBoxDetails from "../team-combobox-details/TeamComboBoxDetails"

const CreateGameModal = ({ game, handleClose }) => {

    return (
        <div className={stylesheet.CreateGameModal}>
            <Form
                className={stylesheet['CreateGameModal-form']}
                onSubmit={(ev) => { ev.preventDefault() }}>
                <div className={stylesheet['CreateGameModal-form_header']}>
                    Editar
                </div>
                <div className={stylesheet['CreateGameModal-form_body']}>
                    <Form.Group>
                        <Form.Label htmlFor='game-team-one'>Equipo 1</Form.Label>
                        <TeamComboBoxDetails value='Barcelona FC' id='game-team-one'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='game-team-two'>Equipo 2</Form.Label>
                        <TeamComboBoxDetails id='game-team-two' value='RealMadrid' />
                    </Form.Group>
                </div>
                <div className={stylesheet['CreateGameModal-form_footer']}>
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

export default CreateGameModal