import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAndroidAlt = (
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
    <path d="M2.992 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m18 0a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m-4.135-5.5a1 1 0 1 0-1.731-1l-.614 1.063a5.93 5.93 0 0 0-5.04 0L8.857 2.5a1 1 0 1 0-1.731 1l.692 1.198A5.98 5.98 0 0 0 5.992 9v8a1 1 0 0 0 1 1h2v3a1 1 0 0 0 2 0v-3h2v3a1 1 0 0 0 2 0v-3h2a1 1 0 0 0 1-1V9a5.98 5.98 0 0 0-1.827-4.302ZM15.992 16h-8v-5h8Zm-8-7a4 4 0 0 1 8 0Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAndroidAlt)
export default ForwardRef
