import React from 'react'
import "./index.css"
const Navbar = () => {
  return (
    <>
    <div className='header'>
    <div className='name'>StudentText<a href="#"></a></div>
    </div>
    <input type="checkbox" className="openSidebarMenu" />
    <label htmlFor="openSidebarMenu" className='sidebarIconToggle'>
      <div className='spinner top'></div>
      <div className='spinner middle'></div>
      <div className='spinner bottom'></div>
    </label>
    <div className='sidebarMenu'>
    <ul className='menu'>
    <li><a href="#">Intellectual</a></li>
      <li><a href="#">Career</a></li>
      <li><a href="#">Funny</a></li>
      <li><a href="#">For men</a></li>
      <li><a href="#">For women</a></li>
      <li><a href="#">Love and family</a></li>
      <li><a href="#">For Children</a></li>
      <li><a href="#">Health</a></li>
      <li><a href="#">Contacts</a></li>
      <li><a href="#">For copyright holders</a></li>
      <li><a href="#">Terms of use</a></li>
      <li><a href="#">Privacy</a></li>
    </ul>
    </div>
    <div className='main'>
      <h1>Tests online</h1>
      <p>Psychological,educational, IQ</p>

      <select name="" id="">
        <option value="Personality and character">Personality and character</option>
        <option value="Temperament">Temperament</option>
        <option value="Interpersonal relationship">Interpersonal relationship</option>
        <option value="Diagnosis of disorders">Diagnosis of disorders</option>
        <option value="Educational">Educational</option>
        <option value="Intellectual">Intellectual</option>
        <option value="Career">Career</option>
        <option value="Funny">Funny</option>
        <option value="For men">For men</option>
        <option value="Love and family">Love and family</option>
        <option value="For children">For children</option>
        <option value="Health">Health</option>
      </select>
    </div>
    </>
  )
}

export default Navbar
