// Import stylesheets
import './style.css';

const domElement = document.getElementById('app');
const childElement = document.createElement('div');
childElement.className = 'childDiv';
childElement.innerHTML = '<button>Click Me</Button>';
domElement.appendChild(childElement);
