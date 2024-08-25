import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgUserMd = (
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
    <path
      d="M17.998 8.064 6.003 8.11l-.277-3.325A3 3 0 0 1 8.17 1.482l.789-.143a17 17 0 0 1 6.086 0l.786.143a3 3 0 0 1 2.443 3.302Z"
      opacity={1}
    />
    <path
      d="M6.009 8.109a5.994 5.994 0 0 0 11.984-.045Z"
      opacity={0.25}
    />
    <path
      d="m17.198 13.385-4.49 4.49a1 1 0 0 1-1.415 0l-4.491-4.49a9.95 9.95 0 0 0-4.736 7.44 1 1 0 0 0 .994 1.108h17.88a1 1 0 0 0 .994-1.108 9.95 9.95 0 0 0-4.736-7.44"
      opacity={1}
    />
    <path
      d="M15.69 12.654a6.01 6.01 0 0 1-7.381 0 10 10 0 0 0-1.507.73l4.491 4.492a1 1 0 0 0 1.414 0l4.491-4.491a10 10 0 0 0-1.507-.731Z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUserMd)
export default ForwardRef
