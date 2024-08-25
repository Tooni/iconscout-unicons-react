import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgShieldCheck = (
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
    <path d="m13.896 9.946-3.046 3.047-1.247-1.247a.5.5 0 0 0-.707.707l1.6 1.6a.5.5 0 0 0 .707 0l3.408-3.407a.5.5 0 0 0-.715-.7m6.093-6.193a.5.5 0 0 0-.592-.387 9.1 9.1 0 0 1-7.11-1.454.5.5 0 0 0-.574 0 9.1 9.1 0 0 1-7.11 1.454.498.498 0 0 0-.603.49v8.018a9.13 9.13 0 0 0 3.799 7.407l3.91 2.804a.5.5 0 0 0 .582 0l3.91-2.804A9.13 9.13 0 0 0 20 11.874V3.855a.5.5 0 0 0-.01-.102M19 11.874a8.13 8.13 0 0 1-3.38 6.595L12 21.063 8.38 18.47A8.13 8.13 0 0 1 5 11.874v-7.42a10.08 10.08 0 0 0 7-1.53 10.1 10.1 0 0 0 7 1.53z" />
  </svg>
)
const ForwardRef = forwardRef(SvgShieldCheck)
export default ForwardRef
