import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderClear = (
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
    <path d="M12 15c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-12c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1M4 15c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1M4 7c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1M8 19c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-8-8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m4 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-12c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-8 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-8 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m16 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0-6c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderClear)
export default ForwardRef
