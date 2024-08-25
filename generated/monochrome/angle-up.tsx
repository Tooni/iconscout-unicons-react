import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAngleUp = (
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
      d="M16.243 15.121a1 1 0 0 1-.707-.293L12 11.293l-3.536 3.535a1 1 0 0 1-1.414-1.414l4.243-4.242a1 1 0 0 1 1.414 0l4.243 4.242a1 1 0 0 1-.707 1.707"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleUp)
export default ForwardRef
