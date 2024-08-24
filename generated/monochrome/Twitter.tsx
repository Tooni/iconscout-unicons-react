import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTwitter = (
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
      d="M22 5.796a8.2 8.2 0 0 1-2.357.646 4.12 4.12 0 0 0 1.805-2.27 8.2 8.2 0 0 1-2.606.996 4.105 4.105 0 0 0-7.097 2.808 4.2 4.2 0 0 0 .105.935 11.65 11.65 0 0 1-8.456-4.287 4.107 4.107 0 0 0 1.27 5.478 4.1 4.1 0 0 1-1.86-.513v.052a4.105 4.105 0 0 0 3.292 4.023 4 4 0 0 1-1.081.143 4 4 0 0 1-.773-.072 4.11 4.11 0 0 0 3.832 2.85A8.26 8.26 0 0 1 2 18.282a11.6 11.6 0 0 0 6.29 1.844A11.594 11.594 0 0 0 19.962 8.453q0-.267-.013-.53A8.4 8.4 0 0 0 22 5.796"
      className="twitter_svg__uim-primary"
      data-name="Brand Logos"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTwitter)
export default ForwardRef
