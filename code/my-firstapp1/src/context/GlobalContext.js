import React,{createContext} from 'react'


// props is needed for the flow of data from parent to child component
// context is if we need to pass data to child component who is not immediate child
export const GlobalContext=createContext();

const GlobalContextProvider=(props)=>{
    return (
        <GlobalContext.Provider value={'React js'}>
            {props.childern}
            {/* reads all the childern inside props which is wrapped into GlobalContextProvider */}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;