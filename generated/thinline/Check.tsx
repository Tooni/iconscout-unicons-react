import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCheck = (
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
    <path d="M18.353 7.574a.5.5 0 0 0-.707-.008L9.84 15.373l-3.487-3.486a.5.5 0 0 0-.707.707l3.84 3.84a.5.5 0 0 0 .707 0l8.16-8.16a.5.5 0 0 0 0-.7" />
  </svg>
)
const ForwardRef = forwardRef(SvgCheck)
export default ForwardRef
