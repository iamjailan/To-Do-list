import React from 'react'

export default function DisplayMessage({classCSS, text}) {
  return (
    <div className={classCSS}>
        <p>{text}</p>
    </div>
  )
}
