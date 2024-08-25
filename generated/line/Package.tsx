import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPackage = (
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
    <path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-9 2h4v3.13l-1.45-1a1 1 0 0 0-1.1 0l-1.45 1Zm10 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v5a1 1 0 0 0 .53.88 1 1 0 0 0 1-.05L12 8.2l2.45 1.63A1 1 0 0 0 16 9V4h3a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPackage)
export default ForwardRef
