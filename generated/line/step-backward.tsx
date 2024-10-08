import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgStepBackward = (
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
    <path d="M20.28 3.43a3.23 3.23 0 0 0-3.29 0L8 8.84V6a3 3 0 0 0-6 0v12a3 3 0 0 0 6 0v-2.84l9 5.37a3.3 3.3 0 0 0 1.68.47 3.24 3.24 0 0 0 1.61-.43 3.38 3.38 0 0 0 1.72-3V6.42a3.38 3.38 0 0 0-1.73-2.99M6 18a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm14-.42a1.4 1.4 0 0 1-.71 1.25 1.23 1.23 0 0 1-1.28 0l-9.33-5.6a1.45 1.45 0 0 1 0-2.46L18 5.19a1.23 1.23 0 0 1 .67-.19 1.3 1.3 0 0 1 .62.17A1.4 1.4 0 0 1 20 6.42Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgStepBackward)
export default ForwardRef
