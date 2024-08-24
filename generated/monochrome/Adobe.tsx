import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAdobe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2 22.041a1 1 0 0 1-1-1V2.959a1 1 0 0 1 1-1h7.425a1 1 0 0 1 .925 1.38L2.925 21.42a1 1 0 0 1-.925.62Zm14.244 0H13.63a1 1 0 0 1-.891-.546l-1.522-2.99H8.963a1 1 0 0 1-.928-1.372L11.094 9.5a1 1 0 0 1 .928-.628h.01a1 1 0 0 1 .926.646l4.221 11.168a1 1 0 0 1-.935 1.354ZM22 21.809a1 1 0 0 1-.921-.613L13.56 3.346a1 1 0 0 1 .921-1.387H22a1 1 0 0 1 1 1v17.85a1 1 0 0 1-.802.98 1 1 0 0 1-.198.02"
      className="adobe_svg__uim-primary"
      data-name="Brand Logos"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAdobe)
export default ForwardRef
