import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFileHeart = (
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
    <path d="M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.1a1.1 1.1 0 0 0-.31-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94m-6-3.53L16.59 8H15a1 1 0 0 1-1-1ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3Zm-6-7.66A2.92 2.92 0 0 0 8.57 16l2.72 2.72a1 1 0 0 0 1.42 0L15.43 16A2.92 2.92 0 0 0 12 11.34m2 1.93a.92.92 0 0 1 0 1.3l-2 2-2-2a.92.92 0 0 1 0-1.3.92.92 0 0 1 1.3 0 1 1 0 0 0 1.42 0 .92.92 0 0 1 1.28 0" />
  </svg>
)
const ForwardRef = forwardRef(SvgFileHeart)
export default ForwardRef
