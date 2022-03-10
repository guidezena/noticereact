import React from'react';
import Header from './components/Header';

function App(){
    const [username, setUsername] = React.useState("");
    return <Header/>
}

export default App;