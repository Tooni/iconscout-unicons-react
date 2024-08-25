import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgIntercomAlt = (
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
    <g data-name="Brand Logos">
      <path
        d="M20 23H4a3.003 3.003 0 0 1-3-3V4a3.003 3.003 0 0 1 3-3h16a3.003 3.003 0 0 1 3 3v16a3.003 3.003 0 0 1-3 3"
        opacity={0.5}
      />
      <path
        d="M12 19a10.8 10.8 0 0 1-6.644-2.06 1 1 0 0 1 1.288-1.532A9 9 0 0 0 12 17a9 9 0 0 0 5.361-1.595 1 1 0 0 1 1.282 1.535A10.8 10.8 0 0 1 12 19m-6-6a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m4 2a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m4 0a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m4-2a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
        opacity={1}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgIntercomAlt)
export default ForwardRef
