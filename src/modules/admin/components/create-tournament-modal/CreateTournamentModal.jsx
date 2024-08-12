import { v4 } from "uuid"
import { EQUIPOS } from '@Modules/shared/config/web-services'
import Button from "@Modules/core/components/button/Button"
import Form from "@Modules/core/components/form/Form"
import stylesheet from './create-tournament-modal.module.css'
import SecondaryButton from "@Modules/core/components/button/SecondaryButton"
import ComboBox from '@Modules/core/components/form/ComboBox'
import SportComboBoxDetails from '../sport-combox-details/SportComboBoxDetails'
import Slider from '@Modules/core/components/form/Slider'
import useFetch from '@Modules/core/hooks/useFetch'
import Bubble from '@Modules/core/components/bubble/Bubble'
import { useState } from "react"

const CreateTournamentModal = ({ tournament, handleClose }) => {
    const { loading, value, error } = useFetch(EQUIPOS)
    const [miembros, setMiembros] = useState([])

    return (
        <div className={stylesheet.CreateTournamentModal}>
            <Form
                className={stylesheet['CreateTournamentModal-form']}
                onSubmit={(ev) => { ev.preventDefault() }}>
                <div className={stylesheet['CreateTournamentModal-form_header']}>
                    Editar
                </div>
                <div className={stylesheet['CreateTournamentModal-form_body']}>
                    <div className={stylesheet['CreateTournamentModal-form_row']}>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-name'>Nombre</Form.Label>
                            <Form.Control id="tournament-name" value={tournament?.nombre} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-description'>Descripción</Form.Label>
                            <Form.Control id="tournament-description" value={tournament?.descripcion} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='Tournament-location'>Ubicación</Form.Label>
                            <Form.Control id="Tournament-location" value={tournament?.nombre} />
                        </Form.Group>
                    </div>
                    <div className={stylesheet['CreateTournamentModal-form_row']}>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-date-init'>Inicio</Form.Label>
                            <Form.Control id="tournament-date-init" type="date" value={tournament?.nombre} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-date-end'>Finalización</Form.Label>
                            <Form.Control id="tournament-date-end" type="date" value={tournament?.descripcion} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-date-end'>Deporte</Form.Label>
                            <SportComboBoxDetails />
                        </Form.Group>
                    </div>
                    <div className={stylesheet['CreateTournamentModal-form_row']}>
                        <Form.Group>
                            <Form.Label htmlFor='tournament-private'>Torneo Privado</Form.Label>
                            <Slider />
                        </Form.Group>
                    </div>
                    <Form.Group>
                        <Form.Label htmlFor='tournament-members'>Miembros</Form.Label>
                        <ComboBox id='tournament-members'>
                            {value?.equipos?.map(({ nombre, id }) => (
                                <ComboBox.Item
                                    key={v4()}
                                    data-id={id}
                                    data-name={nombre}>
                                    {nombre}
                                </ComboBox.Item>
                            ))}
                        </ComboBox>
                    </Form.Group>
                    <div className={stylesheet['CreateTournamentModal-form_row']}>
                        <Bubble>
                            {miembros?.map(({ nombre }) => (
                                <Bubble.Item key={v4()}>{nombre}</Bubble.Item>
                            ))}
                        </Bubble>
                    </div>
                </div>
                <div className={stylesheet['CreateTournamentModal-form_footer']}>
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

export default CreateTournamentModal