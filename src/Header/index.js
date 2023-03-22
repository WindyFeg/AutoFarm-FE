import Logo from '../assets/img/AutoFarm_logo.png';

function Header() {
    return (
        <div className="header_container">
            <div className="header_logo">
                <img src={Logo} alt="logo" className='logo' />
            </div>
            <div className="header_login">
                <form>
                    <input type="text" name="username" placeholder='Username' className='inputbox' />
                    <input type="password" name="password" placeholder='Password' className='inputbox' />
                    <input type="submit" value="Login" className='header_btn' />
                </form>
            </div>
        </div>
    )

}

export default Header;