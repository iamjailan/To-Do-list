import React, { useContext } from 'react'
import "./index.css"
import Error from './error'
import Added from './add'
import ItemList from './itemList'
import { List } from '../ContextAPI'

export default function App(){
    const [ inputValue, setInputValue  ] = React.useState("")
    const [ isEmpty, setIsEmpty ] = React.useState(false)
    const [ addedToList, setAddedToList ] = React.useState(false)
    const [ list, setList ] = React.useState([])
    const { markRead, setMarkRead } = useContext(List)
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
            return prevList.filter(item => item.id !== id)
        })
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
        console.log(read);
    }
    return (
        <article className='list'>
            <div className='header'>
                <h1>Enter The Text</h1>
                <main className='header-input'>
                    {isEmpty ? <Error /> : null}
                    {addedToList ? <Added /> : null}
                    <input type='text' name='inputValue' className='list-input' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
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
