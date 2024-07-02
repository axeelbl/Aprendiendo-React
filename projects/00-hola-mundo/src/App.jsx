import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    const format = (userName) => `@${userName}`
    
    return(
        <section className='App'>

            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="midudev" 
            name = "Miguel Ángel Durán"/>

            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="axeelbl" 
            name = "Axel Berral López"/>

            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="Ikeerwp" 
            name = "Iker Infantes Calaveras"/>

            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="Ferranicu" 
            name = "Ferran Sidera"/>

            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="DanGxG" 
            name = "Daniel Grao"/>

        </section>
        
    )
    
}