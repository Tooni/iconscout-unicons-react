import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLockAccess = (
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
    <path d="M21 2h-6c-.6 0-1 .4-1 1s.4 1 1 1h5v5c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1M3 10c.6 0 1-.4 1-1V4h5c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1m6 10H4v-5c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1m12-6c-.6 0-1 .4-1 1v5h-5c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m-9-8c-1.7 0-3 1.3-3 3v1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2V9c0-1.7-1.3-3-3-3m1 4h-2V9c0-.6.4-1 1-1s1 .4 1 1z" />
  </svg>
)
const ForwardRef = forwardRef(SvgLockAccess)
export default ForwardRef
