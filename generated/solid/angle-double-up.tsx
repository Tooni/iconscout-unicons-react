import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAngleDoubleUp = (
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
    <path d="M12.7 12.5c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4s1 .4 1.4 0l2.3-2.3 2.3 2.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zm-3-1L12 9.2l2.3 2.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4.4.3 1 .3 1.4 0" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleUp)
export default ForwardRef
