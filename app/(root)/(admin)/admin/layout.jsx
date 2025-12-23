import AppSidebar from '@/components/Application/Admin/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

const layout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar/>
    <div>{children}</div>

    </SidebarProvider>
  )
}

export default layout