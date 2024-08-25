import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgImageEdit = (
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
    <path d="m21.737 3.751-2.42-2.42a1 1 0 0 0-1.414 0l-4.58 4.58a1 1 0 0 0-.293.707v2.42a1 1 0 0 0 1 1h2.42a1 1 0 0 0 .707-.293l4.58-4.58a1 1 0 0 0 0-1.414m-5.7 4.287H15.03V7.032l3.58-3.58 1.006 1.006ZM19 11a1 1 0 0 0-1 1v2.392l-1.48-1.48a2.78 2.78 0 0 0-3.929 0l-.698.697-2.486-2.486a2.777 2.777 0 0 0-3.924 0L4 12.606V7a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3.003 3.003 0 0 0-3 3v12a3.003 3.003 0 0 0 3 3h12a3.003 3.003 0 0 0 3-3v-7a1 1 0 0 0-1-1M5 20a1 1 0 0 1-1-1v-3.566l2.897-2.897a.8.8 0 0 1 1.096 0l3.168 3.167c.009.01.012.022.02.03L15.448 20Zm13-1a.97.97 0 0 1-.179.537l-4.514-4.514.698-.698a.78.78 0 0 1 1.1 0L18 17.22Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgImageEdit)
export default ForwardRef
