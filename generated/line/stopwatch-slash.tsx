import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgStopwatchSlash = (
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
    <path d="M10.6 5.63a1 1 0 0 0 .36 2 6 6 0 0 1 1-.09 6 6 0 0 1 6 6 6 6 0 0 1-.09 1 1 1 0 0 0 .8 1.16h.18a1 1 0 0 0 1-.82A7.5 7.5 0 0 0 20 13.5a8 8 0 0 0-1.7-4.91l.91-.9a1 1 0 0 0-1.42-1.42l-.9.91A8 8 0 0 0 12 5.5a7.5 7.5 0 0 0-1.4.13M10 4.5h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m3.49 9.08v-.16l1.34-1.33a1 1 0 1 0-1.42-1.42L12.08 12h-.16L5.71 5.79a1 1 0 0 0-1.42 1.42l.48.48.91.91A8 8 0 0 0 16.9 19.82l1.39 1.39a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM12 19.5A6 6 0 0 1 7.11 10l3.4 3.39v.08A1.5 1.5 0 0 0 12 15h.08l3.39 3.4A6 6 0 0 1 12 19.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgStopwatchSlash)
export default ForwardRef
