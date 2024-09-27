import React from 'react'

const Carousel = () => {
return (
    <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" id='carousel'style={{objectFit: "contain !important", maxHeight: "650px", width:"100%"}}>
            <div className="carousel-caption" style={{zIndex: "99"}}>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="submit">Search</button>
            </form>
            </div>
            <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/delicious-burger-city_23-2150902330.jpg?t=st=1721396821~exp=1721400421~hmac=2a4258a4e2fb69cd2d9903449f3faf2c5b7118508ff1218fa498f995dcb7aa38&w=1480" className="d-block w-100 h-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/hamburger-with-glass-water-side_188544-12233.jpg?w=1380&t=st=1721396500~exp=1721397100~hmac=e9b035c41101c45ac30a2b8c16921a6db8cd716fbefa1bc5b2463dbd0350af7a"  className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/top-view-eid-al-fitr-celebration-with-delicious-food_23-2151205103.jpg?t=st=1721396639~exp=1721400239~hmac=1546430b87cc823326d90d61c8859c276063a1f04aff0a33dee132b803db02b2&w=1480" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
)
}

export default Carousel
