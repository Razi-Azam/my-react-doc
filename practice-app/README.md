# Topcis and screenshots of the examples of the practice session
[1. Hooks](#hooks)
<details>
  <summary>useState Hook with previous state</summary>
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

<details>
  <summary>useState Hook with object</summary>
    <h3>useState with object</h3>
    <img src="https://github.com/Razi-Azam/my-react-doc/assets/106505820/fe12848f-dba2-42d4-9925-aa103e66c399" width="450" height="300" />
    <ul>
      <li>useState hook doesn't merge the state. We have to do it manually.</li>
      <li>Here, we have merged the state using a spread operator.</li>
    </ul>
  
    ```javascript
        <input type="text"
            className='border border-gray-950 bg-slate-200 text-gray-950 w-auto px-4 mx-2'
            value={name.firstName}
            // onChange={(e) => setName({firstName: e.target.value})} Error: here, useState hook will not merge the state
            onChange={(e) => setName({...name, firstName: e.target.value})} //spread the name the set the name property using spread operator to manual merge
        />
      }
    ```

</details>
