import React from 'react'
import WidgetSm from '../../component/widgetSm/widgetSm'
import './newUser.css'


export default function newUser() {

  let FormHandler = (event) => {
    event.preventDefault()
  }


  return (
    <div className='newuser'>
      <div className='newusercontainer'>
        <div className='userLeft'>
          <WidgetSm/>
        </div>
        <div className='userRight'>
          <form onSubmit={FormHandler}>
             <div className='nameContainer'>
             <input type='text' placeholder='FirstName' className='inputFormInDiv' />
             <input type='text' placeholder='LastName' className='inputFormInDiv' />
             </div>

            <label>Password</label>
            <input type='password'className='inputForm' />

            <label>Email</label>
            <input type='email'className='inputForm' />

            <label>Phone Number</label>
            <input type='number'className='inputForm' />

            <button className='submitBtn'>Add User</button>
          </form>
        </div>
      </div>
    </div>
  )
}
