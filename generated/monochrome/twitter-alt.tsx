import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTwitterAlt = (
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
      d="M20.475 7.805c.01.185.01.37.01.545a11.9 11.9 0 0 1-.493 3.362A11.73 11.73 0 0 1 8.485 20.36a11.9 11.9 0 0 1-6.467-1.902 8 8 0 0 0 1.007.061 8.45 8.45 0 0 0 5.234-1.81 4.22 4.22 0 0 1-3.938-2.92 5 5 0 0 0 .792.072 4 4 0 0 0 1.12-.154 4.2 4.2 0 0 1-3.372-3.815 1.7 1.7 0 0 1-.02-.319v-.051a4.2 4.2 0 0 0 1.912.524A4.2 4.2 0 0 1 2.88 6.54a4.3 4.3 0 0 1 .566-2.129 11.97 11.97 0 0 0 8.7 4.412 4.219 4.219 0 0 1 7.187-3.846 8.4 8.4 0 0 0 2.684-1.028 4.98 4.98 0 0 1-1.543 3.856Z"
      className="twitter-alt_svg__uim-primary"
      data-name="Brand Logos"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTwitterAlt)
export default ForwardRef
