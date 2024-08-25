import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgKeyholeSquare = (
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
    <path d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3m-5.3 9c-.2.3-.4.6-.7.7V15c0 .6-.4 1-1 1s-1-.4-1-1v-3.3c-1-.6-1.3-1.8-.7-2.7S12 7.7 13 8.3c1 .5 1.3 1.7.7 2.7" />
  </svg>
)
const ForwardRef = forwardRef(SvgKeyholeSquare)
export default ForwardRef
