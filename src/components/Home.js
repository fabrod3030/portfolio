import React from 'react'
import image from '../images/monstera-leaf-1.jpg'

function Home() {
    return (
        <main>
            <img src ={image} alt="" className="absolute object-cover w-full h-full"/>
            <section>
                <h1>Aloha. I'm Fabrod</h1>
            </section>
        </main>
    )
}

export default Home
