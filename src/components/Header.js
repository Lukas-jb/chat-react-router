import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'

function Header() {
    return (
    <header>
    <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
        <Link className="navbar-brand icono-chat" to="/">Chat App</Link>
        <button className="navbar-toggler boton-menu" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div className="navbar-nav bton-logout">
              <button className="btn btn-danger" onClick={() => auth().signOut()}>Logout</button>
            </div>
            : <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3 btn-info" to="/login">Sign In</Link>
              <Link className="nav-item nav-link mr-3 btn-warning " to="/signup">Sign Up</Link>
            </div>}
            
        </div>
      </nav>
    </header>
  );
}

export default Header;