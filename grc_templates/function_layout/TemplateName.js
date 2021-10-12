import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css'


function TemplateName(props) {
    return (
        <div className={styles.Templatename} data-testid="TemplateName" style={{ ...props.style }} >
            {props.children}
        </div>
    );

}


TemplateName.propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.object
};


export default TemplateName;
