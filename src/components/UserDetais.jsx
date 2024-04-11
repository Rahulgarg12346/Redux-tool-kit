import React from 'react'
import DeleteAllUser from './DeleteAllUser'

const UserDetais = () => {
  return (
    <div className='content'>
        <div className='admin-table'>
            <div className="admin-subtitle">
                list of user Details
            </div>
            <button className='btn add-btn'>Add new users</button>
        </div>
        <ul>
            {/* <li>hi</li>
            <li>hyy</li> */}
        </ul>
        <hr />
        <DeleteAllUser/>


    </div>
  )
}

export default UserDetais