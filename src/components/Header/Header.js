import "./Header.css"
import logo from '../../logo.svg';

function Header() {
    return <header className="shadow bg-dark text-white">
        <div className="container py-3">
            <img src={logo} className="logo" alt="" />
        </div>
    </header>
}

export default Header;