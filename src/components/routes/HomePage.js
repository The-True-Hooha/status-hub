import React from 'react'
import Application from '../layout/apps'
import Navbar from '../layout/navbar'


export default function HomePage(){
    return(
        <div className='App'>
            <Navbar/>
            <Application />
        </div>
    )
}