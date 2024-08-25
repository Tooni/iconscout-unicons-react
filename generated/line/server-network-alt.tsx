import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgServerNetworkAlt = (
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
    <path d="M8 6h3a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2m8 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m5 9h-6.18A3 3 0 0 0 13 17.18V15h4a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2A3 3 0 0 0 20 6V4a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 4 10v2a3 3 0 0 0 3 3h4v2.18A3 3 0 0 0 9.18 19H3a1 1 0 0 0 0 2h6.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Zm1 9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Zm5 8a1 1 0 1 1 1-1 1 1 0 0 1-1 1m-1-11H8a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgServerNetworkAlt)
export default ForwardRef
