import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRuler = (
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
    <path d="M22.61 7.05 17 1.39a1 1 0 0 0-.71-.29 1 1 0 0 0-.7.29L1.39 15.54a1 1 0 0 0 0 1.41l5.66 5.66a1 1 0 0 0 .71.29 1 1 0 0 0 .7-.29l2.83-2.83 8.49-8.49 2.83-2.83a1 1 0 0 0 0-1.41m-3.54 2.12-.71-.71a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l.71.71L16.24 12l-2.12-2.12a1 1 0 0 0-1.41 1.41l2.12 2.12-1.42 1.42-.7-.71a1 1 0 1 0-1.42 1.42l.71.7-1.41 1.42-2.13-2.12a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.41l2.12 2.12-1.41 1.42-4.25-4.25L16.24 3.51l4.25 4.25Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgRuler)
export default ForwardRef
