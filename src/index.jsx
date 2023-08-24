import React from "react";
import { Provider } from "react";
import App from "./component/App";
import { List } from "./ContextAPI";

export default  function Index(){
    const [ list, setList ] = React.useState([])
    const [ markRead, setMarkRead ] = React.useState(false)
    return (
        <List.Provider value={{list, setList, markRead, setMarkRead}}>
            <App />
        </List.Provider>
    )
}