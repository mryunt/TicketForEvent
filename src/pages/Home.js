import React from 'react'
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
const Home = () => {
    return (
        <Carousel>
            <div>
                <img src="https://source.unsplash.com/szFUQoyvrxM/1920x1080" />
                <p className="legend">Etkinlik 1</p>
            </div>
            <div>
                <img src="https://source.unsplash.com/bF2vsubyHcQ/1920x1080" />
                <p className="legend">Etkinlik 2</p>
            </div>
            <div>
                <img src="https://source.unsplash.com/LAaSoL0LrYs/1920x1080" />
                <p className="legend">Etkinlik 3</p>
            </div>
        </Carousel>
    )
}

export default Home