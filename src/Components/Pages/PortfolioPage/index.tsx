import React, { useState, useEffect } from 'react'

// import child components
import ProjectCard from './ProjectCard'
import ProjectDrawer from './ProjectDrawer'

import { projects } from '../../../data'

export default () => {

    let [focusProject, setFocusProject] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0)
        let portfolioPage = document.querySelector('.portfolio-page')
        if (portfolioPage !== null) {
            portfolioPage.classList.add('fade-in')
        }

        return () => {
            if (portfolioPage !== null) {
                portfolioPage.classList.remove('fade-in')
            }
        }
    }, [])

    return (
        <div className='portfolio-page'>
            {
                projects.map(project => <ProjectCard    key={ project.title }
                                                        project={ project }
                                                        focusProject={ focusProject }
                                                        setFocusProject={ setFocusProject }
                                        />)
            }
            {
                Object.keys(focusProject).length !== 0 &&
                <ProjectDrawer project={ focusProject } setFocusProject={ setFocusProject } />
            }
        </div>
    )
}