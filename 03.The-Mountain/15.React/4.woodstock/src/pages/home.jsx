import React, {useState} from 'react';
import logo from '../logo.svg';
import { ContactForm } from '../components';

const Home = () => {
    const [count, setCount] = useState(0);
    return (
        <main>
            <img src={logo} className="App-logo" alt="logo" />
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
            <ContactForm/>
        </main>
    )
}

export default Home;