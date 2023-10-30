import '../styles/reset.css'
import '../styles/global.css'
import '../styles/form.css'
import { setTheme } from './themeToggle.js'; //include '.js' !!!
document.querySelector('.tt').addEventListener('click', setTheme)