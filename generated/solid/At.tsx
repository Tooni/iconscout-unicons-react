import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAt = (
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
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.8 0 3.5-.5 5-1.3.5-.3.6-.9.4-1.4-.3-.5-.9-.6-1.4-.4-3.8 2.2-8.7.9-10.9-2.9S4.2 7.3 8 5.1s8.7-.9 10.9 2.9c.7 1.2 1.1 2.6 1.1 4v.8c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8V8.5c0-.6-.4-1-1-1-.5 0-.9.3-1 .8-2-1.4-4.9-.9-6.3 1.1s-.9 4.9 1.1 6.3c1.9 1.3 4.4 1 5.9-.7 1.3 1.6 3.6 1.9 5.2.7.9-.7 1.5-1.8 1.5-3V12C22 6.5 17.5 2 12 2m0 12.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgAt)
export default ForwardRef
