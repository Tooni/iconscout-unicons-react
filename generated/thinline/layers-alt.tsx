import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLayersAlt = (
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
    <path d="M21.5 2h-13a.5.5 0 0 0-.5.5V7H5.5a.5.5 0 0 0-.5.5V12H2.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V19h4.5a.5.5 0 0 0 .5-.5V16h4.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5M11 18.5V21H3v-8h8zm5-3V18h-4v-5.5a.5.5 0 0 0-.5-.5H6V8h10zm5-.5h-4V7.5a.5.5 0 0 0-.5-.5H9V3h12z" />
  </svg>
)
const ForwardRef = forwardRef(SvgLayersAlt)
export default ForwardRef
