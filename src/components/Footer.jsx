import React from 'react'

const Footer = () => {
return (
    <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" >
            <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">© 2005 YumDrop, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="fs-3"><a className="text-muted" href="#"><i className="fa-brands fa-github"></i></a></li>
            <li className="fs-3 mx-4"><a className="text-muted" href="#"><i className="fa-brands fa-instagram"></i></a></li>
            <li className="fs-3"><a className="text-muted" href="#"><i className="fa-brands fa-github"></i></a></li>
            </ul>
        </footer>
    </div>
)
}

export default Footer
