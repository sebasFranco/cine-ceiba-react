import React from 'react';

class NavBar extends React.Component {

  render() {

  	return (

  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

		    <span className="navbar-brand">Cine Ceiba</span>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">
              <li className="nav-item" id="a1" >
			          	<span className="nav-link" onClick={(e) => this.props.lookFor(false)}>Comprar Sillas</span>
			        </li>
			        <li className="nav-item">
			          	<span className="nav-link" id="a2"  onClick={(e) => this.props.lookFor(true)} >Listado de Compras</span>
			        </li>
			    </ul>
		    </div>
		</nav>

  	)

  }

}

export default NavBar;
