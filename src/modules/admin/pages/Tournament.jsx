import { useState } from "react"
import useModal from "../../core/hooks/useModal"
import ListView from "../../core/components/listview/ListView"
import Button from "../../core/components/button/Button"
import ButtonLink from "../../core/components/button-link/ButtonLink"
import CreateTournamentModal from "../components/create-tournament-modal/CreateTournamentModal"

const Tournament = () => {
    const { isActive, handleOpen, handleClose } = useModal()
    const [tournament, setTournament] = useState(null)

    const handleClickButtonLink = () => {
        setTournament({
            nombre: 'Futbol',
        })
        handleOpen()
    }

    return (
        <div>
            <ListView>
                <ListView.Header>
                    Torneos
                    <Button
                        onClick={handleOpen}
                        className='text-sm'>Crear</Button>
                </ListView.Header>
                <ListView.Row>
                    <ListView.Details
                        title='EuroCopa / 1'
                        subtitle='Creación: 2022-08-01' />
                    <ButtonLink onClick={handleClickButtonLink}>Edit</ButtonLink>
                </ListView.Row>
            </ListView>
            {isActive && <CreateTournamentModal handleClose={handleClose} />}
        </div>
    )
}

export default Tournament