import { v4 } from 'uuid'
import { useState } from 'react'
import { USERS } from "@Modules/shared/config/web-services"
import Button from '@Modules/core/components/button/Button'
import ListView from '@Modules/core/components/listview/ListView'
import ButtonLink from '@Modules/core/components/button-link/ButtonLink'
import useModal from '@Modules/core/hooks/useModal'
import CreateUserModal from '../components/user-modal/CreateUserModal'
import useFetch from '@Modules/core/hooks/useFetch'
import UpdateUserModal from '../components/user-modal/UpdateUserModal'

const User = () => {
    const createUserState = useModal()
    const updateUserState = useModal()
    const [alert,setAlert] = useState({ isVisible : false, type: 'error' })
    const [user, setUser] = useState(null)
    const{ loading, value, error } = useFetch(USERS)

    const handleClickButtonLink = (user) => {
        return () => {
            delete user.password
            setUser(user)
            updateUserState.handleOpen()
        }
    }

    return (
        <div>
            <ListView>
                <ListView.Header>
                    Usuarios
                    <Button
                        onClick={createUserState.handleOpen}
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
            {updateUserState.isActive && <UpdateUserModal user={user} handleClose={updateUserState.handleClose}/>}
            {createUserState.isActive && <CreateUserModal handleClose={createUserState.handleClose} />}
        </div>
    )
}

export default User