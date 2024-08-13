import { useEffect, useState } from "react"
import useModal from "../../core/hooks/useModal"
import ListView from "../../core/components/listview/ListView"
import Button from "../../core/components/button/Button"
import ButtonLink from "../../core/components/button-link/ButtonLink"
import CreateSportModal from "../components/create-sport-modal/CreateSportModal"
import { DEPORTES } from "../../shared/config/web-services"
import useFetch from "@Modules/core/hooks/useFetch"
import { v4 } from "uuid"

const Sport = () => {
    const { isActive, handleOpen, handleClose } = useModal()
    const [sport, setSport] = useState(null)
    const [ loading, value, error ] = useFetch(DEPORTES)

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
                {value?.deportes && value?.deportes?.map(deporte => (
                    <ListView.Row key={v4()}>
                        <ListView.Details
                            title={deporte.nombre}
                            subtitle={`Creacion: ${deporte.createdAt}`} />
                        <ButtonLink onClick={handleClickButtonLink}>Edit</ButtonLink>
                    </ListView.Row>
                ))}
            </ListView>
            {isActive && <CreateSportModal handleClose={handleClose} />}
        </div>
    )
}

export default Sport