import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgOperaAlt = (
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
    <path d="M12 5.5c-3.1 0-3.1 4.7-3.1 6.4 0 1.8 0 6.6 3.2 6.6s3.2-4.8 3.2-6.6c-.2-4.2-1.2-6.4-3.3-6.4m0 12c-1.5 0-2.2-1.8-2.2-5.7 0-3.6.7-5.3 2.1-5.3s2.2 1.8 2.2 5.4c0 3.8-.6 5.6-2.1 5.6m0-16c-5.8 0-9.8 4.3-9.8 10.4 0 5.2 3.7 10.6 9.8 10.6s9.8-5.4 9.8-10.6c0-6.1-4-10.4-9.8-10.4m0 20c-5.5 0-8.8-4.9-8.8-9.6 0-5.6 3.5-9.4 8.8-9.4s8.8 3.8 8.8 9.4c0 4.7-3.3 9.6-8.8 9.6" />
  </svg>
)
const ForwardRef = forwardRef(SvgOperaAlt)
export default ForwardRef
