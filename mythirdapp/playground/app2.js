console.log('inside app2.js')
// getting values from an object

const person={
    myName :'person2',
    address :'pune',
    phone :'+91189789',
    email:'person@134.com',
}



const template=(
    <div>
<h3>App1</h3>
<div>name :{person.myName}</div>
<div>address:{person.address}</div>
<div>phone:{person.phone}</div>
<div>email :{person.email}</div>


    </div>
)



const root=document.getElementById('app')
ReactDOM.render(template,root)






