import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgImageTimes = (
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
    <path d="M19 10a1 1 0 0 0-1 1v3.39l-1.48-1.48a2.77 2.77 0 0 0-3.93 0l-.7.7-2.48-2.49a2.79 2.79 0 0 0-3.93 0L4 12.6V7a1 1 0 0 1 1-1h8a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a1 1 0 0 0-1-1M5 20a1 1 0 0 1-1-1v-3.57l2.9-2.9a.79.79 0 0 1 1.09 0l3.17 3.17 4.29 4.3Zm13-1a.9.9 0 0 1-.18.53L13.31 15l.7-.7a.78.78 0 0 1 1.1 0L18 17.22Zm2.41-14 1.3-1.29a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0L19 3.59 17.71 2.3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41L17.59 5l-1.3 1.3a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0L19 6.42l1.29 1.29a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgImageTimes)
export default ForwardRef
