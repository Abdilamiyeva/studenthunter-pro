import React from 'react'
import {Props} from './types'

export const Requirements = ({requirements}: Props) => (
  <React.Fragment>
    <div className="pr-[25px]">
      {requirements.length ? (
        <React.Fragment>
          <ul className="flex w-full border justify-between border-blue-4 bg-blue-7 rounded-md md:mt-10 text-center">
            {requirements?.map((item, index) => (
              <li
                key={item._id}
                className={`flex flex-col py-3 px-5 w-full ${
                  requirements.length - 1 !== index ? 'border-r' : ''
                } border-blue-4`}
              >
                <span className="text-sm text-blue-3">{item.exam_name}</span>
                <span className="font-bold">{item.min_score}+</span>
              </li>
            ))}
          </ul>
          <p className="text-sm  text-blue-3 leading-5.5 md:leading-6 mt-3">
            You need to have one of these exam scores in order to get admission in Hult University
          </p>
        </React.Fragment>
      ) : (
        <div className="text-blue-2 flex justify-center items-center h-20">
          <p>Not Found in the specified repository</p>
        </div>
      )}
    </div>
  </React.Fragment>
)
