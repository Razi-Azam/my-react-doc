
# My React Doc

Complete React notes prepared by Razi using codevolution YouTube Channel, react docs, DEV, Wikipedia, and stackoverflow.

Special Credit: [Codevolution](https://youtu.be/QFaFIcGhPoM?si=eqV1RlPn3DNjwfPN)

## Topics

[1. Components](#react-elements-and-components)

[2. Props and State](#props-and-state)

[3. Destructuring Props](#destructuring-props)

[4. Event Handling](#event-handling)




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
### Props
- It is just an object that contains the attributes and their values which have been passed from the parent component.
- It is always passed from parent to child.
- App.js
  ![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/b31e81a1-15a4-4011-ae45-26214fcaa523)
- Greet.js
  ![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/2de27fba-40c3-48b8-8f1f-4870d42694d4)
- Console Output:
- ![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/eed1d6a7-294e-47d1-822e-a8a4c9c04d7e)
- It is used as an argument to pass into React components.
- It is passed to components via HTML attributes.
- It is accessed in JSX inside curly braces.
  ![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/cf08eaa1-1b4d-4ddf-b522-ae8d1aee7e6a)
- It is immutable (It is read-only and its value cannot be changed.).
- The children of components can be passed as props and accessed as “props.children” in other components.
  ![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/bf06f2ac-299f-4f4f-bdc7-a6c415f5e884)
- The paragraph '<'p'>' is the children of the Greet components. It can be accessed in the child component as “props.children”.
  ![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/680e576c-f069-4219-8928-6fe7db3b3e82)


### State
- It is built-in object that contains data or information about the component.
- It is privately maintained inside the component.
- A component’s state changes over time. Whenever it changes, the component re-renders.

### Lab
- Initialize the state object using the class constructor.
- The super() method has been called within the constructor. Because we extend the React Component class and a call has to be made to the base class constructor.
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/c424b9df-bb80-47dd-919e-fa9fe73b356a)
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/d6467556-c480-4926-a86b-7657c99e6f81)
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/d7e64d51-78bd-4f1c-aaf7-21588d62aa9d)
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/3752e2f0-b69d-4b5d-928e-90737cedda51)

### Difference between Props and State:
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/77106860-4481-48dc-873a-9b18eefdaf2e)

### setState
- It helps in changing the state in React class components.
- It enqueues change to the component state and tell React that this component and its children need to be re-rendered with the updated state.
- Calls to setState method are asynchronous.

##### NOTE: Synchronous means the code runs in a particular sequence of instructions given in the program, whereas asynchronous code execution allows to execution of the upcoming instructions immediately. Because of asynchronous programming, we can avoid the blocking of tasks due to the previous instructions.

### Sample Code:
```javascript
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                console.log('Callback value', this.state.count)
            }
        )
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button 
                    onClick={this.increment()}>Increment
                </button>
            </div>
        )
    }
}

export default Counter
```
### Do’s and Don’t’s
- Always Place the code (that needs to be executed just after the state update) inside the callback function as a second parameter of the setState method.
- ![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/0c13e93b-6812-4867-b12c-1653d3882fae)
- The first value in the console, which is 0, is coming from line no. 21 as a synchronous call.
- The second value, which is 1, is coming from the console.log which is inside the callback and updated when the state is changed.
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/adb58321-7d15-46e2-a8f4-966f579f580c)

#### Scenario: call the increment method five times and log the value.
#### Code:'
```javascript
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button 
                    onClick={this.incrementFive()}>Increment
                </button>
            </div>
        )
    }
```
#### Output:
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/3302d86e-06a3-4b91-8f20-694b5c42c5e7)
#### Bug: ❌
The value changes to 1 instead of 5. The ‘0’ is logged five times instead of incrementing to 5.
#### Reason? 🤔
This happens because React may group multiple setState calls into a single update for a better performance. That’s why all the setState calls are done in one single go and the update value doesn’t carry over between the different calls.
#### Solution ✅
When you have to update the state based on the previous state, pass a function as an argument to the setState method instead of passing a regular object.
```javascript
increment() {
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {
        //         console.log('Callback value', this.state.count)
        //     }
        // )
        this.setState(prevState => ({
            count: prevState.count + 1
        }))

        console.log(this.state.count)
    }
```
#### Note 📝 Here, 0 is showing five times because of the synchronous ‘concole.log’. To show the update value either click one more time or put the console statement as the second parameter in the set state method.

#### Output:
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/48c1edc1-7f32-4724-a2f6-fde3cd65c1ba)
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/e9708bc4-86f0-4a5e-897e-c3018f1ff232)

- If state is depend upon props as well, then we can pass props as the second parameter to the setState method.
```javascript
        //second parameter is props object
        //it is used when state is dependent on props as well
        this.setState((prevState, props) => ({
            count: prevState.count + props.addValue
        }))
```

### Summary
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/14a128ef-9428-4dbe-b1d1-c262b9881af6)

---

## Destructuring Props
[Go to Top](#topics)
#### What is Destructuring?
It is an ES6 feature of JS to unpack values from arrays or properties from objects
Into distinct variables.
#### In Functional Components:
Passing props to the component named Greek:
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/24ecc43e-c43e-4c6c-8f4f-356720902829)

#### Two ways of Destructuring:
- [1] Destructure it in the function parameter itself.
```javascript
import React from 'react'

const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}

export default Greet
```
##### NOTE: a.k.a = Also Known AS
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/1c1f9639-ad61-45b9-a08d-7e6cc29743f4)
- [2] Destructure it in the function body
```javascript
import React from 'react'

const Greet = props => {
    const {name, heroName} = props
    
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}

export default Greet
```
#### In Class Components:
- Destructure it inside the render method.
```javascript
import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        //destructuring props
        const {name, heroName} = this.props
        return (
            <div>
                hello {name} a.k.a {heroName}
            </div>
        )
    }
}

export default Welcome
```

