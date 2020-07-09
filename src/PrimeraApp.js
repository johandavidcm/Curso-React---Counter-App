import React from 'react';
// import React, { Fragment } from 'react';

const PrimeraApp = ( { saludo = 'Mi papá no me enviaste el prop :c' } ) => {
    
    return (
        <>
            <h1>{ saludo }</h1>
            <p>Primer contacto con React</p>
        </>
    );
}

export default PrimeraApp;