# Responsive eCommerce  For Shoes Store Using React
Assingment that contains a  responsive ecommerce design and React Simple Digital Clock
by using:

- ## props
  A technique for sharing code between React components using a prop whose value is a function.


- ## React Hooks
  Which let us use state and other React features without writing a class.
  in this exercise, I used :
   - useState
   - UseEffect
   - setInterval a method that calls a function or runs some code after specific intervals of time, as specified    through the second parameter. 

  # Example Using Hooks and props:


  ```js
  import React, { useState, useEffect } from 'react';

  function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
  }
   ```js

# Contributing

External contributions are very welcome !



