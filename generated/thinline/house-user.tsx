import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHouseUser = (
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
    <path d="m21.8 10.6-2-1.8-7.5-6.7c-.2-.2-.5-.2-.7 0L4.2 8.8l-2 1.8c-.2.2-.2.5 0 .7s.5.2.7 0l1.1-1v11.2c0 .3.3.5.5.5h14.9c.3 0 .5-.2.5-.5V10.3l1.2 1.1c.1.1.2.1.3.1s.3-.1.4-.2c.3-.2.2-.5 0-.7M8.1 21c.4-1.6 1.8-2.8 3.4-3 2-.2 3.8 1.1 4.3 3zm1.4-6.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5S13.4 17 12 17s-2.5-1.1-2.5-2.5M19 21h-2.1c-.3-1.6-1.4-3-2.9-3.6.9-.6 1.6-1.7 1.6-2.9 0-1.9-1.6-3.5-3.5-3.5s-3.5 1.6-3.5 3.5c0 1.2.6 2.3 1.6 2.9-1.6.6-2.7 1.9-3.1 3.6H5V9.4l7-6.2 7 6.2z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHouseUser)
export default ForwardRef
