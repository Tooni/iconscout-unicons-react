import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWebGridAlt = (
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
    <path d="M22 8H2v2h9v12h2V10h9z" opacity={0.25} />
    <path
      d="M3 2h18a1 1 0 0 1 1 1v5H2V3a1 1 0 0 1 1-1"
      opacity={1}
    />
    <path
      d="M2 10h9v12H3a1 1 0 0 1-1-1zm11 0h9v11a1 1 0 0 1-1 1h-8z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWebGridAlt)
export default ForwardRef
