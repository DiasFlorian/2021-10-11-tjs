import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexLayout.module.css'


function FlexLayout(props) {
    return (
        <div className={styles.Templatename} data-testid="FlexLayout" style={{ ...props.style }} >
            {props.children}
        </div>
    );

}


FlexLayout.propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.object
};


export default FlexLayout;
