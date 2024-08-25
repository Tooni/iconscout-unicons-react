import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgUnlockAlt = (
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
    <path d="M17 9H9V7q0-1.2.9-2.1c1.2-1.2 3.1-1.2 4.2 0 .4.4.6.9.8 1.4.1.5.7.8 1.2.7s.9-.7.7-1.2c-.2-.9-.7-1.7-1.3-2.3-.9-1-2.2-1.5-3.5-1.5-2.8 0-5 2.2-5 5v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3m-4 8c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1z" />
  </svg>
)
const ForwardRef = forwardRef(SvgUnlockAlt)
export default ForwardRef
