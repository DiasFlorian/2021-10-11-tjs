import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './TemplateName.module.css'


class TemplateName extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.TemplateName} data-testid="TemplateName" style={{ ...this.props.style }}>
                templateName
            </div>
        );
    }
}


TemplateName.propTypes = {
    style: PropTypes.object,
};


export default TemplateName;
