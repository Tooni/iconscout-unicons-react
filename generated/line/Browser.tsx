import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBrowser = (
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
    <path d="M19 2H9a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-3 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h12Zm0-9H4V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm4 5a1 1 0 0 1-1 1h-1V9a3 3 0 0 0-.18-1H20Zm0-9H8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBrowser)
export default ForwardRef
