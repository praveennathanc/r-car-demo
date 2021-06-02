import React,{useState,useEffect,useRef} from 'react';
import{HashLink as Link} from 'react-router-hash-link'
import {HiOutlineMenuAlt3,HiX} from 'react-icons/hi';
import {AiOutlineTrademark} from 'react-icons/ai'
import audio from '../component/Images/carlock.mp3';
import carAnim from '../component/Images/caranim.mp4';
import sonycar from '../component/Images/sonycar.mp4';
import sonycar2 from '../component/Images/sonycar2.mp4';
import bluecar from '../component/Images/bluecar.png';
import {CgPlayButtonO,CgPlayPauseO} from 'react-icons/cg';
import {BiChevronDown} from 'react-icons/bi';
import{TiSocialTwitterCircular,TiSocialFacebookCircular,TiSocialYoutubeCircular,TiSocialInstagramCircular} from 'react-icons/ti';
import navCar from '..//component/Images/smartcar.mp4';
import automative from '../component/Images/automative.mp4'


function Home() {

    const [menuIcon,setMenuIcon] = useState(true)
    const[playBtn,setPlayBtn] =useState(true)
    const[navItems,setNavItems] = useState(true)
    const[bgChange,setBgChange] = useState(true)
    const myVideo = useRef(null)
    const myVideo1 = useRef(null)
    const [cursorX,setCursorX] =useState()
    const [cursorY,setCursorY] =useState()

    window.addEventListener('mousemove',(e)=>
    {
        setCursorX(e.pageX)
        setCursorY(e.pa)
    })
    const menuBarHandler=()=>
    {
        setMenuIcon(!menuIcon)
        setNavItems(!navItems)
    }
    
    useEffect(()=>
    {
        if(window.innerWidth<=800)
        {
            setNavItems(false)
        }
    },[])
    const navBarHandler=()=>
    {
        if(window.innerWidth <= 800)
        {
            setNavItems(false)
            setMenuIcon(true)
        }
        else
        {
            setNavItems(true)
        }
    }
    const navbarScrollHandler=()=>
    {
        if(window.scrollY >= 100)
        {
         setBgChange(false)
        }
        else
        {
            setBgChange(true)
        }
    }
    window.addEventListener('resize' , navBarHandler)
    window.addEventListener('scroll' , navbarScrollHandler)


    const playBtnHandler=()=>
    {
        setPlayBtn(!playBtn)
       if(playBtn===true)
       {
           myVideo.current.play();
           myVideo1.current.play();
       }
       else
       {
           myVideo.current.pause();
           myVideo1.current.pause();
       } 
    }
    return (
        <>
            <div className="navbar" style={bgChange ?{backdropFilter:'blur(0px)'} :{backdropFilter:'blur(50px)'}}>
            <div className="nav-logo"><AiOutlineTrademark/></div>
            <div className="menu-icon" onClick={menuBarHandler}>
                {
                  menuIcon  ?<HiOutlineMenuAlt3/> :<HiX/>
                }
               
            </div>
            <div>
                {
                    navItems ?<nav>   
                    <li className="nav-item"><Link to="#home" smooth className="nav-link">HOME</Link></li>
                    <li className="nav-item"><Link to="#section6" smooth className="nav-link">DISCOVER</Link></li>
                    <li className="nav-item"><Link to="#" smooth className="nav-link">MODELS <BiChevronDown className="arrow"/> </Link>
                    <div className="dropdown-content">
      <Link to="#section2"  smooth>GHOST</Link>
      <Link to="#section3" smooth>DRAGON</Link>
      <Link to="#section4" smooth>ELECTRIC</Link>
    </div>
                    
                    </li>
                        <div className="signIn">
                        <li className="nav-item"><a href="https://react-icons.github.io/react-icons/search?q=play" className="nav-link" rel="noreferrer">LOGIN</a></li>
                         <li className="nav-item"><a href="https://react-icons.github.io/react-icons/search?q=play" className="nav-link" style={{color:'white'}} rel="noreferrer">SIGN IN</a></li>
                        </div>
                </nav>
                :null
                }
            </div>
            </div>
            

<div id="home">
<video  muted loop id="myVideo">
  <source src={carAnim}type="video/mp4"/>
 
</video>

<div className="home-content">
    <h1 style={{fontWeight:"lighter",fontSize:'3vw'}}>THE</h1>
      <h1>ROYAL CARS</h1>
      <div className="home-c-btn">
          <Link to="#">Learn More</Link>
      </div>
  </div>

  
  <audio autoPlay>
                <source src={audio} type="audio/mpeg"/>
            </audio>
</div>

            

  

  <div id="section2">
      <div className="sec2-content">
          <div className="sec2-title">
          <h1 style={{fontWeight:"lighter",fontSize:'3vw'}}>THE BLACK</h1>
            <h1>GHOST</h1>
          </div>

          <div className="home-c-btn">
          <a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">Learn More</a>
      </div>
      </div>
  </div>


  <div id="section3">
      <div className="sec3-content">
                <div className="sec3-bg-img">
                    <div className="sec3-title">
                    <h1 style={{fontSize:"3vw",fontWeight:'lighter'}}>THE RED</h1>
                    <h1>DRAGON</h1>
                    </div>

                    <div className="home-c-btn">
                    <Link to="#">Learn More</Link>
                    </div>

                </div>
      </div>
  </div>



  <div id="section4">
  <video  muted loop id="sonycar" controls autoPlay>
  <source src={sonycar}type="video/mp4"/>
 
</video>

<div className="sec4-content">
    <div className="sec4-title">
        <h1 style={{fontSize:"3vw",fontWeight:'lighter'}}>THE SMART</h1>
        <h1>ELECTRIC CAR</h1>
    </div>
    <div className="home-c-btn">
    <a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">Learn More</a>
                    </div>
</div>
  </div>

  <div id="section5">
      <div className="sec5-content">
          <div className="sec5-c">
                    <img src={bluecar} className="bluecar" alt="bluecar"/>
                    <h2 className="sec5-title">A1 DRAGON</h2>
                    <div className="sec5-btn">
                    <a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">REGISTER</a>
                    </div>
                   
          </div>
          <div className="sec5-c">
          <img src={bluecar} className="bluecar" alt="bluecar"/>
                    <h2 className="sec5-title">A3 GHOST</h2>
                    <div className="sec5-btn">
                    <a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">REGISTER</a>
                    </div>
          </div>
          <div className="sec5-c">
          <img src={bluecar} className="bluecar" alt="bluecar"/>
                    <h2 className="sec5-title">A5 SMART</h2>
                    <div className="sec5-btn">
                    <a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">REGISTER</a>
                    </div>
          </div>
      </div>
  </div>


  <div id="section6">

      

      <p className="sec6-title">THE FUTURE CAR IS HERE</p>
      <div className="sec6-content" onClick={playBtnHandler}>
          <div className="sec6-c-v" >
                <video id="sec6-bg-v"  muted  ref={myVideo}>
                    <source src={sonycar2} type="video/mp4"/>
                </video>
          </div>
          <div className="sec6-c-v2">
          <video id="sec6-bg-v2" muted ref={myVideo1}>
                    <source src={navCar} type="video/mp4"/>
                </video>
               
          </div>
          <div className="cursor" style={{left:cursorX + 'px',top:cursorY + 'px'}}> {
                      playBtn ?<CgPlayButtonO/> : <CgPlayPauseO/>
                   } </div>
      </div>
  </div>


  <div id="section7">
                   <div className="sec7-content">
                       <div className="sec7-title" style={{color:'white'}}>
                       <h1 style={{fontSize:"3vw",fontWeight:'lighter'}}>THE RACE</h1>
                       <h1>RED JET</h1>
                       </div>
                       <div className="home-c-btn">
                    <Link to="#">Learn More</Link>
                    </div>
                   </div>
  </div>


  <div id="section8">
    <video id="sec8-v" autoPlay controls>
        <source src={automative} type="video/mp4"/>
    </video>

    <div className="sec8-content">
        <h1>AU<span className="span">TOMATI</span>VE</h1>
    </div>
  </div>
  


  <footer>
      <div className="footer-c">
          <div className="f-c">
              <AiOutlineTrademark style={{fontSize:'30px'}}/>
              <h3>ABOUT US</h3>
              <p>
  Line 186:22:  The href attribute requires a valid value to be accessible. Provide a valid, naviga</p>
          </div>

          <div className="f-c">
              <h3>MODELS</h3>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">GHOST</a></p>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">DRAGON</a></p>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">SMART</a></p>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">RACE</a></p>
          </div>
          <div className="f-c">
              <h3>LINKS</h3>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">HOME</a></p>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">DISCOVER</a></p>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">PRODUCT</a></p>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">DATA</a></p>
          </div> 
          <div className="f-c">
              <h3>SERVICE</h3>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">FAQ</a></p>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">TERMS</a></p>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">FEEDBACK</a></p>
              <p><a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer">SUPPORT</a></p>
          </div>

          <div className="f-c">
              <h3>FOLLOW US</h3>
              <a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer"><TiSocialFacebookCircular/></a>
              <a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer"><TiSocialInstagramCircular/></a>
              <a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer"><TiSocialTwitterCircular/></a>
              <a href="https://react-icons.github.io/react-icons/search?q=play" target="_blank" rel="noreferrer"><TiSocialYoutubeCircular/></a>
          </div>
      </div>
      <hr></hr>
      <div style={{textAlign:"end",marginTop:"5px"}}>
          <p>Website Developed By Praveen Nathan C</p>
      </div>
  </footer>
            
        </>
    )
}

export default Home
