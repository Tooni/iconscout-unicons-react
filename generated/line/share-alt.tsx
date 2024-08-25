import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgShareAlt = (
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
    <path d="M18 14a4 4 0 0 0-3.08 1.48l-5.1-2.35a3.64 3.64 0 0 0 0-2.26l5.1-2.35A4 4 0 1 0 14 6a4 4 0 0 0 .07.71L8.79 9.14a4 4 0 1 0 0 5.72l5.28 2.43A4 4 0 0 0 14 18a4 4 0 1 0 4-4m0-10a2 2 0 1 1-2 2 2 2 0 0 1 2-2M6 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2m12 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgShareAlt)
export default ForwardRef
