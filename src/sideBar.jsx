import React from 'react'
import ReactDOM from 'react-dom/client'
import { CharacterIcon } from './characterIcon'
import {CharacterAttr} from './characterAttr'
import './sideBar.css'
export const SideBar = ()=>{
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
                <CharacterAttr className="atributes" atributeName="Fuerza" AtributeValue="7" />
                <CharacterAttr className="atributes" atributeName="Destreza" AtributeValue="7" />
                <CharacterAttr className="atributes" atributeName="Constitución" AtributeValue="7" />
                <CharacterAttr className="atributes" atributeName="Voluntad" AtributeValue="7" />
                <CharacterAttr className="atributes" atributeName="Inteligencia" AtributeValue="7" />
                <CharacterAttr className="atributes" atributeName="Carisma" AtributeValue="7" />
                <CharacterAttr className="atributes" atributeName="Habilidad" AtributeValue="7" />
                <CharacterAttr className="atributes" atributeName="Percepción" AtributeValue="7" />

            </section>
           
            

        </aside>
        </>
        
    )
}