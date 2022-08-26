import {useState} from 'react'

function TestComponent() {
  const [navWidth, setNavWidth] = useState('w-0')
  const toggleNav = () => {
    navWidth == 'w-0' ? setNavWidth('w-56') : setNavWidth('w-0')
  }
  return (
    <div className='w-full h-screen bg-blue-100'>
      <button className='bg-red-400 shadow-lg px-2 py-1 inline' onClick={toggleNav}>Toggle</button>

      <div className={`${navWidth} h-screen bg-gray-400 transition-all duration-1000`}>

      </div>
    </div>
  )
}
export default TestComponent