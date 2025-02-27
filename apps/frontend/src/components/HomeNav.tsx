import { Link, useLocation } from "react-router";

function HomeNav() {
  const { pathname } = useLocation()

  return(
    <>
      <nav className="rounded-xl border border-[#2B2B2B] bg-black/50 py-[22px] px-[58px] flex justify-between gap-[48px] lg:max-w-max">
        <Link to="/" className={pathname === "/"      ? "inter-700" : "inter-400"}>Home</Link>
        <Link to="/" className={pathname === "/about"     ? "inter-700" : "inter-400"}>About</Link>
        <Link to="/" className={pathname === "/how"       ? "inter-700" : "inter-400"}>How it Works</Link>
        <Link to="/" className={pathname === "/services"  ? "inter-700" : "inter-400"}>Services</Link>
      </nav>
    </>
  )
}

export default HomeNav;