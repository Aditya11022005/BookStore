import Footer from '@/components/Application/Website/Footer'
import Header from '@/components/Application/Website/Header'
import React from 'react'

const layout = ({ children }) => {
  return (
   
    <div>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default layout