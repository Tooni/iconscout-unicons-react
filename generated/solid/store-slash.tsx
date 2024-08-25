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
    <path d="M15 10.6c.8.9 1.8 1.4 3 1.4v1.8l2 2v-4.3c1.2-.7 2-2 2-3.4 0-.1 0-.3-.1-.4l-2-5c-.1-.5-.5-.7-.9-.7H6.2zc-.1.1 0 0 0 0m7.7 10.7L20 18.6l-2-2-4.8-4.8-9.1-9.2-1.4-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2-1.2 3c-.1 0-.1.2-.1.3 0 1.4.8 2.7 2 3.4V21c0 .6.4 1 1 1h14c.4 0 .8-.3.9-.7l1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4M10 14c-.6 0-1 .4-1 1v5H6v-8c1.2 0 2.2-.5 3-1.4.3.3.6.6 1 .8l2.6 2.6zm8 6h-3v-3.6l3 3z" />
  </svg>
)
const ForwardRef = forwardRef(SvgStoreSlash)
export default ForwardRef
