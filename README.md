# React Workshop

### Intro
  Welcome to the DBC Seattle React Workshop Day 1. Throughout this curriculum you will be building a personal web page in order to learn how to break a web page down to it's base building blocks and use React to design a site.

## Release 0 - Examine a Component
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

## Release 1 - Create a Component

Now that we have a working understanding of a basic component, lets make one of our own! open up the file `src/MyFirstComponent.js` to see a component skeleton. set this component up to have a message of its own and then have it render within the Basic Component.
Feel free to make your own component in a new file and have that one render within the Basic Component as well!

## Release 2 - Components with Props

Now that we have created some basic props let's throw some variables around! oftentimes components should change what they are rendering based on the different information they were given. For example if you wanted to reuse a component to render different information in a similar way then you would want to be able to give it the information necessary. Most of the time we are passing this information from one component to a component contained with in it. This information happens through the passing of props.
Let's begin by typing into the terminal `git checkout step-2`

We should now see the file `Name.js` showup in `src/components` as well as in `App.js`. However when look to our browser we don't see  any text show where we would expect something as denoted by `<Name />`
If we check in `Name.js` we see that the only code within the divs is
```
{this.props.name}
```
what we are seeing here is two new things. first, the curly braces show that we are passing a variable into what's being rendered (if you remove them, the text inside will be shown)
. second we see a reference to the props of this component. specifically one called name. Being that nothing is being shown it is easy enough to assume that name doesn't currently exist within props. so what are we going to do about that?
Going back to `App.js`, let's add in a prop for name. To do that we can declare props much like how one declares attributes in HTML. so edit the name jsx to look like
```
<Name name='whatever your name is' />`
```

Checking back with your browser we should be seeing your name there! but why is your name appearing below this line? People fairly familiar probably know that div's are block-level elements and take up the entire width of the container they are within. We don't want that so let's fix this. as we can see in the Name Component the div already has a spot to accept props to define its class. (in es2015 class has another meaning so className must be used instead to declare a class.) Our CSS file already has a class called 'inline' that will fix this.  Your task now is to use props to make Hello and your name appear on the same line.

## Release 3 - Creating a Website
