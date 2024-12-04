import {SendIcon} from '@/icons'
import {useState} from 'react'
import {FilePicker} from './components/file-picker'
import {EmojiPicker} from './components/emoji-picker'
import {EmojiClickData} from 'emoji-picker-react'

export const TypingPrompt = () => {
  const [messagevalue, setMessageValue] = useState('')

  const handleEmoji = (emojiData: EmojiClickData) => {
    setMessageValue(messagevalue + emojiData.emoji)
  }

  const handleEnter = (e: any) => {
    if (e.key === 'Enter') {
      // Message submission here....

      setMessageValue('')
    }
  }

  const handleFile = () =>
    // e: ChangeEvent<HTMLInputElement>
    {
      // File submission here
    }
  return (
    <>
      <div className="w-full px-5 py-4 relative">
        <div className="rounded-lg border h-auto border-blue-4  px-4 py-3 bg-white">
          <div className="flex items-center">
            <FilePicker handleFile={handleFile} />
            <EmojiPicker handleEmoji={handleEmoji} />
            <input
              value={messagevalue}
              onChange={e => setMessageValue(e.target.value)}
              onKeyUp={handleEnter}
              className="w-full px-3"
              placeholder="Type a message..."
            />
            <button type="button">
              <SendIcon className="text-sky-1 w-6 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
