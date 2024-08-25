import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgShieldPlus = (
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
    <path d="M14.5 11.5h-2v-2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2h-2c-.3 0-.5.2-.5.5s.2.5.5.5h2v2c0 .3.2.5.5.5s.5-.2.5-.5v-2h2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5M20 3.8c-.1-.3-.3-.4-.6-.4-2.5.5-5 0-7.1-1.5q-.3-.15-.6 0c-2.1 1.4-4.6 2-7.1 1.5h-.1c-.3 0-.5.2-.5.5v8c0 2.9 1.4 5.7 3.8 7.4l3.9 2.8c.1.1.2.1.3.1s.2 0 .3-.1l3.9-2.8c2.4-1.7 3.8-4.5 3.8-7.4V3.8m-1 8.1c0 2.6-1.3 5.1-3.4 6.6L12 21.1l-3.6-2.6C6.3 17 5 14.5 5 11.9V4.5c2.4.4 4.9-.2 7-1.5 2.1 1.3 4.6 1.9 7 1.5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgShieldPlus)
export default ForwardRef
