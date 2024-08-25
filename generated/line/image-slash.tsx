import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgImageSlash = (
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
    <path d="M19.5 4H10a1 1 0 0 0 0 2h9.5a1 1 0 0 1 1 1v6.76l-1.88-1.88a3 3 0 0 0-1.14-.71 1 1 0 1 0-.64 1.9.8.8 0 0 1 .36.23l3.31 3.29a.7.7 0 0 0 0 .15 1 1 0 0 0 0 .15 1 1 0 0 0 .13.18.5.5 0 0 0 .09.11 1 1 0 0 0 .2.14.6.6 0 0 0 .11.06.9.9 0 0 0 .37.08 1 1 0 0 0 1-1V7a3 3 0 0 0-2.91-3M3.21 2.29a1 1 0 0 0-1.42 1.42L3.18 5.1A3 3 0 0 0 2.5 7v10a3 3 0 0 0 3 3h12.59l1.7 1.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM4.5 7a1 1 0 0 1 .12-.46l2.72 2.71a3 3 0 0 0-1 .63L4.5 11.76Zm1 11a1 1 0 0 1-1-1v-2.42l3.3-3.29a1 1 0 0 1 1.4 0L15.91 18Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgImageSlash)
export default ForwardRef
