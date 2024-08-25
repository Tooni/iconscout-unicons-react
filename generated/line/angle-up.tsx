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
    <path d="m17 13.41-4.29-4.24a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42 1 1 0 0 0 1.41 0L12 11.29l3.54 3.54a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 .05-1.42" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleUp)
export default ForwardRef
