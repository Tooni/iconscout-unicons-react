import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgClouds = (
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
    <path d="M19.47 10.54A6 6 0 0 0 14 7a5.8 5.8 0 0 0-1.39.18 5 5 0 0 0-9 2A3 3 0 0 0 4.5 15h1a4 4 0 0 0 0 .5A3.5 3.5 0 0 0 9 19h9.17a4.33 4.33 0 0 0 1.3-8.46M4.5 13a1 1 0 0 1 0-2 1 1 0 0 0 1-1 3 3 0 0 1 3-3 3 3 0 0 1 2.22 1 6 6 0 0 0-2.66 4.13 3.5 3.5 0 0 0-1.5.87Zm13.67 4H9a1.5 1.5 0 0 1 0-3 1 1 0 0 0 1-1 4 4 0 0 1 7.78-1.29 1 1 0 0 0 .78.67 2.33 2.33 0 0 1-.39 4.62" />
  </svg>
)
const ForwardRef = forwardRef(SvgClouds)
export default ForwardRef
