import React from 'react'
import { Menu, Button, Avatar,Typography } from 'antd'
import icons from '../Images/2cd04d7b4cbd47b0809d20b1b1bc5f76.png'
import { HomeOutlined, MoneyCollectOutlined,FundOutlined,BulbOutlined} from '@ant-design/icons'
import '../CssFiles/Navbar.css'
import { Link } from 'react-router-dom'
import '../App.css';

function Navbar() {
  return (
    <div className='navbar'>
     <div className="navbar__logo">
     <Avatar src={icons} size="large"  />
      <Typography.Title level={2} className='logo'> 
        <Link to='/' className='nav__crypto'>Crypto-App</Link>
      </Typography.Title>
      </div>
      <Menu theme='dark'>
      <Menu.Item icon={<HomeOutlined/>}>
       <Link to='/' >Home</Link>
      </Menu.Item>
      <Menu.Item icon={<MoneyCollectOutlined/>}>
       <Link to='/exchanges' >Exchanges</Link>
      </Menu.Item>
      <Menu.Item icon={<FundOutlined/>}>
       <Link to='/cryptocurriencies' >CryptoCurriencies</Link>
      </Menu.Item>
      <Menu.Item icon={<BulbOutlined/>}>
       <Link to='/news' >News</Link>
      </Menu.Item>
      </Menu>
     
     
      
    </div>
  )
}
 
export default Navbar
