import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'

export default function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        
    }
  return (
    <div>LogoutBtn</div>
  )
}
