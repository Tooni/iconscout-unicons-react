import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgApple = (
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
      d="M17.458 12.625A4.52 4.52 0 0 1 19.62 8.82a4.67 4.67 0 0 0-3.658-1.984c-1.558-.158-3.04.917-3.829.917s-2.009-.894-3.3-.87a4.9 4.9 0 0 0-4.14 2.508c-1.762 3.06-.449 7.593 1.268 10.076.84 1.214 1.843 2.581 3.158 2.532 1.268-.05 1.746-.82 3.277-.82s1.962.82 3.3.795c1.364-.025 2.229-1.239 3.062-2.457a11 11 0 0 0 1.385-2.845 4.42 4.42 0 0 1-2.685-4.047m-2.517-7.432A4.4 4.4 0 0 0 15.981 2a4.48 4.48 0 0 0-2.945 1.516 4.19 4.19 0 0 0-1.061 3.093 3.71 3.71 0 0 0 2.966-1.416"
      opacity={1}
      data-name="Brand Logos"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgApple)
export default ForwardRef
