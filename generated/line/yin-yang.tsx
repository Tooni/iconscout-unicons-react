import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgYinYang = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M12 15.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1M12 2a6 6 0 0 0-.562.029A9.993 9.993 0 0 0 12 22a6 6 0 0 0 .562-.028A9.993 9.993 0 0 0 12 2m0 18A7.989 7.989 0 0 1 6.71 6.015 5.484 5.484 0 0 0 12 13a3.5 3.5 0 0 1 0 7m5.29-2.015A5.484 5.484 0 0 0 12 11a3.5 3.5 0 0 1 0-7 7.989 7.989 0 0 1 5.29 13.985M12 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgYinYang)
export default ForwardRef
