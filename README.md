# React Workshop

### Intro
  Welcome to the DBC Seattle React Workshop Day 1. Throughout this curriculum you will be building a personal web page in order to learn how to break a web page down to it's base building blocks and use React to design a site.

## Release 0
  In this release we're going to have you open up the terminal and open the folder called `/react-workshop` with `subl .`

  Now we are going to be examine a basic component in React! Now let's explore what makes up a React Component.

  in the terminal let's switch to the step-1 branch
  please input `git checkout step-1`

  First open up the file in `src/components/BasicComponent.js`

  You should now be seeing a Basic React Component!
  diving in let's discuss what we see here
  first we see
  ```
  import React, {Component} from 'react'
  ```
  this line is pulling in the prototype Component that has the basic functioning every React Component needs
  it is coming from the React lib for our use
  every new component file needs this line, otherwise we lose all of the coding that the React library provides.

  next we have
  ```
  class BasicComponent extends Component {
  ```
  those comfortable with es2015 JS might recognize this easily but for the average javascript user this line might seem funky
  All that this line is doing is creating a constructor object that is built upon the functionality provided by the Component from the React library. We are also establishing the name of this particular component with a title that represents the funciton of this component.

  on the next line
  ```
  render(){
  ```
  this line is more es2015 notation that is establishing a function called render. All React components require a render function. Without it they can't fulfill their most basic purpose of rendering it's information to the given page.

  on line 6 we see
  ```
  return(<div> Hi, I'm a Basic Component! </div>)
  ```

  here we are establishing exactly what this component will render. At a component's most simple it renders text within two div html tags.

  at the bottom of the file we find
  ```
  export default BasicComponent;
  ```
  this line is the easiest to forget about but absolutely paramount for this component to be used within other files.
  speaking of which, let's see this little guy in action.

  in your terminal please type `npm start` and open up chrome and type `localhost:3000` into the browser. you should now be seeing the starting point of your app in the web page. However what we would like to see in here is our little buddy the Basic Component.
  To do that look back to your code and go to the file `src/App.js`. within this file you will see a call to our component commented out, uncomment it to make it available. take not how the notation looks like how we imported Component form React. the main difference being that the component is being pulled from a file relative to our current one.

  So now that we have access to this component how are we going to use it?
  React primarily relies on the use of JSX notation to refer to derived components. JSX at it's most basic can be treated like self-enclosed html/xml tags. so when we want to input our component we would add in `<BasicComponent />`
  so  let's throw that content in, in place of the text in the App-intro. Save your page and  check browser and you can now see our basic component saying hi!

## Release 1
