import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPrevious = (
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
    <path d="M7.5 7a.5.5 0 0 0-.5.5v9a.5.5 0 1 0 1 0v-9a.5.5 0 0 0-.5-.5m9.354 9.146L12.698 12l4.155-4.146a.5.5 0 0 0-.707-.707l-4.51 4.5a.5.5 0 0 0 0 .707l4.51 4.5a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.708" />
  </svg>
)
const ForwardRef = forwardRef(SvgPrevious)
export default ForwardRef
