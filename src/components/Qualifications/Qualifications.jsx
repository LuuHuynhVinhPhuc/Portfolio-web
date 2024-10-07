import React, { useState } from 'react'
import "./qualification.css"

const Qualifications = () => {

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className={toggleState === 1 ? "qualification_button qualification-active button--flex" : "qualification_button button--flex"}
            onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification_icon"></i> Education
          </div>

          <div className={toggleState === 2 ? "qualification_button qualification-active button--flex" : "qualification_button button--flex"}
            onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Information Technology</h3>
                <span className="qualification_subtitle">
                  Ho Chi Minh city of Foreign Language and Information Technology (HUFLIT)
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div className='exp'>
                <h3 className="qualification_title">Mobile Developer</h3>
                <span className="qualification_subtitle">
                  Sen Vang Solution
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 02/2024 - 05/2024
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Qualifications