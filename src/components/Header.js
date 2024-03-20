import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <FaAlignJustify className='icon' onClick={OpenSidebar}/>
        </div>

    </header>
  )
}

export default Header