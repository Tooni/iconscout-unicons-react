import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSignalAlt = (
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
    <path d="M5.5 18a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5m5-4a.5.5 0 0 0-.5.5v7a.5.5 0 1 0 1 0v-7a.5.5 0 0 0-.5-.5m10-12a.5.5 0 0 0-.5.5v19a.5.5 0 1 0 1 0v-19a.5.5 0 0 0-.5-.5m-5 7a.5.5 0 0 0-.5.5v12a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgSignalAlt)
export default ForwardRef
