import React, { useContext } from 'react'

export default function ItemList({list , deleteItem, editItem}) {
  return (
    <>
        {list.length === 0 ? <h1 className='empty-list'>List is Empty Now!</h1> :
                list.map((item) => {
                    return (
                    <main className='each-item' key={item.id}>
                        <p className={item.read ? "read" : null}>{item.litsText}</p>
                        <section>
                            <input type='checkbox' className='edit' value={item.read} onChange={(e) => editItem(item.id, e.target.checked)}/>
                            <button className='delete' onClick={() => deleteItem(item.id)}>Delete</button>
                        </section>
                    </main>
                    )
                })
        }
    </>
  )
}
