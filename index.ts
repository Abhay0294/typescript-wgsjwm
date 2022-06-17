// Import stylesheets
import './style.css';

const domElement = document.getElementById('app');
const childElement = document.createElement('div');
const childElement2 = document.createElement('div');
childElement.className = 'childDiv';
childElement2.className = 'childDiv1';
childElement.innerHTML = '<button class="button">Click Me</Button>';
childElement2.innerHTML = '<button>Click Me</Button>';
domElement.append(childElement, childElement2);

/**
 * Use append() method to append multiple elements to the
 * parent node at once.
 * Use appendChild() method to append only one child node to
 * the parent
 */
