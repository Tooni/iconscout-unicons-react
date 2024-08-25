import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgIntercomAlt = (
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
    <path d="M10 14.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v8a.5.5 0 0 0 .5.5m4 0a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v8a.5.5 0 0 0 .5.5M20 1H4a3.003 3.003 0 0 0-3 3v16a3.003 3.003 0 0 0 3 3h16a3.003 3.003 0 0 0 3-3V4a3.003 3.003 0 0 0-3-3m2 19a2.003 2.003 0 0 1-2 2H4a2.003 2.003 0 0 1-2-2V4a2.003 2.003 0 0 1 2-2h16a2.003 2.003 0 0 1 2 2zM6 12.5a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5m12-5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5m-.32 8.291A9.46 9.46 0 0 1 12 17.5a9.45 9.45 0 0 1-5.68-1.71.5.5 0 0 0-.641.767A10.26 10.26 0 0 0 12 18.5a10.26 10.26 0 0 0 6.321-1.942.5.5 0 0 0-.641-.767" />
  </svg>
)
const ForwardRef = forwardRef(SvgIntercomAlt)
export default ForwardRef
