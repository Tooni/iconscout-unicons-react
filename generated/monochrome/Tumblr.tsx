import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTumblr = (
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
      d="M16.785 17.974a4.7 4.7 0 0 1-1.614.346 1.755 1.755 0 0 1-1.925-1.972v-6.226h4.017V7.095H13.26V2h-2.93a.16.16 0 0 0-.143.15 6.12 6.12 0 0 1-3.935 5.389v2.583h2.024v6.536c0 2.236 1.65 5.415 6.007 5.34a5.34 5.34 0 0 0 3.463-1.17l-.962-2.854"
      opacity={1}
      data-name="Brand Logos"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTumblr)
export default ForwardRef
