import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgIcons = (
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
    <path d="M13.6 10.9c.1.1.2.1.4.1h7c.6 0 1-.4 1-1 0-.2 0-.3-.1-.4l-3.5-7c-.3-.5-.9-.7-1.4-.4-.1.1-.3.2-.4.4l-3.5 7c-.2.4 0 1 .5 1.3m3.9-5.7L19.4 9h-3.8zM6.5 2C4 2 2 4 2 6.5S4 11 6.5 11 11 9 11 6.5 9 2 6.5 2m0 7C5.1 9 4 7.9 4 6.5S5.1 4 6.5 4 9 5.1 9 6.5 7.9 9 6.5 9m4.2 4.3c-.4-.4-1-.4-1.4 0l-2.8 2.8-2.8-2.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.8 2.8-2.8 2.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l2.8-2.8 2.8 2.8c.4.4 1 .4 1.4 0s.4-1 0-1.4l-2.8-2.8 2.8-2.8c.4-.4.4-1 0-1.4M21 13h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1m-1 7h-5v-5h5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgIcons)
export default ForwardRef
