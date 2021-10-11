import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    console.log(props);
    return (
        <button type={props.type} 
        className={styles.Button} 
        style={{...props.style,backgroundColor:props.bgColor, color:props.color}}
        onClick={(evt)=>{
            props.onclickevent('C good on a cliqué sur moi, je te préviens père');
        }}>
            {undefined!==props.children?props.children:props.text}        
        </button>
    );
}
Button.propTypes = {
    onclickevent: PropTypes.func.isRequired,
    text: PropTypes.string,
    children: PropTypes.any,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object
    
};

export default Button;
