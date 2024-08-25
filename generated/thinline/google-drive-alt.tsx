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
    <path d="M21.732 15.138q-.005-.05-.02-.098-.012-.05-.031-.094c-.005-.01-.005-.02-.01-.029L15.513 4.25A.5.5 0 0 0 15.08 4H8.92a.5.5 0 0 0-.249.067.5.5 0 0 0-.165.166c-.005.007-.013.01-.018.017L2.33 14.917a.5.5 0 0 0 0 .5l3.08 5.333c.007.013.022.018.03.03q.05.073.123.123c.019.013.034.026.054.036.069.036.143.06.226.061h12.317a.5.5 0 0 0 .433-.25l3.079-5.333c.007-.012.005-.028.01-.04a.5.5 0 0 0 .046-.17c.001-.013.01-.025.01-.04q-.002-.014-.005-.03M14.79 5l5.581 9.667H15.37L9.787 5zm-.577 9.667H9.786L12 10.832zm-10.875.5L8.92 5.5l2.502 4.333L5.842 19.5zM17.87 20H6.708l2.502-4.333h11.162z" />
  </svg>
)
const ForwardRef = forwardRef(SvgGoogleDriveAlt)
export default ForwardRef
