import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHospitalSymbol = (
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
      d="M15 7a1 1 0 0 0-1 1v3h-4V8a1 1 0 0 0-2 0v8a1 1 0 0 0 2 0v-3h4v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1"
      opacity={1}
    />
    <path
      d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m4 14a1 1 0 0 1-2 0v-3h-4v3a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v3h4V8a1 1 0 0 1 2 0Z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHospitalSymbol)
export default ForwardRef
