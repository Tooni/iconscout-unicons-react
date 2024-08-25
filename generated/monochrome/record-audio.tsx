import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRecordAudio = (
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
    <circle cx={12} cy={12} r={6} opacity={0.5} />
    <path
      d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 16a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRecordAudio)
export default ForwardRef
