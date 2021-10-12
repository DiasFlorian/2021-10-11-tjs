import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

const initialState = {}
function TemplateName(props) {
    const [state, setstate] = useState(initialState)
    useEffect(() => {
        return () => {
            //willUnMount effect
        };
    }, [state])

    return (
        <div className={styles.TemplateName} data-testid="TemplateName">
            templateName state -&gt; {JSON.stringify(state)}
        </div>
    );

}


TemplateName.propTypes = {
    style: PropTypes.object
};


export default TemplateName;
