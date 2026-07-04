import { memo, useState } from 'react'
import { useStateSelector } from '../../contexts/Store'
import BezRelz from '../BezRelz/BezRelz'
import QuickLook from '../QuickLook/QuickLook'

const getElement = mode => {
  switch(mode) {
    case null:
    case 'opened':
    case 'default':
      return 'BezRelz'
    case 'searching':
      return 'QuickLook'
    default: throw new Error('Unknown mode: ' + mode)
  }
}

function ActiveElements() {
  // mode
  const mode = useStateSelector(store => store.mode)
  // current element
  const [currentElement, setCurrentElement] = useState(getElement(mode))

  function handleAnimationEnd() {
    setCurrentElement(getElement(mode))
  }

  return (
    <>
      <BezRelz
        visibility={currentElement === 'BezRelz'}
        onAnimationEnd={handleAnimationEnd}
        />
      <QuickLook
        visibility={currentElement === 'QuickLook'}
        onAnimationEnd={handleAnimationEnd}
        />
    </>
  )
}

export default memo(ActiveElements)