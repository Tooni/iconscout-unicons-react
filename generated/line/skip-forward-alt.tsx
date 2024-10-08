import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSkipForwardAlt = (
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
    <path d="M5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3m1 15a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm14.68-8.35L14 5.66a2.6 2.6 0 0 0-2.64 0A2.74 2.74 0 0 0 10 8v8a2.74 2.74 0 0 0 1.37 2.38 2.57 2.57 0 0 0 2.64 0l6.67-4a2.75 2.75 0 0 0 0-4.7Zm-1 3-6.66 4a.61.61 0 0 1-.63 0A.72.72 0 0 1 12 16V8a.72.72 0 0 1 .36-.64.64.64 0 0 1 .31-.08.63.63 0 0 1 .32.09l6.66 4a.76.76 0 0 1 0 1.28Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSkipForwardAlt)
export default ForwardRef
