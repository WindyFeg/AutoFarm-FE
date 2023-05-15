import Logo from '../assets/img/AutoFarm_logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { HiArrowRightOnRectangle, HiUserCircle } from 'react-icons/hi2';

function Header() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [state, setState] = useState(false)
    const [login, setLogin] = useState(false)

    const handleSubmit = async (e) => {
        console.log('test')
        e.preventDefault()
        const response = await axios.post('http://localhost:3001/users/login',
            {
                username: username,
                password: password
            }
        )
        debugger
        console.log(response.data)
        if (response.data === null) {
            setErrMsg('Your username or password is wrong!')
            setState(true)
        }
        else {
            setState(false)
            setLogin(true)
        }
    }

    const handleLogOut = () => {
        setUsername('')
        setPassword('')
        setState(false)
        setLogin(false)
        setState(false)
        navigate("/");
    }

    return (
        <div className="header_container">
            <div className="header_logo" style={{ cursor: 'pointer' }}>
                <img src={Logo} alt="logo" className='logo' />
            </div>
            <div className="header_login" onSubmit={handleSubmit}>
                {login === true && <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '25px', textAlign: 'center', margin: 'auto' }}> <HiUserCircle /></div>
                    <div style={{ fontSize: '15px', fontWeight: '500', textAlign: 'center', padding: '25px 20px 20px 5px' }}> Username:  {username} </div>
                    <div style={{ fontSize: '30px', textAlign: 'center', margin: 'auto', padding: '10px' }}>
                        <button onClick={handleLogOut} style={{ border: 'none', backgroundColor: 'white' }}><HiArrowRightOnRectangle /> </button>
                    </div>
                </div>
                }
                {login === false && <form>
                    <input type="text" name="username" placeholder='Username' className='inputbox' onChange={e => setUsername(e.target.value)} value={username} required />
                    <input type="password" name="password" placeholder='Password' className='inputbox' onChange={e => setPassword(e.target.value)} value={password} required />
                    <input type="submit" value="Login" className='header_btn' />
                </form>}
                {state && (<div style={{ color: "red", fontSize: '15px', textAlign: 'center', marginTop: '0', paddingTop: '0' }}>{errMsg}</div>)}
            </div>
        </div >
    )

}

export default Header;