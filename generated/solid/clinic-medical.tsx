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
    <path d="m21.7 10.3-9-8c-.4-.3-.9-.3-1.3 0l-9 8c-.4.4-.5 1-.1 1.4s1 .5 1.4.1l.3-.4V21c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9.6l.3.3c.4.4 1 .3 1.4-.1.4-.3.4-1 0-1.3M14 15h-1v1c0 .6-.4 1-1 1s-1-.4-1-1v-1h-1c-.6 0-1-.4-1-1s.4-1 1-1h1v-1c0-.6.4-1 1-1s1 .4 1 1v1h1c.6 0 1 .4 1 1s-.4 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgClinicMedical)
export default ForwardRef
