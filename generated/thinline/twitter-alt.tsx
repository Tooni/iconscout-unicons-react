import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTwitterAlt = (
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
    <path d="M22.5 3.589a.5.5 0 0 0-.755-.43 8 8 0 0 1-2.266.912 4.66 4.66 0 0 0-3.238-1.29 4.73 4.73 0 0 0-4.707 5.135 11.53 11.53 0 0 1-7.717-4.18.5.5 0 0 0-.82.067 4.8 4.8 0 0 0-.633 2.377 4.72 4.72 0 0 0 .762 2.579l-.06-.033a.5.5 0 0 0-.497.03.54.54 0 0 0-.247.458q-.006.178.022.353a4.7 4.7 0 0 0 1.818 3.383.5.5 0 0 0-.335.632 4.7 4.7 0 0 0 3.088 3.057 8 8 0 0 1-4.854.963.5.5 0 0 0-.332.917A12.44 12.44 0 0 0 8.468 20.5a12.3 12.3 0 0 0 11.986-9.006c.339-1.137.512-2.318.514-3.505q0-.18-.003-.372A5.37 5.37 0 0 0 22.5 3.59m-2.424 3.533a.5.5 0 0 0-.117.349 11.366 11.366 0 0 1-.464 3.741A11.174 11.174 0 0 1 8.468 19.5c-1.526 0-3.037-.305-4.443-.897a8.87 8.87 0 0 0 4.525-1.86.5.5 0 0 0-.3-.893A3.71 3.71 0 0 1 5.1 14c.425.001.847-.057 1.254-.174a.5.5 0 0 0-.042-.97 3.71 3.71 0 0 1-2.905-2.898 4.7 4.7 0 0 0 1.313.228.47.47 0 0 0 .492-.35.5.5 0 0 0-.2-.567 3.7 3.7 0 0 1-1.648-3.09c0-.413.067-.823.2-1.213a12.52 12.52 0 0 0 8.54 3.995.45.45 0 0 0 .409-.179c.1-.12.139-.281.103-.434a3.6 3.6 0 0 1-.1-.842A3.73 3.73 0 0 1 16.24 3.78a3.68 3.68 0 0 1 2.71 1.179.5.5 0 0 0 .462.148c.71-.14 1.4-.365 2.055-.671a4.92 4.92 0 0 1-1.392 2.686" />
  </svg>
)
const ForwardRef = forwardRef(SvgTwitterAlt)
export default ForwardRef