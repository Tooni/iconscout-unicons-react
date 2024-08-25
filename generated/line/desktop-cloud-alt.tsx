import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDesktopCloudAlt = (
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
    <path d="M4.5 10H10a3 3 0 0 0 1.07-5.8 4 4 0 0 0-7.48 1A2.5 2.5 0 0 0 4.5 10m0-3a1 1 0 0 0 1-1 2 2 0 0 1 3.89-.64 1 1 0 0 0 .78.66A1 1 0 0 1 11 7a1 1 0 0 1-1 1H4.5a.5.5 0 0 1 0-1M19 2h-5a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h3v2H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2h-3v-2h3a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-5 18h-4v-2h4Zm6-5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDesktopCloudAlt)
export default ForwardRef
