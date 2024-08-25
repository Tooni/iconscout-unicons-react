import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCircuit = (
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
    <path d="M10 12.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m11.5 2a.5.5 0 0 0 0-1H19v-3h2.5a.5.5 0 0 0 0-1H19A2.5 2.5 0 0 0 16.5 5V2.5a.5.5 0 0 0-1 0V5h-3V2.5a.5.5 0 0 0-1 0V5h-3V2.5a.5.5 0 0 0-1 0V5A2.5 2.5 0 0 0 5 7.5H2.5a.5.5 0 0 0 0 1H5v3H2.5a.5.5 0 0 0 0 1H5v3H2.5a.5.5 0 0 0 0 1H5A2.5 2.5 0 0 0 7.5 19v2.5a.5.5 0 1 0 1 0V19h3v2.5a.5.5 0 1 0 1 0V19h3v2.5a.5.5 0 1 0 1 0V19a2.5 2.5 0 0 0 2.5-2.5h2.5a.5.5 0 0 0 0-1H19v-3zm-3.5 4c0 .828-.672 1.5-1.5 1.5h-9c-.828 0-1.5-.672-1.5-1.5v-9C6 6.672 6.672 6 7.5 6h9c.828 0 1.5.672 1.5 1.5zm-4-8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgCircuit)
export default ForwardRef
