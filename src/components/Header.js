import NavBar from "./NavBar";


function Header() {
    return (
        <header id="header" className="header flex justify-between py-2 px-2 bg-slate-800 text-white">
            <NavBar />
        </header>
    )
}

export default Header