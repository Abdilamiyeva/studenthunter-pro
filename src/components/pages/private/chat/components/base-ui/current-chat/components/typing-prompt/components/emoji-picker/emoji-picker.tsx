import {EmojiIcon} from '@/icons'
import {useEffect, useRef, useState} from 'react'
import Picker from 'emoji-picker-react'

import {Props} from './types'
export const EmojiPicker = ({handleEmoji}: Props) => {
  const [showEmoji, setShowEmoji] = useState(false)
  const emojiContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation()
      if (!emojiContainerRef?.current?.contains(e.target as Node)) {
        setShowEmoji(false)
      }
    })

    return () =>
      window.removeEventListener('click', (e: MouseEvent) => {
        e.stopPropagation()
        if (!emojiContainerRef?.current?.contains(e.target as Node)) {
          setShowEmoji(false)
        }
      })
  }, [])

  return (
    <div className="flex items-center relative" ref={emojiContainerRef}>
      {showEmoji && (
        <div className="absolute top-[-470px]">
          <Picker onEmojiClick={handleEmoji} lazyLoadEmojis={true} searchDisabled={true} />
        </div>
      )}
      <button onClick={() => setShowEmoji(!showEmoji)} type="button">
        <EmojiIcon className="text-sky-1 w-6 h-5" />
      </button>
    </div>
  )
}
