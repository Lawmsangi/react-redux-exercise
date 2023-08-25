import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/users/usersSlice';


function Users() {

    const dispatch = useDispatch()
    const { users, isLoading, error } = useSelector((store) => store.users);

    useEffect(() => {
    dispatch(fetchUsers())
    }, [])


  return (
    <div>
      {isLoading && 'LOADING'}
      {error && 'ERROR'}
      {users.map(user => {
        return (<div>
          <p>{user.name.first}</p>
          <p>{user.name.last}</p>
        </div>
        )
      })}
    </div>
  )
}

export default Users