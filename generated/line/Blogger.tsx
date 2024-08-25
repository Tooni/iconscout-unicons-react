import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBlogger = (
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
    <path d="M9.71 10.46h2.239a.77.77 0 1 0 0-1.542H9.71a.77.77 0 1 0 0 1.542m9.718-8.458H4.555a2.573 2.573 0 0 0-2.563 2.563v14.873a2.573 2.573 0 0 0 2.563 2.564h14.873a2.573 2.573 0 0 0 2.564-2.564V4.565a2.573 2.573 0 0 0-2.564-2.563m-1.072 9.678-.02 2.675a4.05 4.05 0 0 1-4.038 4.022h-4.64a4.05 4.05 0 0 1-4.041-4.025V9.657a4.053 4.053 0 0 1 4.042-4.03h2.823a4.46 4.46 0 0 1 3.12 2.2 3.16 3.16 0 0 1 .362 1.367c.068.506.103.881.33 1.09.32.289 1.508.094 1.743.278l.178.14.11.221.035.178Zm-4.097 1.863H9.71a.75.75 0 1 0 0 1.5h4.549a.75.75 0 1 0 0-1.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgBlogger)
export default ForwardRef
