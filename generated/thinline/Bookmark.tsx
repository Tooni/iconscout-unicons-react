import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBookmark = (
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
    <path d="M16 2H8a3.003 3.003 0 0 0-3 3v16.5a.5.5 0 0 0 .75.434l6.25-3.6 6.25 3.6A.5.5 0 0 0 19 21.5V5a3.003 3.003 0 0 0-3-3m2 18.635-5.75-3.312a.51.51 0 0 0-.5 0L6 20.635V5a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBookmark)
export default ForwardRef
