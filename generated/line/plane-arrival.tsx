import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPlaneArrival = (
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
    <path d="M21.12 16.23a5 5 0 0 0-2.3-3L16.71 12l-.48-5.47a1 1 0 0 0-.49-.78l-3-1.72a1 1 0 0 0-1 0 1 1 0 0 0-.52.84l-.15 3.9-1.75-1-2.86-3.85a1 1 0 0 0-1.78.41l-.87 4.61a3 3 0 0 0 1.39 3.29l14.06 8.11a1 1 0 0 0 1.36-.34 4.9 4.9 0 0 0 .5-3.77M19.24 18 6.2 10.5a1 1 0 0 1-.44-1.13l.46-2.44 1.66 2.2a1 1 0 0 0 .3.27l3.35 1.94a1 1 0 0 0 1.5-.83l.16-3.9 1.09.63.48 5.47a1 1 0 0 0 .5.78L17.82 15a2.9 2.9 0 0 1 1.36 1.78 2.74 2.74 0 0 1 .06 1.22" />
  </svg>
)
const ForwardRef = forwardRef(SvgPlaneArrival)
export default ForwardRef
