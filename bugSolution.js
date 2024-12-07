```javascript
// bugSolution.js
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way to update state: use the setter function
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Functional update
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Text>Count: {count}</Text>
  );
};

export default MyComponent;
```