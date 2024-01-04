console.log('inside app1.js')

const myName='person1'
const address='pune'
const phone ='+914753'
const email='person@test.com'

const template=(
    <div>
<h3>App1</h3>
<div>name :{myName}</div>
<div>address :{address}</div>
<div>phone:{phone}</div>
<div>email :{email}</div>


    </div>
)



const root=document.getElementById('app')
ReactDOM.render(template,root)