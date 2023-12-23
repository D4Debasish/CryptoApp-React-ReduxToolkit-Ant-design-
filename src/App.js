
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Typography, Space, Layout } from 'antd';
import {Navbar, Homepage, Exchanges, Cryptocrr,News} from './Components';

function App() {
  return (
    <div className='app' >
        <div className="app_navbar">
        <Navbar />
        
        </div>

        <div className="app_main">
        <Layout>
          <div className="routes">
           <Routes>
              <Route path='/' element={<Homepage/>}/> 
                
              
              <Route path='/' element={<Exchanges/>}/>
              <Route path='/cryptocurriencies' element={<Cryptocrr/>}/> 
                
              
              <Route path='/news' element={<News/>} /> 
                
            
           
           </Routes>
          
          </div>
        
        </Layout>
        <div className="app_footer">
         <Typography.Title level ={5} className="app__foot" style={{color:'white', textAlign: 'center'}}>
          CryptoApp <br />
          All rights reserved 
          <br />
          Made by <span className="name">Debasish Das Biswas</span>
          <br />

          <Space>
          <Link to='/' >Home</Link>
          <Link to='/exchanges' >Exchanges</Link>
          <Link to='/news' >News</Link>
          
          </Space>
        </Typography.Title>

        </div>

        </div>

        
    
      
    </div>
  );
}

export default App;
