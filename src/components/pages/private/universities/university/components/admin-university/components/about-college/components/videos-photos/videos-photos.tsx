import {Button, Image} from '@/components/common'
import {EditIcon} from '@/icons'
import {EditForm} from './components'
import {useState} from 'react'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'

export const VideosPhotos = ({university}: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <section id="media" className="section">
      <div className="w-full py-4 px-5 sm:py-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <h1 className="font-bold text-2xl leading-9 text-blue mb-2 sm:mb-0">Videos & Photos</h1>
          <Button
            onClick={() => setOpen(true)}
            icon={<EditIcon className="w-3 h-3" />}
            className="rounded py-1.5 px-7 text-sm"
          >
            Edit
          </Button>
        </div>
        {university.media?.length ? (
          <>
            {/* MIGHT BE USED LATER ON:
          <div className="w-full grid grid-cols-1 relative">
            <Image
              src="/images/pages/universities/university.png"
              className="w-full max-w-none"
              imageClassName="w-full rounded-lg h-96"
            />
            <div className="text-white cursor-pointer py-2 px-7 absolute bottom-5 right-5 rounded-full bg-black bg-opacity-60 ">
              +10 more
            </div>
          </div>
        */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {university.media?.map((mediaPicture, index) => (
                <Image
                  key={index}
                  src={getImageURL(mediaPicture)}
                  alt={mediaPicture}
                  className="min-w-full h-32"
                  imageClassName="min-w-full rounded-lg h-32"
                />
              ))}
            </div>
            {/* MIGHT BE USED LATER ON:
              <Button icon={<GalleryIcon />} className="py-2 sm:py-3 px-4 sm:px-7 mt-11">
                View all images
              </Button>
            */}
          </>
        ) : (
          <div className="grid place-content-center text-blue-2">Nothing to see</div>
        )}
        <EditForm close={() => setOpen(false)} open={open} university={university} />
      </div>
    </section>
  )
}