---
## Event Handling
[Go to Top](#topics)
### Event Handling in Functional Components:
- React events are named using camel case. For example, onclick in vanilla JS but onClick in React.

| Vanilla JS            | React                                                                |
| ----------------- | ------------------------------------------------------------------ |
| <button onclick=””>Click</button> | <button onClick={}>Click</button> |
| onclick=”clickHandler()” |  onClick={clickHandler} |
| Here, a function call “clickHandler()” is passed to the onclick prop. | Here, a function handler {clickHandler} is passed to the onClick prop. |

- If we pass “clickhandler()” function call instead of “clickHandler” function, the react rendered it automatically and it will not do anything even after clicking on the button. So It is recommended to pass a function handler instead of a function call.
```javascript
import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("Clicked")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
```

### Event Handling in Class Components:
- Here, the method is accessed using “this” keyword.
```javascript
	import React, { Component } from 'react'
	
	class ClassClick extends Component {    
    clickHandler(){
        console.log("Button is Clicked")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
```
### Binding Event Handlers:
#### Code:
```javascript
import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Good Bye'
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Event Bind Button</button>
            </div>
        )
    }
}

export default EventBind
```
#### Output:
- When clicked on the “Event Bind Button”
- ![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/6a9e3f51-b60a-4ba6-a9fc-551f35a83936)
- When comment out the setState method and run, the output is:
```javascript
    clickHandler() {
        // this.setState({
        //     message: 'Good Bye'
        // })
        console.log(this)
    }
```
#### Output:
![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/4fa45c70-bf55-499d-8b41-f6bd586df19d)

Here, the keyword “this” inside the handler is undefined.
#### Reason of the Bug:🤔
- The “this” keyword is undefined not because of React but it is because of JS itself.
- In non-strict mode, inside the function, the “this” points to the Global Object. So it won’t show the output as undefined.
- But, in Strict Mode, inside the function, the “this” keyword refers to undefined instead of Global (Window) object. So, when the event handler is called on global object, it calls on an undefined object.
- In JavaScript, class methods are not bound by default unless we specifically bind them, they are just function objects.
➡️For more details on binding: [Click Here to read freecodecamp post](https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/)
##### ✅ Solution:
- The “this” keyword needs to be bound with the React Component so that It should points to the current object instead of the global object.
- For this, a bind keyword is used.

##### ✅1️⃣Approach 1: Binding in the render method:
```javascript
render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Event Bind Button</button>
            </div>
        )
    }
}
```
- When the button is clicked, the updated state is displayed. Also, the “this” inside the console prints the EventBind component. Because it points to the current object.
- ![image](https://github.com/Razi-Azam/my-react-doc/assets/106505820/7b588e69-2d30-4e1d-b3a7-ee5a534829a9)
##### 🤔Issue with this method:
- Every update to the component will cause re-render due to which a brand new handler will be generated on every render. It would impact on the performance in case of larger applications and the components that contains nested children components.

##### ✅2️⃣Approach 2: Using Arrow function in the render method:
- Here, the parenthesis is required with the event handler because we are calling the event handler and return the value.
```javascript
render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button 
                        onClick={this.clickHandler.bind(this)}>Event Bind Button
                    </button> */}
                <button 
                    onClick={() => this.clickHandler()}>Event Bind Button
                </button>
            </div>
        )
    }
```
##### 🤔 Issue: This approach would also have impact on the performance.

##### ✅3️⃣Approach 3: Binding in the class constructor.
```javascript
constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button 
                        onClick={this.clickHandler.bind(this)}>Event Bind Button
                    </button> */}
                {/* <button 
                    onClick={() => this.clickHandler()}>Event Bind Button
                </button> */}
                <button 
                    onClick={this.clickHandler}>Event Bind Button
                </button>
            </div>
        )
    }
```

#### ✅ Final Approach: ✌🏻
- Use an arrow function as a class property.
```javascript
import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Good Bye'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button 
                        onClick={this.clickHandler.bind(this)}>Event Bind Button
                    </button> */}
                {/* <button 
                    onClick={() => this.clickHandler()}>Event Bind Button
                </button> */}
                <button 
                    onClick={this.clickHandler}>Event Bind Button
                </button>
            </div>
        )
    }
}

export default EventBind
```
#### 📝 NOTE: The recommended approach according to the React Doc is either the Approach 3rd or the Final approach.

### Method as props:
#### Passing props from Parent to Child Component:
- Create a Parent and a child component.
- Define an event handler in the parent component that display a parent object’s name.
- In the child component, create a button.
- Include the child component in the render method of parent component by passing the event handler as props.
- Access the event handler as props in the button click event of the child component.

##### Parent Component:
```javascript
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
```

##### Child Component:
```javascript
import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    );
}

export default ChildComponent;
```

##### App Component:
```javascript
import './App.css';
import ParentComponent from './event-handling/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
```

##### Output:
- When the button is clicked, the alert window display ‘Hello Parent’

### Pass a parameter when calling a parent method from a child component:
- In child Component, use an arrow function and pass a string as an argument.
- In the parent component, include a parameter named ‘childName’ and display it in the alert window as well.

##### Parent Component:
```javascript
    greetParent(childName) {
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
```

##### Child Component:
```javascript
function ChildComponent(props) {
    return (
        <div>
            <button 
            onClick={() => props.greetHandler('child')}
            >Greet Parent
            </button>
        </div>
    );
}
```
