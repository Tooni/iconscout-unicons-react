import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDownloadAlt = (
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
    <path d="M18 9h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h2c.6 0 1-.4 1-1s-.4-1-1-1H6c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3m-9.7 5.7 3 3c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L13 14.6V3c0-.6-.4-1-1-1s-1 .4-1 1v11.6l-1.3-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgDownloadAlt)
export default ForwardRef
