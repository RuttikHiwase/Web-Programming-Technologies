'use strict';

console.log('inside app3.js');
// getting values from an object

var person = {
    myName: 'person2',
    address: 'pune',
    phone: '+91189789',
    email: 'person@134.com'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h3',
        null,
        'App1'
    ),
    React.createElement(
        'div',
        null,
        'name :',
        person.myName
    ),
    React.createElement(
        'div',
        null,
        'address:',
        person.address
    ),
    React.createElement(
        'div',
        null,
        'phone:',
        person.phone
    ),
    React.createElement(
        'div',
        null,
        'email :',
        person.email
    )
);

var root = document.getElementById('app');
ReactDOM.render(template, root);
