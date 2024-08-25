import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgUserNurse = (
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
    <path d="M16.2 12.9s-.1 0 0 0c-.2-.1-.3-.2-.5-.2 2.6-2 3.1-5.8 1-8.4s-5.8-3.1-8.4-1-3.1 5.8-1 8.4c.3.4.6.7 1 1-.1.1-.3.1-.4.2h-.1c-3.2 1.5-5.4 4.5-5.8 8 0 .5.4 1 1 1.1h18c.5-.1.9-.6.9-1.1-.3-3.5-2.5-6.5-5.7-8M8 7.6c.2-2.2 2.2-3.8 4.3-3.6 1.9.2 3.4 1.7 3.6 3.6zm4 8.6-1.9-1.9q1.95-.45 3.9 0z" />
  </svg>
)
const ForwardRef = forwardRef(SvgUserNurse)
export default ForwardRef
