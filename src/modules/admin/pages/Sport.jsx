import { useState } from "react"
import useModal from "../../core/hooks/useModal"
import ListView from "../../core/components/listview/ListView"
import Button from "../../core/components/button/Button"
import ButtonLink from "../../core/components/button-link/ButtonLink"
import CreateSportModal from "../components/create-sport-modal/CreateSportModal"

const Sport = () => {
    const { isActive,handleOpen,handleClose } = useModal()
    const [sport,setSport] = useState(null)

    const handleClickButtonLink = () => {
        setSport({
            nombre: 'Futbol',
        })
        handleOpen()
    }

    return (
        <div>
            <ListView>
                <ListView.Header>
                    Deportes
                    <Button 
                    onClick={handleOpen}
                    className='text-sm'>Crear</Button>
                </ListView.Header>
                <ListView.Row>
                    <ListView.Details
                        title='Futbol / 1'
                        subtitle='Creación: 2022-08-01' />
                    <ButtonLink onClick={handleClickButtonLink}>Edit</ButtonLink>
                </ListView.Row>
            </ListView>
            {isActive && <CreateSportModal handleClose={handleClose}/>}
        </div>
    )
}

export default Sport