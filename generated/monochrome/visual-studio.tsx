import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgVisualStudio = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path
      d="M9.133 14.242 4.2 18.087l-2.152-1.072V6.994l2.144-1.08 4.9 3.853L16.849 2l5.104 2.033v15.9L16.875 22Zm7.563 1.352V8.406l-4.645 3.598zM4.369 14.301l2.442-2.22-2.442-2.433Z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVisualStudio)
export default ForwardRef
