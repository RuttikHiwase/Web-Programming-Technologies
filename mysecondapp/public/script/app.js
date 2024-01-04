console.log("In the App directory")

//JSX
// JAVASCRIPT XML
// Template used by react to create the user interface
 const template=React.createElement('h2',null,'Now this is Changed') //It considers it as string

const root=document.getElementById('app')


//To Run The React App we need to call the 
ReactDOM.render(template,root)
//It Loads that template some where in index.html
//render the template inside a div having an id 'app'
