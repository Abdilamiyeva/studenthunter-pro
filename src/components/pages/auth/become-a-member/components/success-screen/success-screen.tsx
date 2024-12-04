import {Button, Image} from '@/components/common'

export const SuccessScreen = () => (
  <div>
    <div className="flex justify-center">
      <Image
        src="/images/pages/auth/become-a-member/confirmation-clock.svg"
        alt="Confirmation clock"
        imageClassName="mb-10 w-[294px] h-[245px]"
      />
    </div>
    <h1 className="text-8xl text-center font-bold leading-17 mb-2">Wait for confirmation!</h1>
    <p className="text-blue-2 text-center text-2xl leading-8.5 mb-7 max-w-[784px] mx-auto">
      We sent your request to admins, please wait until you receive confirmation by email or contact them directly
    </p>
    <div className="flex items-center justify-center gap-5">
      <Button variant="outline" className="rounded py-4 px-16">
        Send email
      </Button>
      <Button variant="outline" className="rounded py-4 px-16">
        Give a call
      </Button>
    </div>
  </div>
)
