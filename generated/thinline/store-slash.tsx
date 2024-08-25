import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgStoreSlash = (
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
    <path d="M7.8 4h10.9l1.8 4.6c0 1.3-1.1 2.4-2.5 2.4s-2.5-1.1-2.5-2.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5c0 .5-.2 1-.4 1.4-.1.1-.1.2-.1.3 0 .3.2.5.5.5.2 0 .3-.1.4-.2s.1-.1.1-.2c.6 1 1.7 1.7 3 1.7.3 0 .7-.1 1-.2v3.4c0 .3.2.5.5.5s.5-.2.5-.5v-3.9c.9-.6 1.5-1.7 1.5-2.9v-.2l-2-5c-.1-.1-.3-.2-.5-.2H7.8c-.3 0-.6.2-.6.5s.3.5.6.5m15.1 18.1-3-3-5-5-13-13c-.2-.1-.5-.1-.7 0-.2.2-.2.6-.1.8L4 4.7 2.5 8.3v.2c0 1.2.6 2.2 1.5 2.9v10.1c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5v-.8l2.1 2.1c.1.1.2.1.4.1.1 0 .3-.1.4-.1.1-.1.1-.5 0-.7M3.5 8.6l1.2-3.1 3.7 3.7C8.1 10.2 7.1 11 6 11c-1.4 0-2.5-1.1-2.5-2.4m6 5.4c-.3 0-.5.2-.5.5V21H5v-9.2c.3.1.7.2 1 .2 1.3 0 2.4-.7 3-1.7.5.8 1.3 1.4 2.2 1.6l2.1 2.1zm4.5 7h-4v-6h4zm5 0h-4v-5.3l4 4z" />
  </svg>
)
const ForwardRef = forwardRef(SvgStoreSlash)
export default ForwardRef
