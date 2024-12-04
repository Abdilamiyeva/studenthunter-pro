import React from 'react'
import {Props} from './types'

export const Summary = ({summary}: Props) => (
  <React.Fragment>
    {summary ? (
      <p className="text-sm font-normal leading-normal text-blue-2">{summary}</p>
    ) : (
      <div className="text-blue-2 flex justify-center items-center h-20">
        <p>Summary Not found</p>
      </div>
    )}
  </React.Fragment>
)
