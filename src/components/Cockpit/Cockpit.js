import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Fake HTTP request
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] Clean up in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd Clean up in useEffect');
        }
    })

    // Turning array of strings into a string.
    // Assigns both classes together
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push( classes.red ); // classes = red
    }
    if (props.personsLength <= 1) {
      assignedClasses.push( classes.bold ); // classes = red bold
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Dynamic color change</p>
            <button 
                onClick={props.clicked}
                className={btnClass}
            >Toggle Persons</button>
        </div>
    );
}

export default React.memo(cockpit);