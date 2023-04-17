import { useEffect } from 'react';
import htmlLogo from "../../src/Images/htmlLogo.png";
//import HTMLTransparent from "../Images/HTMLTransparent.png"
import cssLogo from "../../src/Images/cssLogo.png";
import jsLogo from "../../src/Images/JavaScriptLogo.png"
import reactLogo from "../../src/Images/reactLogo.svg"
import Header from './HomePgageComponents/Header';
//import EnterButton from './Elements.jsx/EnterButton';
import { Link } from 'react-router-dom';
// import reactLogo from "./reactLogo.svg";
//import './LastTry.css'; // Import the CSS file where you define the styles for the HTML logo

const Home = () => {
  useEffect(() => {
    // Get the HTML logo element
    // /*HHH*/const HTMLTransparentElem = document.querySelector('.htmlTrans-logo');//ADD CSS
    const htmlLogoElem = document.querySelector('.html-logo');
    const cssLogoElem = document.querySelector('.css-logo')
    const jsLogoElem = document.querySelector('.js-logo')
    const reLogoElem = document.querySelector('.re-logo')
    
    // Set initial styles for the HTML logo
    // HTMLTransparentElem.style.maxHeight = '0px';
    // HTMLTransparentElem.style.transform = 'translate(-50%, -50%)';
    htmlLogoElem.style.maxHeight = '0px';
    htmlLogoElem.style.transform = 'translate(-50%, -50%)';
    cssLogoElem.style.maxHeight = '0px';
    cssLogoElem.style.transform = 'translate(-50%, -50%)';
    jsLogoElem.style.maxHeight = '0px';
    jsLogoElem.style.transform = 'translate(-50%, -50%)';
    reLogoElem.style.maxHeight = '0px';
    reLogoElem.style.transform = 'translate(-50%, -50%)';

    // Animate the HTML logo
    setTimeout(() => {
      //reLogoElem.style.maxHeight = '0px'
      htmlLogoElem.style.maxHeight = '300px';
      // HTMLTransparent.style.maxHeight = '300px';//************ */
      
    }, 1);
 
    setTimeout(()=>{
    jsLogoElem.style.maxHeight = '300px';
    }, 1599)
    setTimeout(()=>{
    cssLogoElem.style.maxHeight = '300px';
    }, 799)
    setTimeout(()=>{
    reLogoElem.style.maxHeight = '300px';
    reLogoElem.style.display = 'block';
    } ,2399)

    setTimeout(()=>{
    htmlLogoElem.style.display = "none";
    // HTMLTransparent.style.display = "none";/******************* */
    
    }, 800)

    setTimeout(()=>{
    cssLogoElem.style.display = "none";
    },1600)

    setTimeout(()=>{
    jsLogoElem.style.display = 'none';
    }, 2400)
    }, []);

   
    

  return (
<div className='enterPage'>
  <Header/>
  <div className='lastDiv'>
    {/* <img src={HTMLTransparent} alt='HTML logo' className='htmlTrans-logo' /> */}
    <img src={htmlLogo} alt='HTML logo' className='html-logo' />
    <img src={cssLogo} alt= "CSS Logo" className='css-logo'/>
    <img src={jsLogo} alt = "JS Logo" className='js-logo'/>
    <img src={reactLogo} alt = "React Logo" className='re-logo' style={{display: 'none'}}/> {/*className App-logo (removed from) react logo image*/}
    {/* Display none is to stop the react logo showing before the others on page load */}
      <div className='enterButtonDiv'>
        
        
        <button className='enterButton'><Link to="/Main">Click to Enter</Link></button>
       
       
      </div>
  </div>
</div>
  )
}

export default Home

