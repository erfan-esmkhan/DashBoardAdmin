import React from 'react'
import './topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className="topbar">
    <div className="topWrapper">

    <div className="topLeft">
        <span className='logo'>ERFAN CMS❤️</span>
    </div>

    <div className="topRight">

    <div className="TopIconCountainer">
     <NotificationsIcon/>
     <span className='topIconBadge'>2</span>
    </div>

    <div className="TopIconCountainer">
     <LanguageIcon/>
     <span className='topIconBadge'>2</span>
    </div>

    <div className="TopIconCountainer">
     <SettingsIcon/>
    </div>
    <img src="images/image1.png" alt='' className='topAvatar' />
    </div>


    </div>
    </div>
  )
}
