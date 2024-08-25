import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHospitalSymbol = (
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
    <path d="M15 7.5c-.3 0-.5.2-.5.5v3.5h-5V8c0-.3-.2-.5-.5-.5s-.5.2-.5.5v8c0 .3.2.5.5.5s.5-.2.5-.5v-3.5h5V16c0 .3.2.5.5.5s.5-.2.5-.5V8c0-.3-.2-.5-.5-.5M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgHospitalSymbol)
export default ForwardRef
