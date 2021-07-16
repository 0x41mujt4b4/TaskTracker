import Button from './Button'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Header = ({ title, showAdd, task }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={`${task ? "red" : "green"}`} text={`${task ? "Close" : "Add"}`} onClick={showAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
