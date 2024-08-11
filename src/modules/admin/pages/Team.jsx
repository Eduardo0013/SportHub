import { useState } from "react"
import useModal from "@Modules/core/hooks/useModal"
import ListView from "@Modules/core/components/listview/ListView"
import Button from "@Modules/core/components/button/Button"
import ButtonLink from "@Modules/core/components/button-link/ButtonLink"
import CreateTeamModal from '../components/create-team-modal/CreateTeamModal'
import { EQUIPOS } from "../../shared/config/web-services"
import useFetch from "@Modules/core/hooks/useFetch"
import { v4 } from "uuid"

const Team = () => {
    const { isActive, handleOpen, handleClose } = useModal()
    const [team, setTeam] = useState(null)
    const { loading, error, value } = useFetch(EQUIPOS)

    const handleClickButtonLink = () => {
        setTeam({
            nombre: 'Futbol',
        })
        handleOpen()
    }

    return (
        <div>
            <ListView>
                <ListView.Header>
                    Equipos
                    <Button
                        onClick={handleOpen}
                        className='text-sm'>Crear</Button>
                </ListView.Header>
                {value?.equipos?.map(({nombre,createdAt}) => (
                    <ListView.Row>
                        <ListView.Details
                            title={nombre}
                            subtitle={createdAt} />
                        <ListView.ItemsGroup>
                            <ButtonLink onClick={handleClickButtonLink}>
                                Edit
                            </ButtonLink>
                        </ListView.ItemsGroup>
                    </ListView.Row>
                ))}
            </ListView>
            {isActive && <CreateTeamModal handleClose={handleClose} />}
        </div>
    )
}

export default Team