import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWindowGrid = (
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
    <path d="M22 11H10V2H8v20h2v-9h12z" opacity={0.25} />
    <path
      d="M3 2h5v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
      opacity={1}
    />
    <path
      d="M10 2h11a1 1 0 0 1 1 1v8H10zm0 11h12v8a1 1 0 0 1-1 1H10z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWindowGrid)
export default ForwardRef
