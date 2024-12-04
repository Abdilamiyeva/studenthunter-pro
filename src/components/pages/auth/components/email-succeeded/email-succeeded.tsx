import {Image, Spinner} from '@/components/common'
import {Props} from './types'
import {useEffect, useMemo, useState} from 'react'

export const EmailSucceeded = ({email, onTryAgain, tryingAgain}: Props) => {
  const [resent, setResent] = useState(false)
  const hiddenEmail = useMemo(() => email.slice(0, 2) + '*******' + email.slice(email.indexOf('@') - 1), [email])

  useEffect(() => {
    if (tryingAgain) {
      setResent(true)
    }
  }, [tryingAgain])

  return (
    <div className="flex flex-col md:grid grid-cols-2 md:h-screen">
      <div className="bg-blue h-44 md:h-full grid place-content-center">
        <Image
          src="/images/logo-white.svg"
          alt="Student hunter"
          imageClassName="lg:w-[500px] md:w-[300px] w-32 lg:h-[500px] md:h-[300px] h-32"
        />
      </div>
      <div className="px-5 md:px-20 py-7 md:py-24 h-full overflow-auto">
        <h1 className="text-4xl md:text-8xl font-bold leading-10 md:leading-17 text-center mb-2 md:mb-5">
          Confirm your email!
        </h1>
        <p className="text-blue-2">
          We sent the verification link to <span className="text-blue">{hiddenEmail}</span> please click that to
          continue
        </p>
        <div className="border border-blue-4 my-7" />
        <div className="flex items-center gap-2">
          <span className="text-blue-2">Email not sent ?</span>
          {tryingAgain ? (
            <Spinner className="w-4 h-4 border-[3px] mx-4" />
          ) : resent ? (
            <span>Email successfully resent!</span>
          ) : (
            <button type="button" onClick={onTryAgain} className="text-blue font-bold">
              Try again
            </button>
          )}
        </div>
        <Image
          src="/images/sent-email.svg"
          alt="Email Sent!"
          className="!block w-full mx-auto mt-10"
          imageClassName="w-[340px] h-[289px]"
        />
      </div>
    </div>
  )
}
