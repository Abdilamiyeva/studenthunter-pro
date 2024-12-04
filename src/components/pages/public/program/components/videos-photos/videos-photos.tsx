import {Button, Image, ImageSilder} from '@/components/common'
import {GalleryIcon} from '@/icons'
import {Props} from './types'
import {getFindImage, getImageURL} from '@/utils/get-image'
import {useState} from 'react'

export const VideosPhotos = ({program}: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full py-4 md:px-5">
      <h1 className="font-bold md:text-2xl leading-9 text-blue mb-4">Media</h1>
      <div className="grid grid-cols-1 relative">
        <Image
          src={getImageURL(getFindImage(program.university_id?.media as any))}
          className="max-w-full w-full "
          imageClassName="w-full rounded-lg md:h-96"
        />
        {program.university_id?.media?.length > 10 && (
          <div className="hidden md:block text-white cursor-pointer py-2 px-7 absolute bottom-5 right-5 rounded-full bg-black bg-opacity-60 ">
            +10 more
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 md:gap-4 gap-2 md:mt-4 mt-2">
        {program.university_id?.media
          ?.slice(0, 6)
          .map((image, index) => (
            <Image
              key={index}
              src={getImageURL(image)}
              className="max-w-full w-full md:h-32"
              imageClassName="w-full rounded-lg md:h-32"
            />
          ))}
      </div>
      <Button onClick={() => setOpen(true)} icon={<GalleryIcon />} className="md:py-3 px-7 md:mt-11 mt-8">
        View image GalleryIcon
      </Button>
      <ImageSilder open={open} close={() => setOpen(false)} images={program.university_id?.media} />
    </div>
  )
}
