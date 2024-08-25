import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMicroscope = (
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
    <path d="M20 21h-5.2c.1-.2.1-.4.1-.6 3-1.2 5-4.1 5-7.4 0-2-.8-3.9-2.1-5.4l.6-.6c.1-.1.2-.2.2-.4l.7-2.1c.1-.4 0-.8-.2-1L17 1.4c-.3-.3-.7-.4-1-.2l-2 .6c-.1 0-.3.1-.4.2L7.2 8.4c-.4.4-.4 1 0 1.4l-1.4 1.4c-.4.4-.4 1 0 1.4l2.1 2.1c.4.4 1 .4 1.4 0l1.4-1.4c.4.4 1 .4 1.4 0L16.5 9c1 1.1 1.5 2.5 1.5 4 0 2.3-1.4 4.4-3.5 5.4-.9-1.4-2.7-1.9-4.1-1-.4.3-.8.6-1 1.1-.4-.2-.8-.3-1.1-.6.4-.1.7-.5.7-.9 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h1.3c1 1.1 2.3 2 3.7 2.5 0 .2.1.4.1.5H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1 0-.5-.4-1-1-1M8.6 12.6l-.7-.7.7-.7.7.7zM12 21c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgMicroscope)
export default ForwardRef
