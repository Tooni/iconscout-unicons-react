import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCloudDatabaseTree = (
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
    <path d="M22.5 14.5a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2h-3v-3h2.33A3.66 3.66 0 0 0 13 4.37a5 5 0 0 0-9.43 1.28 3 3 0 0 0 .93 5.85h3v8a1 1 0 0 0 1 1h4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-.28-1 2 2 0 0 0 .28-1Zm-18-5a1 1 0 0 1 0-2 1 1 0 0 0 1-1 3 3 0 0 1 5.84-1 1 1 0 0 0 .78.66 1.65 1.65 0 0 1 1.38 1.67 1.67 1.67 0 0 1-1.67 1.67Zm8 9h-3v-2h3a2 2 0 0 0 .28 1 2 2 0 0 0-.28 1m2 2v-2h6v2Zm0-4v-2h6v2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloudDatabaseTree)
export default ForwardRef
