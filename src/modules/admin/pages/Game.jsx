import { useState } from "react"
import useModal from "../../core/hooks/useModal"
import ListView from "../../core/components/listview/ListView"
import Button from "../../core/components/button/Button"
import ButtonLink from "../../core/components/button-link/ButtonLink"
import CreateGameModal from "../components/create-game-modal/CreateGameModal"

const Game = () => {
    const { isActive, handleOpen, handleClose } = useModal()
    const [sport, setSport] = useState(null)

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
                <ListView.Row>
                    <ListView.Details
                        title='Real Madrid Vs Barcelona FC'
                        subtitle='Creación: 2022-08-01' />
                    <ListView.ItemsGroup>
                        <div>
                            1 - 0
                        </div>
                        <div
                            className="p-2 text-xs rounded-full border border-green-500 text-green-500 font-semibold">
                            En-Juego
                        </div>
                        <ButtonLink onClick={handleClickButtonLink}>
                            Edit
                        </ButtonLink>
                    </ListView.ItemsGroup>
                </ListView.Row>
            </ListView>
            {isActive && <CreateGameModal handleClose={handleClose} />}
        </div>
    )
}

export default Game