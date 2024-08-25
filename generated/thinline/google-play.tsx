import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgGooglePlay = (
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
    <path d="M20.9 11.1c-.4-.2-4-2.3-4-2.3L4.6 1.7c-.2-.2-.6-.2-.9-.1 0 0-.1 0-.1.1-.4.1-.6.5-.6.9v19c0 .3.2.7.4.8h.1c.1 0 .2.1.3.1.2 0 .4-.1.6-.2.4-.2 12.4-7.2 12.4-7.2l4-2.3q.6-.3.6-.9c.1-.3-.1-.7-.5-.8m-5.1-1.8-2 2-7.4-7.5zM4 21V2.9l9.2 9.1zm2.4-1 7.4-7.4 2 1.9c-1.6 1.1-6.4 3.8-9.4 5.5m14-8-3.7 2.1-2.1-2.1 2.2-2.1c.8.4 3 1.7 3.6 2.1" />
  </svg>
)
const ForwardRef = forwardRef(SvgGooglePlay)
export default ForwardRef
