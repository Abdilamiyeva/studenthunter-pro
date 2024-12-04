import {GalleryIcon} from '@/icons'
import {Button, Image} from '@/components/common'

export const Media = () => (
  <section id="media" className="section">
    <div className="w-full py-4 px-5 sm:py-6 sm:px-8 ">
      <h1 className="font-bold text-2xl leading-9 text-blue mb-4">Videos & Photos</h1>
      <div className="grid grid-cols-1 relative ">
        <Image
          src="/images/pages/universities/university.png"
          className="w-full   max-w-screen-2xl "
          imageClassName="w-full object-cover  rounded-lg h-auto"
        />
        <div className="text-white cursor-pointer py-2 px-7 absolute bottom-5 right-5 rounded-full bg-black bg-opacity-60 ">
          +10 more
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {new Array(3).fill(1).map((_, index) => (
          <Image
            key={index}
            src="/images/pages/universities/university.png"
            className="w-full h-auto"
            imageClassName="w-full rounded-lg h-auto"
          />
        ))}
      </div>
      <Button icon={<GalleryIcon />} className="py-2 sm:py-3 px-4 sm:px-7 mt-11">
        View all image
      </Button>
    </div>
  </section>
)
