import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgShutter = (
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
    <path d="M19.07 4.93A10 10 0 1 0 4.93 19.07 10 10 0 1 0 19.07 4.93M18.23 7h-5.47l2.35-2.35A8.14 8.14 0 0 1 18.23 7M9 4.6a8.15 8.15 0 0 1 3.87-.54L9 7.93ZM7 5.77v5.47L5.19 9.43l-.54-.54A8.14 8.14 0 0 1 7 5.77M4.6 15a8.1 8.1 0 0 1-.54-3.87L7.93 15Zm1.17 2h5.47l-2.35 2.35A8.14 8.14 0 0 1 5.77 17M15 19.4a8.1 8.1 0 0 1-3.87.54L15 16.07Zm0-6.16L13.24 15h-2.49L9 13.24v-2.48L10.76 9h2.48L15 10.76Zm2 5v-5.48l2.35 2.35A8.14 8.14 0 0 1 17 18.23ZM16.07 9h3.33a8.1 8.1 0 0 1 .54 3.87Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgShutter)
export default ForwardRef
