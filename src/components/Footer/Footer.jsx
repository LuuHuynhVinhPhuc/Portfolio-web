import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Marcus</h1>

                <ul className='footer_list'>
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer_link">Contact</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.facebook.com/marcusLuu0506" className="footer_social-link" target='_blank'>
                        <i className='uil uil-facebook'></i>
                    </a>
                    <a href="www.linkedin.com/in/marusluu0506" className="footer_social-link" target='_blank'>
                        <i className='uil uil-linkedin'></i>
                    </a>
                    <a href="https://github.com/LuuHuynhVinhPhuc" className="footer_social-link" target='_blank'>
                        <i className='uil uil-github-alt'></i>
                    </a>
                </div>

                <span className="footer_copy">&#169; Marcus Luu. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer