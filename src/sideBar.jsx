import React from 'react'
import ReactDOM from 'react-dom/client'
import { CharacterIcon } from './characterIcon'
import {CharacterAttr} from './characterAttr'
import './sideBar.css'

export const SideBar = ()=>{
    const dataAttr = [
        
        {
            text:"Fuerza",
            value:"7",
        },
        {
            text:"Destreza",
            value:"7",
        },
        {
            text:"Cosntitucion",
            value:"7",
        },
        {
            text:"Voluntad",
            value:7,
        },
        {
            text:"Carisma",
            value:7,
        },
        {
            text:"Percepcion",
            value:"7",
        },
        {
            text:"Habilidad",
            value:"7",
        }    ];
  
    return (
        <>
        <aside className='sideBar'>
            <header>
                <CharacterIcon imageSource="/yaram.jpg" className="chrctImg" />
            </header>
            <section className='dataSection'>
                <CharacterIcon imageSource="/skull.svg" className="chrctSecondary" />
                <CharacterIcon imageSource="/compass.svg" className="chrctSecondary" />
                <CharacterIcon imageSource="/karate.svg" className="chrctSecondary" />
            </section>
            <section className='attrSection'> 
            <CharacterAttr className="atributes" data={dataAttr} />
               
            </section>
           
            

        </aside>
        </>
        
    )
}