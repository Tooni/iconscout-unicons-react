import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRepeat = (
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
    <path d="M5.5 17.5H4v-11h7.8l-.8.8c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l2.5-2.5c.4-.4.4-1 0-1.4l-2.5-2.5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.8.8H3c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h2.5c.6 0 1-.4 1-1s-.4-1-1-1M21 4.5h-2.5c-.6 0-1 .4-1 1s.4 1 1 1H20v11h-8.4l.8-.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2.5 2.5c-.4.4-.4 1 0 1.4l2.5 2.5c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.8-.8H21c.6 0 1-.4 1-1v-13c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgRepeat)
export default ForwardRef
