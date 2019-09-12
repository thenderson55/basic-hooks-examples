import React from 'react'

// https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891

function Button({ handleClick, children }) {
  console.log('button', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default React.memo(Button)

