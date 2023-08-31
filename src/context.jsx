import React from 'react'
import { useContext,useState } from 'react'
const AppContext = React.createContext();
function AppProvider({children}) {
    const [items, setItems] = useState(0);
    const [modal, setModal] = useState(false);
    const [navigation, setNavi] = useState(false);
  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        modal,
        setModal,
        navigation,
        setNavi,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () =>{
    return(useContext(AppContext))
}

export default AppProvider
