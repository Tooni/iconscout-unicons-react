import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHospital = (
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
    <path d="M12.5 17h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5m-5-4h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5m5 0h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5m-5 4h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5m6-9.5h-1v-1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1v1c0 .3.2.5.5.5s.5-.2.5-.5v-1h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5m8-.5H18V2.5c0-.3-.2-.5-.5-.5h-11c-.3 0-.5.2-.5.5V7H2.5c-.3 0-.5.2-.5.5v14c0 .3.2.5.5.5h19c.3 0 .5-.2.5-.5v-14c0-.3-.2-.5-.5-.5M21 21H3V8h3.5c.3 0 .5-.2.5-.5V3h10v4.5c0 .3.2.5.5.5H21zm-3.5-4h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5m-1-4c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHospital)
export default ForwardRef
