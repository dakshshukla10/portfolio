import React,{useEffect,useState} from 'react'; {/*This is like getting your roads for your Lego city. It's going to allow us to move between different parts of your website.*/}
import {Link} from 'react-router-dom';

import{styles} from '../styles';
import{navLinks} from '../constants';
import{logo,menu,close} from '../assets';

const Navbar = () => {
  const [active,setActive] = useState('');
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={()=> {
          setActive("");
          window.scrollTo(0,0);
        }}>
          <img src={logo} alt="lo go" className="w-9 h-9 object-contain"/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar