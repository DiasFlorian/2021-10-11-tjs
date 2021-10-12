import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

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
        </div>
    );

}


MemeForm.propTypes = {
    style: PropTypes.object
};


export default MemeForm;
