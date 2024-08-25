import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHistoryAlt = (
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
    <path d="M16.728 3.18C12.31.81 6.915 2.105 4 6V3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H4.523a8.99 8.99 0 0 1 7.45-4A9 9 0 0 1 12 21a.5.5 0 0 0 0 1 10 10 0 0 0 8.81-5.272c2.614-4.868.786-10.934-4.082-13.547M12 8a.5.5 0 0 0-.5.5V12a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 0-1h-2v-3A.5.5 0 0 0 12 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgHistoryAlt)
export default ForwardRef
