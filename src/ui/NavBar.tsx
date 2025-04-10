import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="hidden *:text-[0.81rem] *:leading-[1.56rem] *:font-bold *:tracking-[2px] *:uppercase lg:flex lg:gap-[34px]">
      <Link to={"/"}>home</Link>
      <Link to={"/headphones"}>Headphones</Link>
      <Link to={"/speakers"}>Speakers</Link>
      <Link to={"/earphones"}>Earphones</Link>
    </nav>
  );
}

export default NavBar;
