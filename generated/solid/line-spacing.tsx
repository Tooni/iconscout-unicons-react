import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLineSpacing = (
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
    <path d="M10 8h11c.6 0 1-.4 1-1s-.4-1-1-1H10c-.6 0-1 .4-1 1s.4 1 1 1m-4.3 7.3V8.7q.3.3.6.3c.3 0 .5-.1.7-.2.4-.4.5-1 .1-1.4l-1.7-2C5.2 5.1 5 5 4.7 5s-.6.1-.8.4l-1.7 2c-.3.4-.3 1 .2 1.4.4.3.9.3 1.3 0v6.6c-.4-.3-.9-.4-1.3 0s-.5 1-.1 1.4l1.7 2c.1.1.4.2.7.2s.6-.1.8-.4l1.7-2c.4-.4.3-1.1-.1-1.4-.5-.3-1.1-.3-1.4.1M21 11H10c-.6 0-1 .4-1 1s.4 1 1 1h11c.6 0 1-.4 1-1s-.4-1-1-1m0 5H10c-.6 0-1 .4-1 1s.4 1 1 1h11c.6 0 1-.4 1-1s-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgLineSpacing)
export default ForwardRef
