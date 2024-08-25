import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgVectorSquare = (
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
    <path
      d="M5 8a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m14 4a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1M5 22a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m14 4a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1"
      opacity={1}
    />
    <path
      d="M16.184 20a2.8 2.8 0 0 1 0-2H7.816a2.8 2.8 0 0 1 0 2zM19 8a3 3 0 0 1-1-.184v8.368a2.8 2.8 0 0 1 2 0V7.816A3 3 0 0 1 19 8M7.816 4A3 3 0 0 1 8 5a3 3 0 0 1-.184 1h8.368A3 3 0 0 1 16 5a3 3 0 0 1 .184-1zM5 16a3 3 0 0 1 1 .184V7.816A3 3 0 0 1 5 8a3 3 0 0 1-1-.184v8.368A3 3 0 0 1 5 16"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVectorSquare)
export default ForwardRef
