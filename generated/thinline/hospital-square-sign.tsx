import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHospitalSquareSign = (
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
    <path d="M15.5 6c-.3 0-.5.2-.5.5v5H9v-5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v11c0 .3.2.5.5.5s.5-.2.5-.5v-5h6v5c0 .3.2.5.5.5s.5-.2.5-.5v-11c0-.3-.2-.5-.5-.5m4-4h-15C3.1 2 2 3.1 2 4.5v15C2 20.9 3.1 22 4.5 22h15c1.4 0 2.5-1.1 2.5-2.5v-15C22 3.1 20.9 2 19.5 2M21 19.5c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5v-15C3 3.7 3.7 3 4.5 3h15c.8 0 1.5.7 1.5 1.5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHospitalSquareSign)
export default ForwardRef
