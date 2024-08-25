import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgVolleyball = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M20.59 6.9a1 1 0 0 0-.07-.1A10 10 0 0 0 7.6 3h-.07a10 10 0 0 0-1 17.19l.33.2.1.07A9.93 9.93 0 0 0 12 22h.21a10 10 0 0 0 8.38-15.1M19 8.06a7.6 7.6 0 0 1 .65 1.46 10 10 0 0 0-3-.49.8.8 0 0 0-.31 0 9.8 9.8 0 0 0-3.58.73 7.9 7.9 0 0 1-1.84-1.6 8.16 8.16 0 0 1 8.08-.1M12 4a7.86 7.86 0 0 1 4 1.07A8 8 0 0 0 15 5a10 10 0 0 0-5.2 1.47 8 8 0 0 1-.64-1.94A7.9 7.9 0 0 1 12 4M6 6.71a8.3 8.3 0 0 1 1.33-1.19A9.9 9.9 0 0 0 12 11.61a7.9 7.9 0 0 1-.77 2.88A8 8 0 0 1 6 7zM4 12a8.1 8.1 0 0 1 .36-2.37 10 10 0 0 0 5.7 6.56 7.84 7.84 0 0 1-2.93 2.14A8 8 0 0 1 4 12m7.86 8a7.8 7.8 0 0 1-2.61-.49 9.94 9.94 0 0 0 3.23-3.22A10 10 0 0 0 14 11.41a7.7 7.7 0 0 1 1.78-.36A8 8 0 0 1 11.86 20m4.22-1.12A9.94 9.94 0 0 0 18 13a10.7 10.7 0 0 0-.18-1.88 8.3 8.3 0 0 1 2.17.7V12a8 8 0 0 1-3.91 6.87Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgVolleyball)
export default ForwardRef
