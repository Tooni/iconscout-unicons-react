import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWindowSection = (
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
      d="M9 10h6v12H9zM2 10v11a1 1 0 0 0 1 1h4V10z"
      opacity={0.5}
    />
    <path d="M22 8H2v2h5v12h2V10h6v12h2V10h5z" opacity={0.25} />
    <path d="M17 10v12h4a1 1 0 0 0 1-1V10z" opacity={0.5} />
    <path
      d="M3 2h18a1 1 0 0 1 1 1v5H2V3a1 1 0 0 1 1-1"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWindowSection)
export default ForwardRef
