import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgServerConnection = (
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
    <path d="M11 13a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m15-9a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v4a3 3 0 0 0 .78 2A3 3 0 0 0 2 12v4a3 3 0 0 0 3 3h6v2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2h-8v-2h6a3 3 0 0 0 3-3v-4a3 3 0 0 0-.78-2A3 3 0 0 0 22 8Zm-2 12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm0-8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-9-3a1 1 0 1 0 1 1 1 1 0 0 0-1-1M7 5a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgServerConnection)
export default ForwardRef
