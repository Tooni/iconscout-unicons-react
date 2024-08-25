import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTachometerFast = (
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
    <path d="m15.29 10.29-2.78 2.78A2 2 0 0 0 12 13a2 2 0 0 0-2 2 2 2 0 0 0 .07.51l-.78.78a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l.78-.78A2 2 0 0 0 12 17a2 2 0 0 0 2-2 2 2 0 0 0-.07-.51l2.78-2.78a1 1 0 0 0-1.42-1.42M12 4A10 10 0 0 0 2 14a9.9 9.9 0 0 0 1.69 5.56 1 1 0 0 0 1.66-1.12 8 8 0 1 1 13.3 0 1 1 0 0 0 .27 1.39 1 1 0 0 0 .56.17 1 1 0 0 0 .83-.44A9.9 9.9 0 0 0 22 14 10 10 0 0 0 12 4" />
  </svg>
)
const ForwardRef = forwardRef(SvgTachometerFast)
export default ForwardRef
