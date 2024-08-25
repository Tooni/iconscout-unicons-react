import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWebSection = (
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
    <path d="M14 2h2v20h-2z" opacity={0.25} />
    <path
      d="M3 2h11v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
      opacity={0.5}
    />
    <path
      d="M16 2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-5z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWebSection)
export default ForwardRef
