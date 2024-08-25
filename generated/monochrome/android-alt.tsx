import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAndroidAlt = (
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
      d="m16.2 4.7.7-1.2c.2-.5.1-1.1-.4-1.4-.5-.2-1.1-.1-1.4.4l-.6 1.1c.6.2 1.2.6 1.7 1.1m-8.4 0c.5-.5 1-.8 1.7-1.1l-.6-1.1c-.3-.5-.9-.6-1.4-.4s-.6.9-.4 1.4zM6 9h12v2H6z"
      opacity={1}
    />
    <path
      d="M12 3C8.7 3 6 5.7 6 9h12c0-3.3-2.7-6-6-6m9 6c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1M3 9c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1m3 8c0 .6.4 1 1 1h2v3c0 .6.4 1 1 1s1-.4 1-1v-3h2v3c0 .6.4 1 1 1s1-.4 1-1v-3h2c.6 0 1-.4 1-1v-6H6z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAndroidAlt)
export default ForwardRef
