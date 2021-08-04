import React from 'react'
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="navbar bg-success">
            <Link to="/" className="text-dark head"><h1>Foodbase <i className="fas fa-weight"></i></h1></Link>
            <div className="float-right nav-links">
                {props.showHoverData ? <div className="database" onMouseEnter={()=>props.setShowHoverData(false)}>Food Database</div> : <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noreferrer"><div className="database btn btn-secondary" onMouseLeave={()=>props.setShowHoverData(true)}>Food Database</div></a>}
                {props.showHoverAbout ? <div className="about" onMouseEnter={()=>props.setShowHoverAbout(false)}>About</div> : <Link to="/about" rel="noreferrer"><div className="about btn btn-secondary" onMouseLeave={()=>props.setShowHoverAbout(true)}>About</div></Link>}
           </div>
        </nav>
    )
}

export default Navbar
