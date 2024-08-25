import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgGoogleDriveAlt = (
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
    <path d="m6 19.796 3-5.197h12l-3 5.197z" opacity={1} />
    <path d="M15 14.599h6L15 4.204H9z" opacity={0.25} />
    <path
      d="m3 14.599 3 5.197L12 9.4 9 4.204 3 14.6z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGoogleDriveAlt)
export default ForwardRef
