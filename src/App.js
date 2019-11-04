import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  console.log(useState(0));
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default App;
