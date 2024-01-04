console.log('inside app4.js')


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