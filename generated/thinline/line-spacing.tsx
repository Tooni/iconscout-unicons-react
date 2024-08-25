import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLineSpacing = (
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
    <path d="M9.5 8h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m-3.459 8.17-.874 1V6.83l.874 1a.497.497 0 0 0 .705.046.5.5 0 0 0 .047-.705l-1.75-2-.023-.023a.516.516 0 0 0-.729.023l-1.75 2a.5.5 0 1 0 .752.658l.874-.998v10.338l-.874-.998a.5.5 0 0 0-.752.658l1.75 2a.5.5 0 0 0 .752 0l1.75-2a.5.5 0 0 0-.752-.658M21.5 17h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1m0-5h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgLineSpacing)
export default ForwardRef
