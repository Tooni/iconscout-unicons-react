import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDocumentLayoutCenter = (
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
      d="M21 8h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m0 4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2M5 8H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2"
      opacity={0.5}
    />
    <rect width={8} height={8} x={8} y={4} opacity={1} rx={1} />
    <path
      d="M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentLayoutCenter)
export default ForwardRef