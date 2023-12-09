import React from 'react';

import './error.css'

const FormError = ({ touched, error }) => {
    return touched && error ? <div className="error">{error}</div> : null;
};

export default FormError;