import { useState,useRef,useEffect } from "react"
import useModal from "../../core/hooks/useModal"
import ListView from "../../core/components/listview/ListView"
import Button from "../../core/components/button/Button"
import ButtonLink from "../../core/components/button-link/ButtonLink"
import BASE_URL from "@Modules/shared/config/web-services"
import { v4 } from "uuid"
import io from 'socket.io-client'
import ShowVitalSignsModal from "../components/show-vital-signs-modal/ShowVitalSignsModal"

const Medical = () => {
    const { isActive, handleOpen, handleClose } = useModal()
    const [sport, setSport] = useState(null)
    const [state,setState]= useState([])
    const socketRef = useRef(io(BASE_URL))

    useEffect(() => {
        const socket = socketRef.current
        socket.emit('fetch-data')
        socket.on('take-data', (wearables) => {
            setState({ ...state, wearables })
        })
        socket.on('changed', (wearables) => {
            setState({ wearables })
        })
    }, [])

    const handleClickButtonLink = (ev) => {
        ev.stopPropagation()
        handleOpen()
    }

    const handleClickRow = (id) => {
        return () => {
            handleOpen()
        }
    }

    return (
        <div>
            <ListView>
                <ListView.Header>
                    Dispositivos
                    <Button
                        onClick={handleOpen}
                        className='text-sm'>Crear</Button>
                </ListView.Header>
                {state?.wearables && state?.wearables?.map(({ model, createdAt, status,id }) => (
                    <ListView.Row key={v4()} onClick={handleClickRow(id)}>
                        <ListView.Details
                            title={model}
                            subtitle={`Creacion: ${createdAt}`} />
                        <ListView.ItemsGroup>
                            <div
                                className={'p-2 text-xs rounded-full border ' + (status ? 'border-green-500 text-green-500 font-semibold' : 'border-red-500 text-red-500 font-semibold')}>
                                {status ? 'Online' : 'Offline'}
                            </div>
                            <ButtonLink onClick={handleClickButtonLink}>
                                Edit
                            </ButtonLink>
                        </ListView.ItemsGroup>
                    </ListView.Row>
                ))}
            </ListView>
            {isActive && <ShowVitalSignsModal/>}
        </div>
    )
}

export default Medical