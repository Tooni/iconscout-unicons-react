import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRocket = (
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
    <path d="M22.6 2.1c-.1-.3-.4-.6-.7-.7-4.2-1.1-8.5.2-11.4 3.6L9.4 6.3l-2.7-.6C5.4 5.2 4 5.8 3.4 7l-2.2 3.9q-.3.45 0 .9c.1.3.4.5.7.6l3.1.7c-.3.8-.4 1.6-.6 2.4 0 .3.1.6.3.8l3.1 3.1c.2.2.4.3.7.3h.1c.9-.1 1.7-.2 2.5-.5l.6 3c.1.3.3.6.6.7.1.1.3.1.4.1.2 0 .3 0 .5-.1l3.9-2.2c1.1-.6 1.7-2 1.4-3.3l-.7-2.8 1.2-1.1c3.3-2.8 4.7-7.3 3.6-11.4M7.3 8.8c-.6.8-1.2 1.6-1.6 2.4l-2.1-.5L5.1 8c.2-.4.6-.5 1.1-.4l1.7.4zM16 18.9l-2.7 1.5-.4-2c.9-.4 1.7-1 2.4-1.6l.7-.7.4 1.7c.2.5-.1 1-.4 1.1m.7-10.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.6 1.5-1.5 1.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgRocket)
export default ForwardRef
