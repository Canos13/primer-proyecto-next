import React from 'react'
import Router from 'next/router'

const Users = ({users}) => {
  return (
    <ul className='list-group'>
        {
            users.map( (data) => {
                    return (
                        <li 
                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center' 
                            key={data.id}
                            onClick={ e => Router.push('user/[id]', `user/${data.id}`)}
                        >
                            <div>
                                <p className='h4'> {data.first_name +" "+ data.last_name} </p>
                                <p > Correo: {data.email} </p>
                            </div>
                            <img 
                                src={data.avatar} 
                                style={{borderRadius:'50%'}}
                                alt={data.first_name +" "+ data.last_name} />
                        </li>
                    )
                }
            )
        }
    </ul>
  )
}

export default Users