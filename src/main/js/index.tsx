import * as React from 'react';
import * as ReactDOM from "react-dom/client"

import App from './App/App';
import "./styles.less";


const mountNode = document.getElementById('app');

if (mountNode !== null) {
    const root = ReactDOM.createRoot(mountNode);
    root.render(<App name="Jane"/>);
} else {
    console.error("#app not found!");
}
