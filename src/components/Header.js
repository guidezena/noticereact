import React from 'react';
import Search from './Search';

function Header() {

    const [user, setUser] = React.useState('');
    
    const [loginSuccess, setLoginSuccess] = React.useState(false);

    function handleChangeUser(event) {
        setUser(event.target.value);
        //console.log(event.target.value);
    }

    function handleLoginLogoutButton() {

        if (!loginSuccess && user === '') {
            alert('Digite o seu Login ')
            return
        }
        if (loginSuccess) {
            setUser('')
        }
        setLoginSuccess(!loginSuccess)
        /*
            setLoginSuccess((oldValue)=> {
                console.log(oldValue)
                return !oldValue
            })
        */
    }

    return (
        <React.Fragment>
            {!loginSuccess && (
                <div>
                    <h1>Faça login</h1>
                    <input type='text' onChange={handleChangeUser} placeholder='Digite seu usuario' />
                    <button onClick={handleLoginLogoutButton}>Login</button>
                </div>
            )}
            {loginSuccess && (
                <div>
                    <p>Seja bem vindo - {user} </p>
                    <button onClick={handleLoginLogoutButton}>Logout</button><br/>
                    <Search/>
                </div>)}
        </React.Fragment>

    )
}
export default Header;