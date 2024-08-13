import { useState } from "react"
import { TORNEOS } from "@Modules/shared/config/web-services"
import { v4 } from "uuid"
import useModal from "../../core/hooks/useModal"
import ListView from "../../core/components/listview/ListView"
import Button from "../../core/components/button/Button"
import ButtonLink from "../../core/components/button-link/ButtonLink"
import CreateTournamentModal from "../components/create-tournament-modal/CreateTournamentModal"
import useFetch from "@Modules/core/hooks/useFetch"

const Tournament = () => {
    const { isActive, handleOpen, handleClose } = useModal()
    const [tournament, setTournament] = useState(null)
    const [ loading, value, error ] = useFetch(TORNEOS)

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
                {value?.torneos.map(torneo => (
                    <ListView.Row key={v4()}>
                        <ListView.Details
                            title={torneo.nombre}
                            subtitle={`Creación: ${torneo.createdAt}`} />
                        <ButtonLink onClick={handleClickButtonLink}>Edit</ButtonLink>
                    </ListView.Row>
                ))}
            </ListView>
            {isActive && <CreateTournamentModal handleClose={handleClose} />}
        </div>
    )
}

export default Tournament