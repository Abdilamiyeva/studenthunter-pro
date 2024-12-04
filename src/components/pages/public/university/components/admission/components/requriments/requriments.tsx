import React from 'react'
import {Props} from './types'

export const Requriments = ({requriments}: Props) => (
  <React.Fragment>
    {requriments.length ? (
      <React.Fragment>
        <ul className="flex w-full border justify-between border-blue-4 bg-blue-7 rounded-md md:mt-10 text-center">
          {requriments?.map((item: any) => (
            <li key={item._id} className="flex flex-col py-3 px-5 w-full border-r border-blue-4">
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
  </React.Fragment>
)
