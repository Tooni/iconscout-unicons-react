import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgApps = (
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
    <rect width={9} height={9} x={2} y={2} opacity={1} rx={1} />
    <rect width={9} height={9} x={2} y={13} opacity={0.5} rx={1} />
    <rect width={9} height={9} x={13} y={2} opacity={0.5} rx={1} />
    <rect width={9} height={9} x={13} y={13} opacity={0.5} rx={1} />
  </svg>
)
const ForwardRef = forwardRef(SvgApps)
export default ForwardRef
