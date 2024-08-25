import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgModem = (
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
    <path d="M21.48 13.13a.7.7 0 0 0-.05-.2 1 1 0 0 0-.08-.17 1 1 0 0 0-.1-.16l-.16-.13-.09-.09-14.72-8.5a1 1 0 0 0-1 1.74l11.49 6.63H3.5a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-4s-.02-.08-.02-.12m-2 4.12a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1v-3h15Zm-3 0a1 1 0 1 0-1-1 1 1 0 0 0 1.02 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgModem)
export default ForwardRef
