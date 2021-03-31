import React from 'react';
import { useHistory } from 'react-router-dom';
const Logout = () => {
    const history = useHistory();
    localStorage.clear();
    history.push('/');
    return (
        <h1></h1>
    )
}
export default Logout;