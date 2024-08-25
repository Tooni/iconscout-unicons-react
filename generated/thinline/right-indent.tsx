import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRightIndent = (
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
    <path d="M18.555 14a.5.5 0 0 0 .816.387l2.445-2a.5.5 0 0 0 0-.773l-2.445-2a.5.5 0 0 0-.633.773L20.71 12l-1.972 1.613a.5.5 0 0 0-.183.386M2.5 6.5h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m0 4h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1m0 4h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1m19 3h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgRightIndent)
export default ForwardRef
