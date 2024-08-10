import { useState } from "react"
import useModal from "@Modules/core/hooks/useModal"
import ListView from "@Modules/core/components/listview/ListView"
import Button from "@Modules/core/components/button/Button"
import ButtonLink from "@Modules/core/components/button-link/ButtonLink"
import CreateTeamModal from '../components/create-team-modal/CreateTeamModal'

const Team = () => {
    const { isActive, handleOpen, handleClose } = useModal()
    const [team, setTeam] = useState(null)

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
                <ListView.Row>
                    <ListView.Details
                        title='Real Madrid'
                        subtitle='Creación: 2022-08-01' />
                    <ListView.ItemsGroup>
                        <ButtonLink onClick={handleClickButtonLink}>
                            Edit
                        </ButtonLink>
                    </ListView.ItemsGroup>
                </ListView.Row>
                <ListView.Row>
                    <ListView.Details
                        title='Barcelona FC'
                        subtitle='Creación: 2022-08-01' />
                    <ListView.ItemsGroup>
                        <ButtonLink onClick={handleClickButtonLink}>
                            Edit
                        </ButtonLink>
                    </ListView.ItemsGroup>
                </ListView.Row>
            </ListView>
            {isActive && <CreateTeamModal handleClose={handleClose}/>}
        </div>
    )
}

export default Team