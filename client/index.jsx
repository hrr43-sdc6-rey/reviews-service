import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/styles.css';

const URL = window.location.href.split('/');
const expId = URL[3];

ReactDOM.render(<App expId={expId} />, document.getElementById('reviewsSection'));
