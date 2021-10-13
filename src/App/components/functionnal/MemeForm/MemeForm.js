import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../../ui/Button/Button';

const initialState = {}
function MemeForm(props) {
    const [state, setstate] = useState(initialState)
    useEffect(() => {
        return () => {
            //willUnMount effect
        };
    }, [state])

    return (
        <div className={styles.MemeForm} data-testid="MemeForm">
            memeForm state -&gt; {JSON.stringify(state)}
       <Button onclickevent={(evt)=>{props.onFormChange({...props.meme,text:'Je test le bouton pour voir'})}}>Changer le texte</Button>
        </div>
    );

}


MemeForm.propTypes = {
    style: PropTypes.object,
    meme: PropTypes.object.isRequired,
    onFormChange: PropTypes.func.isRequired
};


export default MemeForm;
