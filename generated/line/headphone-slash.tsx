import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHeadphoneSlash = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M19.07 5.936a9.95 9.95 0 0 0-9.39-2.671 1 1 0 0 0 .44 1.95A8.02 8.02 0 0 1 20 13h-.34a1 1 0 0 0 0 2H20v.34a1 1 0 1 0 2 0V13a9.89 9.89 0 0 0-2.93-7.064M3.706 2.293a1 1 0 0 0-1.414 1.414l2.435 2.435A9.96 9.96 0 0 0 2 13v7a1 1 0 0 0 1 1h3a3.003 3.003 0 0 0 3-3v-2a3.003 3.003 0 0 0-3-3H4a7.96 7.96 0 0 1 2.145-5.441L15 16.414V18a3.003 3.003 0 0 0 3 3h1.586l.707.707a1 1 0 0 0 1.414-1.414ZM6 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4v-4Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadphoneSlash)
export default ForwardRef
