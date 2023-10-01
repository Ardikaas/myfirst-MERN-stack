import img from "./assets/Ardikaas.png"
const Navbar = () => {
  return(
    <div class="navbar">
      <div class="navbar-img">
        <img src={ img } alt=""/>
        <img src={ img } alt=""/>
      </div>
      <div class="navbar-link">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;