import {BookmarkIcon} from '@/icons'

export const SavedMessages = () => (
  <div className="px-5 py-6  bg-blue-7 active:bg-blue-5 flex justify-between cursor-pointer">
    <div className="flex gap-3">
      <div className="w-9 h-9 rounded-full bg-blue-9 flex justify-center items-center text-white pr-[0.5px]">
        <BookmarkIcon />
      </div>
      <div>
        <p className="text-sm font-semibold">Saved messages</p>
        <p className="text-xs font-normal text-blue-2">Save messages secretly</p>
      </div>
    </div>
    <div>
      <p className="text-xs font-medium text-blue-2">2d ago</p>
    </div>
  </div>
)
