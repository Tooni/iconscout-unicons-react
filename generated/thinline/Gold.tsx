import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgGold = (
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
    <path d="M7.5 11h9.1c.3 0 .5-.3.4-.6l-1-6c0-.2-.3-.4-.5-.4h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5m1.4-6h6.2l.8 5H8.1zM22 13.4c0-.2-.2-.4-.5-.4h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5h9.1c.3 0 .5-.3.4-.6zM14.1 19l.8-5h6.2l.8 5zm-4.6-6h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5h9.1c.3 0 .5-.3.4-.6l-1-6c0-.2-.3-.4-.5-.4m-7.4 6 .8-5h6.2l.8 5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgGold)
export default ForwardRef
