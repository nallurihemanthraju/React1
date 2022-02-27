import React from 'react'
 const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand bg-dark">
  <a className="navbar-brand" href="/">Navbar</a>
  React Routing
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <ul className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <li className="navbar-nav">
      <a className="nav-link active" href="/my-app/src/Router/Industry.js">Industry</a>
    </li>
    <li className="navbar-nav">
      <a className="nav-link active" href="/my-app/src/Router/Platform.js">Platform</a>
    </li>
    <li className="navbar-nav">
      <a className="nav-link active" href="/my-app/src/Router/Services.js">Services</a>
    </li>
  </ul>
</nav>
    </div>
  )
}
export default Navbar
										