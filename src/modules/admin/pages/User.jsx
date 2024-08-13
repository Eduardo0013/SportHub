import { useEffect, useState } from 'react'
import Button from '@Modules/core/components/button/Button'
import ListView from '@Modules/core/components/listview/ListView'
import ButtonLink from '@Modules/core/components/button-link/ButtonLink'
import useModal from '@Modules/core/hooks/useModal'
import CreateUser from '../components/create-user-modal/CreateUserModal'
import useFetch from '@Modules/core/hooks/useFetch'
import { USERS } from "@Modules/shared/config/web-services"
import { v4 } from 'uuid'

const User = () => {
    const { isActive, handleOpen, handleClose } = useModal()
    const [user, setUser] = useState(null)
    const [ loading, value, error ] = useFetch(USERS)

    const handleClickButtonLink = (user) => {
        return () => {
            console.log(user)
            setUser({
                nombre: user.nombre,
                apellido_pat: user.apellido_pat,
                apellido_mat: user.apellido_mat,
                password: '',
                email: user.email,
                rol: user.rol
            })
            handleOpen()
        }
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
                {value && value?.users.map((user) => (
                    <ListView.Row key={v4()}>
                        <ListView.Details
                            title={`${user?.nombre} ${user?.apellido_pat} ${user?.apellido_mat} / ${user?.email}`}
                            subtitle={user?.rol ?? 'Usuario'} />
                        <ListView.ItemsGroup>
                            <ButtonLink onClick={handleClickButtonLink(user)}>Edit</ButtonLink>
                        </ListView.ItemsGroup>
                    </ListView.Row>
                ))}
            </ListView>
            {isActive && <CreateUser user={user} handleClose={handleClose} />}
        </div>
    )
}

export default User