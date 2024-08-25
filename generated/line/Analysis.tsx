import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAnalysis = (
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
    <path d="M21.71 7.29a1 1 0 0 0-1.42 0L14 13.59l-4.29-4.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 11.41l4.29 4.3a1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42" />
  </svg>
)
const ForwardRef = forwardRef(SvgAnalysis)
export default ForwardRef
