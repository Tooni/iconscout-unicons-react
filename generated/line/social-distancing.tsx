import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSocialDistancing = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M8.5 17H5.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1.004 1.004 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L5.914 19H8.5a1 1 0 0 0 0-2m12.707.293-2-2a1 1 0 0 0-1.414 1.414l.293.293H15.5a1 1 0 0 0 0 2h2.586l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1.004 1.004 0 0 0 0-1.414m-.567-7.521A3.47 3.47 0 0 0 21.5 7.5a3.5 3.5 0 0 0-7 0 3.47 3.47 0 0 0 .86 2.272A4.99 4.99 0 0 0 13 14a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0 4.99 4.99 0 0 0-2.36-4.228M18 9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 18 9m-9.36.772A3.47 3.47 0 0 0 9.5 7.5a3.5 3.5 0 0 0-7 0 3.47 3.47 0 0 0 .86 2.272A4.99 4.99 0 0 0 1 14a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0 4.99 4.99 0 0 0-2.36-4.228M6 9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 6 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgSocialDistancing)
export default ForwardRef
