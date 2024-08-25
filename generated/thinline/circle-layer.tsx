import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCircleLayer = (
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
    <path d="M15.979 2.068c-3.73-.524-7.18 2-7.849 5.672a5.99 5.99 0 0 0-3.086 4.658A5 5 0 0 0 7 22a5.01 5.01 0 0 0 4.607-3.06 5.96 5.96 0 0 0 4.635-3.076 6.985 6.985 0 0 0 5.69-5.893 6.996 6.996 0 0 0-5.953-7.903M7 21a4 4 0 1 1 0-8 4 4 0 0 1 0 8m4.907-3.089c.055-.296.093-.599.093-.911a5 5 0 0 0-5-5c-.312 0-.615.037-.912.092a4.997 4.997 0 1 1 5.82 5.82m4.82-3.172-.02.032a6 6 0 0 0 .288-1.529 5.997 5.997 0 0 0-5.746-6.237 6 6 0 0 0-1.985.258 5.996 5.996 0 1 1 7.464 7.476" />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleLayer)
export default ForwardRef
