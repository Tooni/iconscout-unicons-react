import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTumblrAlt = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path
      d="M16.785 17.974a4.7 4.7 0 0 1-1.614.346 1.755 1.755 0 0 1-1.925-1.972V11h4.017V7.095H13.26V2h-2.93a.16.16 0 0 0-.143.15 6.12 6.12 0 0 1-3.935 5.389v3.583h2.024v5.536c0 2.236 1.65 5.415 6.007 5.34a5.34 5.34 0 0 0 3.463-1.17l-.962-2.854"
      className="tumblr-alt_svg__uim-primary"
      data-name="Brand Logos"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTumblrAlt)
export default ForwardRef
