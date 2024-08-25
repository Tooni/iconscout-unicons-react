import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDesktopAlt = (
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
    <path d="M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3v2H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2h-3v-2h3a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-5 18h-4v-2h4Zm6-5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Zm0-3H4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDesktopAlt)
export default ForwardRef
