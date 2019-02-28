import React, { useEffect } from 'react'

// import child components
import Interest from './Interest'

// import assets
import { close_icon } from '../../../assets'

export default (props: any) => {
    let { interests, icon, closeDrawer } = props

    useEffect(() => {
        let drawer = document.querySelector('.about-page__drawer')
        if (drawer !== null) {
            drawer.classList.add('slide-in-from-left')
        }
    }, [])

    return (
        <div className='about-page__interests about-page__drawer'>
            <button className='btn__close-drawer' onClick={ closeDrawer }>
                <img src={ close_icon } alt='close drawer' />
            </button>
            <img className='drawer-icon' src={ icon } alt='interests' />
            <h2 className='drawer-title'>Interests</h2>
            {
                interests.map((interest: any, i: number) => <Interest key={ i } interest={ interest } />)
            }
        </div>
    )
}