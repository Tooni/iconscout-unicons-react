import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBing = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path
      d="m10.129 8.596 1.735 4.328 2.77 1.29L19 16.247V11.7z"
      opacity={0.7}
      style={{
        isolation: 'isolate',
      }}
    />
    <path
      d="M14.634 14.214 9 17.457V3.4L5 2v17.76L9 22l10-5.753V11.7z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBing)
export default ForwardRef
