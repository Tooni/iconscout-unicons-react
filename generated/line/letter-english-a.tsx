import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLetterEnglishA = (
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
    <path d="M18.97 19.757 15.35 5.272A2.996 2.996 0 0 0 12.437 3h-.877a2.996 2.996 0 0 0-2.91 2.272L5.03 19.757a1 1 0 0 0 1.94.486L8.28 15h7.44l1.31 5.243a1 1 0 0 0 1.94-.486M8.78 13l1.811-7.242a1 1 0 0 1 .97-.758h.878a1 1 0 0 1 .97.758L15.219 13Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgLetterEnglishA)
export default ForwardRef
