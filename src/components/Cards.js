import React from 'react'
import CardItem from './CardItem'
import './css/Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these epic games</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/cod.jpg"
                            text="Call of Duty: Black Ops Cold War is a 2020 first-person shooter video game developed by Treyarch and Raven Software and published by Activision."
                            label="Game"
                            path='/services'
                        />
                        <CardItem 
                            src="images/demonsouls.jpg"
                            text="Call of Duty: Black Ops Cold War is a 2020 first-person shooter video game developed by Treyarch and Raven Software and published by Activision."
                            label="Game"
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/alien.jpg"
                            text="Play the new Call of Duty Black ops Cold War mate its good."
                            label="Game"
                            path='/services'
                        />
                        <CardItem 
                            src="images/farcry.jpg"
                            text="Play the new Call of Duty Black ops Cold War mate its good."
                            label="Game"
                            path='/services'
                        />
                        <CardItem 
                            src="images/spiderman.jpg"
                            text="Play the new Call of Duty Black ops Cold War mate its good."
                            label="Game"
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
