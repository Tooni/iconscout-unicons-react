import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBriefcase = (
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
      d="M10 6V5h4v1h2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1z"
      opacity={1}
    />
    <path
      d="M9 15a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1"
      opacity={0.25}
    />
    <path
      d="M20 6H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4v-1a1 1 0 1 1 2 0v1h4v-1a1 1 0 1 1 2 0v1h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"
      opacity={0.5}
    />
    <path
      d="M20 13h-4v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H4a2 2 0 0 1-2-2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 1-2 2"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBriefcase)
export default ForwardRef
