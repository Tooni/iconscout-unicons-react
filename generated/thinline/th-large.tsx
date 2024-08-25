import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgThLarge = (
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
    <path d="M20.47 3H3.53a.53.53 0 0 0-.53.53v16.94c0 .293.237.53.53.53h16.94a.53.53 0 0 0 .53-.53V3.53a.53.53 0 0 0-.53-.53M11.5 19.941H4.059V12.5H11.5zm0-8.441H4.059V4.059H11.5zm8.441 8.441H12.5V12.5h7.441zm0-8.441H12.5V4.059h7.441z" />
  </svg>
)
const ForwardRef = forwardRef(SvgThLarge)
export default ForwardRef
