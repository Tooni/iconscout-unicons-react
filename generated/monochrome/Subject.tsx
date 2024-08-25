import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSubject = (
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
      d="M21 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8 10H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m8-5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSubject)
export default ForwardRef
