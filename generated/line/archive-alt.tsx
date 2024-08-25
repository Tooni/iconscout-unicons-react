import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArchiveAlt = (
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
    <path d="M10 13h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m9-10H5a3 3 0 0 0-1 5.82V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.82A3 3 0 0 0 19 3m-1 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12Zm1-11H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgArchiveAlt)
export default ForwardRef
