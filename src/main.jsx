import React from 'react'
import ReactDOM from 'react-dom/client'
import { SideBar } from './sideBar'
import {MainStrucutre} from "./mainCharacterSheet"
import './main.css'



ReactDOM.createRoot(document.getElementById('root')).render(
<section id="sheet">
<SideBar />
<MainStrucutre/>

</section>

)
