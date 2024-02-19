
# My React Doc

Complete React notes prepared by Razi using codevolution YouTube Channel, react Docs, and other resources, etc.

## Topicss

[1. Components](#react-elements-and-components)

[2. Props and State](#props-and-state)




###  React Elements and Components 
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

###  Props and State 
[Go to Top](#topics)
