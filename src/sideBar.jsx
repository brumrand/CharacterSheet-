import React from 'react'
import ReactDOM from 'react-dom/client'
import { CharacterIcon } from './characterIcon'
export const SideBar = ()=>{
    return (
        <>
        <aside className='sideBar'>
            <CharacterIcon imageSource="/yaram.jpg" className="chrctImg" />
            <CharacterIcon imageSource="/skull.svg" className="chrctSecondary" />
            <CharacterIcon imageSource="/compass.svg" className="chrctSecondary" />
            <CharacterIcon imageSource="/karate.svg" className="chrctSecondary" />

        </aside>
        </>
        
    )
}