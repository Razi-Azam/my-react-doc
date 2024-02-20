
# My React Doc

Complete React notes prepared by Razi using codevolution YouTube Channel, react docs, DEV, Wikipedia, and stackoverflow.

Special Credit: [Codevolution](https://youtu.be/QFaFIcGhPoM?si=eqV1RlPn3DNjwfPN)

## Topics

[1. Components](#react-elements-and-components)

[2. Props and State](#props-and-state)




##  React Elements and Components 
[Go to Top](#topics)

## Root Component:
- It is named as App component in a React application.
- Components are independent and reusable bits of code.
- Components are similar to JavaScript functions that takes Props as arguments but returns React elements.

### React Elements:
- These are objects that describes what we see on the screen.
```javascript
const element = React.createElement("div", null, 'Hello World');
```
OR

```javascript
const element = React.createElement("div", {children: 'Hello World'});
```
- When logged in the Console:
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/e0dd8d7b-75cc-4ec8-9522-02c572aebc09)

- The text "Hello World" is the element's child.
- To render the element, we have to get the root element.
```javascript
const rootElement = document.getElementById('root');
```
- Then We can use the react-dom that will take care about rendering the element.
```javascript
ReactDOM.render(element, rootElement);
```
- The another or standard way of creating a react element is using JSX.
- JSX is an extension to JavaScript to support syntax that is similar to HTML code that can be written to create these DOM elements.
- The following is the standard way of creating the react element.
```javascript
const element = <div>Hello World</div>;
```
- It is not required by React to use JSX. Instead, we can use the createElement API for the same.

### Why JSX?
- React follows the principle of rendering logic coupled with Ul logic. So React uses JSX for rendering both markup and logic together in a single file instead of keeping them separately. 
- Using JSX, it becomes easier to work with the UI inside JavaScript code.
- We can embed any JavaScript expression inside JSX using curly braces.
```javascript
const name='John';

const element = <div>Hello (name) </div>

ReactDOM.render(
element,
document.getElementById('root')
);

```
- We can assign JSX to a variable.
```javascript
const element=<div>Hello World</div>
```
- We can also return JSX from a function.
```javascript
const getAgeDescription=(age)=>{

    if (age<50) {
        return <h1>You're young</h1>; 
    }
    
    return <h1>You're old</h1>;
}

```
### Babel
- There is an issue with the JSX that it cannot be understood by the browsers. 
- So Babel is the transpolar or compiler that converts JSX syntax to something that can be understood by the Browser 
- Babel converts ECMAScript 2015+ (ES6+) code into backwards-compatible JavaScript code that can be run by older JavaScript engines

is Babel a transpiler or compiler or both?
- It is both or can be used interchangeably.
- A transpiler converts the one code to other in the same level (Babel converts JSX to something that older browsers can understand)
- A compiler converts the programming language into machine code that is understood by the machine.

#### Babel Website to see the conversion of React and its equivalent JS code.
#### [https://babeljs.io/](https://babeljs.io)
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/175fd815-6aa3-4e08-850c-89282f1bc2ca)

### Types of Components:
- Functional Component
- Class Component

### Functional Component
- These are, literally, JS functions, that takes props as an argument and returns JSX.
```javascript
function Hello(props){ 
    return <div>Hello {props.name}</div>
}   
```
#### Advantages of functional components:
- Easy to read and understand.
- Absence of "this" keyword.
- Easy to test because we don't have to think about hidden state and side effects.
- It requires less code and faster bundles.
- It reduces coupling (Coupling refers to the degree of dependency between one entity to another. Low coupling in code means that we can change one area of our code without impacting another due to which our code becomes maintainable.).

#### Disadvantages of functional components:
- Not suitable for handling complex logic as compared to class. 
- Absence of "this" keyword.

### Class Component
- These are ES6 classes extend the Component class of the React library (React.Component) and create a render function which returns a React element.

```javascript
class Hello extends React.Component{
    render(){
        return <div>Hello {this.props.name}</div>
    }
}
```

#### Advantages of class components:
- More feature rich. 
- Maintain their own private data (state).
- Can handle complex Ul logic.
- Provide lifecycle methods.
- It is called smart or Stateful, or container component.

#### Disadvantages of class components:
- Presence of "this" keyword. It quite tricky for the beginners. 
- We can't think about a solution without using state.

#### A React component with or without JSX:
NOTE: the commented code is "JSX" and the next return statement contains the React element without JSX.

```javascript
import React from 'react'

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Razi</h1>
    //     </div>
    // )
    return React.createElement (
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Razi')
    )
}
```
#### JSX differences

| Color             | JSX                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Class | className  |
| for | htmlFor  |

---
##  Props and State 
[Go to Top](#topics)
