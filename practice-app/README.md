# Topcis and screenshots of the examples of the practice session
[1. Hooks](#hooks)
- <details>
  <summary>useState Hook</summary>
    <h3>useState with previous state</h3>
    <img src="https://github.com/Razi-Azam/my-react-doc/assets/106505820/044a9165-9655-41f7-b9da-c76b68ae1bf0" width="350" height="100" />
  
    ```javascript
      const incrementFive = () => {
      for(let i = 0; i < 5; i++) {
        // setCount(count + 1) //Bug: shows 1 everytime the button is clicked because the count is not incremented based on the previous value.
        setCount(prev => prev + 1) // increment by 1 beucase the count uses the prev value to make increment
      }
      }
    ```
  </details>
