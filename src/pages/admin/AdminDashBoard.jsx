import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminDashBoard() {
  return (
    <div>
      admin
      <Outlet />
    </div>
  )
}
