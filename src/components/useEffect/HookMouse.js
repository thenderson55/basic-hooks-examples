import React, {useState, useEffect} from 'react'

function HookMouse() {
  const [coords, setCoords] = useState({ x: 0,  y: 0})


  useEffect(() => {
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  const logMousePosition = (e) => {
    setCoords({ x: e.clientX, y: e.clientY})
  }

  return (
    <div>
      <div>X - {coords.x}  Y - {coords.y}</div>      
    </div>
  )
}

export default HookMouse
