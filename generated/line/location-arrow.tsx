import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLocationArrow = (
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
    <path d="M21.15 2.86a2.89 2.89 0 0 0-3-.71L4 6.88a2.9 2.9 0 0 0-.12 5.47l5.24 2a.93.93 0 0 1 .53.52l2 5.25A2.87 2.87 0 0 0 14.36 22h.07a2.88 2.88 0 0 0 2.69-2l4.73-14.17a2.89 2.89 0 0 0-.7-2.97M20 5.2l-4.78 14.18a.88.88 0 0 1-.84.62.92.92 0 0 1-.87-.58l-2-5.25a2.9 2.9 0 0 0-1.67-1.68l-5.25-2A.9.9 0 0 1 4 9.62a.88.88 0 0 1 .62-.84L18.8 4.05A.91.91 0 0 1 20 5.2" />
  </svg>
)
const ForwardRef = forwardRef(SvgLocationArrow)
export default ForwardRef
