import React            from 'react';
import ReactDOM         from 'react-dom';
import Frame            from 'frame';
import {BrowserRouter}  from 'react-router-dom';

const App=(
    <BrowserRouter>
        <Frame/>
    </BrowserRouter>
);
const Anchor=document.querySelector('#anchor');

ReactDOM.render(App,Anchor);