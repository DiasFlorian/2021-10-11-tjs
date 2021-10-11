import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    console.log(props);
    return (
        <button className={styles.Button}>
            {props.text}        
        </button>
    );
}

export default Button;
