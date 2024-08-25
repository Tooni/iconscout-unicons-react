import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBriefcaseAlt = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M19 6.5h-3v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3m-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13a21 21 0 0 0 3 .94v.59a1 1 0 0 0 2 0v-.21a23 23 0 0 0 3 .21 23 23 0 0 0 3-.21v.21a1 1 0 0 0 2 0v-.59a21 21 0 0 0 3-.94Zm0-7.69a20.4 20.4 0 0 1-3 1v-.31a1 1 0 0 0-2 0v.74a20.1 20.1 0 0 1-6 0v-.74a1 1 0 0 0-2 0v.33a20.4 20.4 0 0 1-3-1V9.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBriefcaseAlt)
export default ForwardRef
