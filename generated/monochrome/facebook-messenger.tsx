import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFacebookMessenger = (
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
      d="m18.004 9.465-2.936 4.658a1.5 1.5 0 0 1-2.169.4l-2.336-1.752a.6.6 0 0 0-.722.002l-3.157 2.396a.475.475 0 0 1-.688-.632l2.938-4.66a1.5 1.5 0 0 1 2.169-.4l2.336 1.753a.6.6 0 0 0 .722-.002l3.155-2.395a.475.475 0 0 1 .688.632"
      opacity={0.5}
    />
    <path
      d="M12.59 2A10 10 0 0 0 12 2c-5.327-.193-9.801 3.969-9.994 9.295q-.007.202-.006.405a9.5 9.5 0 0 0 3.14 7.175.8.8 0 0 1 .27.57l.055 1.779a.8.8 0 0 0 1.122.708l1.984-.875a.8.8 0 0 1 .534-.04c.943.257 1.917.386 2.895.384 5.357.163 9.833-4.048 9.996-9.405.163-5.358-4.048-9.833-9.405-9.996zm5.414 7.465-2.936 4.658a1.5 1.5 0 0 1-2.169.4l-2.336-1.752a.6.6 0 0 0-.722.002l-3.157 2.396a.475.475 0 0 1-.688-.632l2.938-4.66a1.5 1.5 0 0 1 2.169-.4l2.336 1.752a.6.6 0 0 0 .722-.001l3.155-2.395a.475.475 0 0 1 .688.632"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFacebookMessenger)
export default ForwardRef
