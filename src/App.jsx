

// export default App
import React, { useState } from 'react';
import Store from './sneaker/admin/admin'
import { useGlobal } from './context';
const App = () =>{
  const {items} = useGlobal()
  console.log(items)
  return (
    <Store/>
    // <h1>Hello</h1>
  );
}
export default App;