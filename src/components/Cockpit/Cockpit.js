import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Fake HTTP request
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        
        toggleBtnRef.current.click();
        // using useEffect, so that the click occurs after JSX is returned
        return () => {
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
                ref={toggleBtnRef}
                onClick={props.clicked}
                className={btnClass}
            >Toggle Persons</button>
            <button onClick={authContext.login}>Log In</button> 
        </div>
    );
}

export default React.memo(cockpit);