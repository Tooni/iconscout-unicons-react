import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAwardAlt = (
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
    <path d="M12 1a7 7 0 0 0-5 11.89V22a1 1 0 0 0 1.45.89L12 21.12l3.55 1.77A1 1 0 0 0 16 23a1 1 0 0 0 .53-.15A1 1 0 0 0 17 22v-9.11A7 7 0 0 0 12 1m3 19.38-2.55-1.27a1 1 0 0 0-.9 0L9 20.38v-6.06a7 7 0 0 0 2 .6V16a1 1 0 0 0 2 0v-1.08a7 7 0 0 0 2-.6ZM12 13a5 5 0 1 1 5-5 5 5 0 0 1-5 5" />
  </svg>
)
const ForwardRef = forwardRef(SvgAwardAlt)
export default ForwardRef
