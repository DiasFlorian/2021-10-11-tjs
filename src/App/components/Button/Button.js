import React from 'react'
import styles from './Button.module.css';

const Button = (props) => {
    console.log(props);
    return (
        <button type={props.type} className={styles.Button}>
            {undefined!==props.children?props.children:props.text}        
        </button>
    );
}

export default Button;
