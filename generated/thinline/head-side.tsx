import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHeadSide = (
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
    <path d="M20.5 9.4c0-4-3.2-7.3-7.2-7.4-4.1-.1-7.5 3.2-7.6 7.2l-2.2 4.5v.2c0 .3.2.5.5.5h2V17c0 1.1.9 2 2 2h1v2.5c0 .3.2.5.5.5s.5-.2.5-.5V19h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8c-.6 0-1-.4-1-1v-3c0-.3-.2-.5-.5-.5H4.8l1.9-3.9c0-.1.1-.1 0-.2C6.7 5.9 9.5 3 13 3s6.4 2.8 6.5 6.3l-2.1 7.9v.3l1.1 4.2c.1.2.3.4.5.4h.1c.3-.1.4-.3.4-.6l-1-4.1 2.1-7.8c-.1-.1-.1-.2-.1-.2" />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadSide)
export default ForwardRef
