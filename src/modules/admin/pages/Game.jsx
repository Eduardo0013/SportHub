import { useState } from "react"
import useModal from "../../core/hooks/useModal"
import ListView from "../../core/components/listview/ListView"
import Button from "../../core/components/button/Button"
import ButtonLink from "../../core/components/button-link/ButtonLink"
import CreateGameModal from "../components/create-game-modal/CreateGameModal"
import useFetch from "@Modules/core/hooks/useFetch"
import { PARTIDOS } from "@Modules/shared/config/web-services"
import { v4 } from "uuid"

const Game = () => {
    const { isActive, handleOpen, handleClose } = useModal()
    const [sport, setSport] = useState(null)
    const { loading, value, error } = useFetch(PARTIDOS)

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
                    Partidos
                    <Button
                        onClick={handleOpen}
                        className='text-sm'>Crear</Button>
                </ListView.Header>
                {value?.partidos && value?.partidos?.map(({ EquipoUno, EquipoDos, createdAt, status, Resultados }) => (
                    <ListView.Row key={v4()}>
                        <ListView.Details
                            title={`${EquipoUno?.nombre} vs ${EquipoDos?.nombre}`}
                            subtitle={`Creacion: ${createdAt}`} />
                        <ListView.ItemsGroup>
                            <div>
                                {`${Resultados[0]?.puntaje ?? 0} - ${Resultados[1]?.puntaje ?? 0}`}
                            </div>
                            <div
                                className="p-2 text-xs rounded-full border border-green-500 text-green-500 font-semibold">
                                {status}
                            </div>
                            <ButtonLink onClick={handleClickButtonLink}>
                                Edit
                            </ButtonLink>
                        </ListView.ItemsGroup>
                    </ListView.Row>
                ))}
            </ListView>
            {isActive && <CreateGameModal handleClose={handleClose} />}
        </div>
    )
}

export default Game