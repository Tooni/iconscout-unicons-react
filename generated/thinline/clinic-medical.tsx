import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgClinicMedical = (
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
    <path d="M11.5 12v1.5H10c-.3 0-.5.2-.5.5s.2.5.5.5h1.5V16c0 .3.2.5.5.5s.5-.2.5-.5v-1.5H14c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1.5V12c0-.3-.2-.5-.5-.5s-.5.2-.5.5m10.3-1.4-9.5-8.4c-.2-.2-.5-.2-.7 0l-9.5 8.4c-.2.2-.2.5 0 .7s.5.2.7 0l1.2-1v11.2c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V10.3l1.2 1c.1.1.2.1.3.1s.3-.1.4-.2c.2-.1.1-.5-.1-.6M19 21H5V9.4l7-6.2 7 6.2z" />
  </svg>
)
const ForwardRef = forwardRef(SvgClinicMedical)
export default ForwardRef
