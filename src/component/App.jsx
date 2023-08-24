import React, { useContext } from 'react'
import "./index.css"
import DisplayMessage from './displayMessage'
import ItemList from './itemList'
import { List } from '../ContextAPI'

export default function App(){
    const [ inputValue, setInputValue  ] = React.useState("")
    const [ isEmpty, setIsEmpty ] = React.useState(false)
    const [ addedToList, setAddedToList ] = React.useState(false)
    const [ list, setList ] = React.useState([])
    const { markRead, setMarkRead, messageDeleted, setMessageDeleted } = useContext(List)
    function addToList(){
        setList(prevList => {
            return [
                ...prevList,
                { id: crypto.randomUUID(), litsText: inputValue, read: false }
            ]
        })
        setInputValue("")
        if(inputValue === ""){
            setIsEmpty(true)
            setList(list)
            setTimeout(() => {
                setIsEmpty(false)
            }, 2000)
        }
        if(inputValue){
            setAddedToList(true)
            setTimeout(() => {
                setAddedToList(false)
            }, 2000)
        }
    }
    function removeItem(id){
        setList(prevList => {
            return (
                prevList.filter(item => item.id !== id)
                )
        })
        setMessageDeleted(true)
    }
    if(messageDeleted){
        setTimeout(() => {
            setMessageDeleted(false)
        }, 2000)
    }
    function editItem(id, read){
        setList(prevState => {
            return prevState.map(item => {
                if(item.id === id){
                    return {...item, read}
                }

                return item
            })
        })
    }
    return (
        <article className='list'>
            <div className='header'>
                <h1>Enter The Text</h1>
                <main className='header-input'>
                    {isEmpty ? <DisplayMessage classCSS="error" text="Please Enter To Do" /> : null}
                    {addedToList ? <DisplayMessage classCSS="added" text="To Do added!" /> : null}
                    {messageDeleted ? <DisplayMessage classCSS="error" text="To Do deleted!" /> : null}
                    <input type='text' name='inputValue' placeholder='Enter Text Here!' className='list-input' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button onClick={() => addToList()}>Add</button>
                </main>
            </div>
            <div className='items-list'>
                <ItemList 
                list={list}
                deleteItem={removeItem}
                editItem={editItem}
                 />
            </div>
        </article>
    )
}
