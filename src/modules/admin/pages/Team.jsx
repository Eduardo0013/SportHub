import useModal from "@Modules/core/hooks/useModal"
import ListView from "@Modules/core/components/listview/ListView"
import Button from "@Modules/core/components/button/Button"
import ButtonLink from "@Modules/core/components/button-link/ButtonLink"
import CreateTeamModal from '../components/team-modal/CreateTeamModal'
import UpdateTeamModal from "../components/team-modal/UpdateTeamModal"
import { EQUIPOS } from "../../shared/config/web-services"
import useFetch from "@Modules/core/hooks/useFetch"
import { v4 } from "uuid"

const Team = () => {
    const createModal = useModal()
    const updateModal = useModal()
    const { value } = useFetch(EQUIPOS)

    const handleClickButtonLink = (ev) => {
        ev.preventDefault()
        updateModal.handleOpen()
    }

    return (
        <div>
            <ListView>
                <ListView.Header>
                    Equipos
                    <Button
                        onClick={createModal.handleOpen}
                        className='text-sm'>Crear</Button>
                </ListView.Header>
                {value?.equipos?.map(({nombre,createdAt}) => (
                    <ListView.Row key={v4()}>
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
            {updateModal.isActive && <UpdateTeamModal handleClose={updateModal.handleClose} />}
            {createModal.isActive && <CreateTeamModal handleClose={createModal.handleClose} />}
        </div>
    )
}

export default Team