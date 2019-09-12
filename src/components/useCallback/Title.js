import React from 'react'

function Title() {
  console.log('title')
  return (
    <h2>
      Use callback hook
    </h2>
  )
}

export default React.memo(Title)
