import React, { useState, useEffect } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    const [isClicked, setisClicked] = useState(false);
    console.log(props);
    
    
    useEffect(() => {
        console.log('%c%s', 'color:red;font-size:x-large','changement d\'état cliqué du button');
    }, [isClicked])

    return (
        <button type={props.type}
            className={`${styles.Button} ${isClicked?' '+styles.clicked:''}`}
            style={{ ...props.style, backgroundColor: props.bgColor, color: props.color }}
            onClick={(evt) => {
                setisClicked(true);
                setTimeout(()=>{
                    setisClicked(false);
                }, 200)
                props.onclickevent('C good on a cliqué sur moi, je te préviens père');
            }}>
            {undefined !== props.children ? props.children : props.text}<br/>
            {isClicked?'cliqué':'pas cliqué'}
        </button>
    );
}

Button.propTypes = {
    onclickevent: PropTypes.func.isRequired,
    text: PropTypes.string,
    children: PropTypes.any,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    style: PropTypes.object
};

Button.defaultProps = {
    bgColor: 'skyblue',
    color: 'white',
    onclickevent: () => { }
}

export default Button;
