import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFlipH = (
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
    <path d="M11.815 3.383 12 3.2l.185.182a.5.5 0 0 0 .707-.006.5.5 0 0 0-.006-.707l-.535-.526a.5.5 0 0 0-.702 0l-.535.526-.008.008a.5.5 0 1 0 .71.705m3.282 2.864a.499.499 0 1 0 .7-.713l-.793-.781a.5.5 0 0 0-.701.713zM11.155 9h1.69a.5.5 0 0 0 0-1h-1.69a.5.5 0 0 0 0 1m6.195 0h.75a.5.5 0 0 0 .35-.857l-.534-.526a.5.5 0 0 0-.839.464.5.5 0 0 0 .273.919M8.553 6.39a.5.5 0 0 0 .35-.143l.794-.781a.5.5 0 0 0-.7-.713l-.795.781a.5.5 0 0 0 .35.857M21.5 11.5h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1M17.929 15H6.07a.5.5 0 0 0-.355.852l5.929 6a.5.5 0 0 0 .71 0l5.93-6a.5.5 0 0 0-.356-.852M12 20.79 7.269 16h9.462zM5.9 9h.75a.5.5 0 0 0 .273-.919.5.5 0 0 0-.839-.464l-.534.527A.5.5 0 0 0 5.9 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipH)
export default ForwardRef
