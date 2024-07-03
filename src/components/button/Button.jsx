import React from 'react'

import styles from './button.module.css'

function Button({isoutline, icon, text}) {
    return (
        <button className={isoutline? styles.outline_button :styles.primary_button}>
        {icon}
        {text}
        </button>
    )
}

export default Button
