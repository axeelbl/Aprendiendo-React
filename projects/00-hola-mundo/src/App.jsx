import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    const format = (userName) => `@${userName}`
    
    return(
        <section className='App'>

            <TwitterFollowCard 
            formatUserName={format}  
            userName="midudev" 
            name = "Miguel Ángel Durán"
            initialIsFollowing
            />
        

            <TwitterFollowCard 
            formatUserName={format} 
            userName="axeelbl" 
            name = "Axel Berral López"
            initialIsFollowing = {false}/>
            

            <TwitterFollowCard 
            formatUserName={format} 
            userName="Ikeerwp" 
            name = "Iker Infantes Calaveras"
            initialIsFollowing = {false}/>
            

            <TwitterFollowCard 
            formatUserName={format} 
            userName="Ferranicu" 
            name = "Ferran Sidera"
            initialIsFollowing = {false}/>

            <TwitterFollowCard 
            formatUserName={format} 
            userName="DanGxG" 
            name = "Daniel Grao"
            initialIsFollowing = {false}/>

        </section>
        
    )
    
}