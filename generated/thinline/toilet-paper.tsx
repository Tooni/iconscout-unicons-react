import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgToiletPaper = (
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
    <path d="m22.4 21.2-.6-.8c-1.1-1.3-1.7-3-1.7-4.8V7.5c0-3-2.5-5.5-5.5-5.5H6C3.2 2 1 4.7 1 8s2.2 6 5 6h4v1.6c0 2 .7 3.9 2 5.4l.6.8c.1.1.2.2.4.2h9c.1 0 .2 0 .3-.1.2-.2.3-.5.1-.7M10 13H8.7c.5-.4.9-.9 1.3-1.4zm-4 0c-2.2 0-4-2.2-4-5 0-2.7 1.8-5 4-5h.1C8.2 3 10 5.3 10 8c0 2.8-1.8 5-4 5m7.2 8-.5-.6c-1.1-1.3-1.7-3-1.7-4.8V8c0-2.1-.9-3.9-2.2-4.9h5.7C17 3 19 5 19 7.5v8.1c0 2 .7 3.9 1.9 5.4zM6 6.2c-.9.1-1.6.9-1.5 1.8-.1.9.6 1.7 1.5 1.7S7.6 8.9 7.5 8c.1-.9-.6-1.7-1.5-1.8m0 2.5c-.3 0-.5-.3-.5-.7s.2-.8.5-.8.5.4.5.8-.2.7-.5.7" />
  </svg>
)
const ForwardRef = forwardRef(SvgToiletPaper)
export default ForwardRef
