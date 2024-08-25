import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAdobeAlt = (
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
    <path d="M9.917 2.224A.5.5 0 0 0 9.5 2h-8a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .96.194l8-19a.5.5 0 0 0-.043-.47M2 19.024V3h6.747zM22.5 2h-8a.5.5 0 0 0-.46.694l8 19A.5.5 0 0 0 23 21.5v-19a.5.5 0 0 0-.5-.5M22 19.024 15.253 3H22zm-9.532-9.7A.5.5 0 0 0 12.003 9H12a.5.5 0 0 0-.466.318l-3.5 9A.5.5 0 0 0 8.5 19h3.191l1.362 2.724c.085.169.258.276.447.276h3a.5.5 0 0 0 .468-.676zM13.808 21l-1.36-2.724A.5.5 0 0 0 12 18H9.23l2.761-7.099L15.778 21z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAdobeAlt)
export default ForwardRef
