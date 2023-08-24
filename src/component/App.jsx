import React from 'react'
import "./index.css"

export default function App(){
    const [inputValue, setInputValue] = React.useState({
        input: ""
    })
    const [list, setList] = React.useState([])
    function addToList(){
        setList(prevList => {
            return [
                ...prevList,
                { litsText: inputValue.input }
            ]
        })
    }
    return (
        <article className='list'>
            <div className='header'>
                <h1>Enter The Text</h1>
                <main className='header-input'>
                    <input type='text' name='input' value={inputValue.input} onChange={(e) => setInputValue(e.target.value)} />
                    <button onClick={() => addToList()}>Add</button>
                </main>
            </div>
            <div className='items-list'>
            {
                list.map((item, index) => {
                    return (
                    <main className='each-item' key={index}>
                        <p>{item.litsText}</p>
                        <section>
                            <button className='edit'>Edit</button>
                            <button className='delete'>Delete</button>
                        </section>
                    </main>
                    )
                })
            }
            </div>
        </article>
    )
}



// export default function App() {
//     const [text, setText] = React.useState({
//         textInput : "",
//         image: "",
//     })
//     const [arrayList, setArrayList] = React.useState([])

//     function addToList(){
//         setArrayList(prevText => {
//             return [
//                 ...prevText,
//                 { title: text.textInput, image: text.image}
//             ]
//         })
//     }
//   return (
//     <>
//         <section>
//             <input name='textInput' value={text.textInput} onChange={(e) => setText(e.target.value)} type='text' />
//             <input name='image' value={text.image} onChange={(e) => setText(e.target.value)} type='file' />
//             <button onClick={addToList}>Add</button>
//         </section>
//         <ul>
//             {arrayList.map((item, index) => {
//                 return (
//                     <div key={index}>
//                         <li>{item.title}</li>
//                         <img src={item.image} />
//                     </div>
//                 )
//             })}
//         </ul>
//     </>
//   )
// }
