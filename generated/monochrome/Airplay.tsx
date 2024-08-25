import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAirplay = (
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
    <rect width={20} height={15} x={2} y={3} opacity={0.5} rx={3} />
    <path
      d="M16 21H8a1 1 0 0 1-.832-1.555l4-6a1.038 1.038 0 0 1 1.664 0l4 6A1 1 0 0 1 16 21"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAirplay)
export default ForwardRef
