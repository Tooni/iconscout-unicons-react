import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgGrid = (
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
    <path
      d="M22 6H2V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z"
      opacity={1}
    />
    <path
      d="M2 8h9v6H2zM2 16h9v6H3a1 1 0 0 1-1-1zM13 8h9v6h-9zM21 22h-8v-6h9v5a1 1 0 0 1-1 1"
      opacity={0.5}
    />
    <path
      d="M22 8V6H2v2h9v6H2v2h9v6h2v-6h9v-2h-9V8z"
      opacity={0.25}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGrid)
export default ForwardRef
