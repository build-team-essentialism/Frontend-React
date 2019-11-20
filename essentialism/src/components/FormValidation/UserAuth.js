import React from 'react';

export default function check(form) {
    if (form.username.value == '' || form.username.value == null) {
        alert('Please enter a username.');
        return false;
    } 
    if (form.password.value == '' || form.password.value == null) {
        alert('A password is required to log in.')
        return false;
    } else {
        return true;
    }
}

export default function validateRegister(value) {
    const UsernameRegex = /^[a-z0-9_-]{3,16}$/gi;
    
}
