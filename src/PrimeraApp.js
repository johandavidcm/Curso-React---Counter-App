import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const PrimeraApp = ( { saludo } ) => {



    return (
        <>
            <h1>{ saludo }</h1>
            <p>Primer contacto con React</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;