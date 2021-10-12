import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeThumbnail.module.css'


function MemeThumbnail(props) {
    return (
        <div className={styles.Templatename} data-testid="MemeThumbnail" style={{ ...props.style }} >
            {props.children}
        </div>
    );

}


MemeThumbnail.propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.object
};


export default MemeThumbnail;
