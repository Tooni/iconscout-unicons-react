import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDirections = (
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
    <path d="m21.12 9.88-7-7a3.08 3.08 0 0 0-4.24 0l-7 7a3 3 0 0 0 0 4.24l7 7a3 3 0 0 0 4.24 0l7-7a3 3 0 0 0 0-4.24m-1.41 2.83-7 7a1 1 0 0 1-1.42 0l-7-7a1 1 0 0 1 0-1.42l7-7a1 1 0 0 1 1.42 0l7 7a1 1 0 0 1 0 1.42m-5.5-3.42a1 1 0 0 0-1.42 1.42l.3.29H9.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h2.59l-.3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2-2a1 1 0 0 0 0-1.42Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDirections)
export default ForwardRef
