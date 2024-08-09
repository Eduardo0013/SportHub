import Button from '../../core/components/button/Button'
import ListView from '../../core/components/listview/ListView'
import ButtonLink from '../../core/components/button-link/ButtonLink'
import CreateUser from '../components/create-user-modal/CreateUserModal'
import useModal from '../../core/hooks/useModal'
import { useState } from 'react'

const User = () => {
    const { isActive, handleOpen, handleClose } = useModal()
    const [user, setUser] = useState(null)

    const handleClickButtonLink = () => {
        setUser({
            nombre: 'Eduardo',
            apellidoPat: 'Cazabal',
            apellidoMat: 'Salas',
            password: '12345',
            email: 'eduardocazabalsalas@gmail.com',
            rol: 'administrador'
        })
        handleOpen()
    }

    return (
        <div>
            <ListView>
                <ListView.Header>
                    Usuarios
                    <Button
                        onClick={handleOpen}
                        className='text-sm'>Crear</Button>
                </ListView.Header>
                <ListView.Row>
                    <ListView.Details
                        title='Eduardo Cazabal Salas / eduardocazabalsalas@gmail.com'
                        subtitle='administrador' />
                    <ListView.ItemsGroup>
                        <ButtonLink onClick={handleClickButtonLink}>Edit</ButtonLink>
                    </ListView.ItemsGroup>
                </ListView.Row>
            </ListView>
            {isActive && <CreateUser user={user} handleClose={handleClose} />}
        </div>
    )
}

export default User