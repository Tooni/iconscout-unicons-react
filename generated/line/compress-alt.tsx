import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCompressAlt = (
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
    <path d="M21.71 2.29a1 1 0 0 0-1.42 0l-5.79 5.8V6.5a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54 1 1 0 0 0 .38.08h4a1 1 0 0 0 0-2h-1.59l5.8-5.79a1 1 0 0 0 0-1.42M10.88 12.58a1 1 0 0 0-.38-.08h-4a1 1 0 0 0 0 2h1.59l-5.8 5.79a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.79-5.8v1.59a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38 1 1 0 0 0-.54-.54" />
  </svg>
)
const ForwardRef = forwardRef(SvgCompressAlt)
export default ForwardRef
