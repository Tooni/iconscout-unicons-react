import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgGrids = (
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
      d="M23 21V3a1 1 0 0 0-1-1h-5v20h5a1 1 0 0 0 1-1"
      opacity={0.5}
    />
    <path
      d="M1 3v18a1 1 0 0 0 1 1h5V2H2a1 1 0 0 0-1 1"
      opacity={1}
    />
    <path d="M9 2h6v20H9z" opacity={0.5} />
    <path d="M7 2h2v20H7zm8 0h2v20h-2z" opacity={0.25} />
  </svg>
)
const ForwardRef = forwardRef(SvgGrids)
export default ForwardRef
