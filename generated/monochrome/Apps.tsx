import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgApps = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <rect
      width={9}
      height={9}
      x={2}
      y={2}
      className="apps_svg__uim-primary"
      rx={1}
    />
    <rect
      width={9}
      height={9}
      x={2}
      y={13}
      className="apps_svg__uim-tertiary"
      rx={1}
    />
    <rect
      width={9}
      height={9}
      x={13}
      y={2}
      className="apps_svg__uim-tertiary"
      rx={1}
    />
    <rect
      width={9}
      height={9}
      x={13}
      y={13}
      className="apps_svg__uim-tertiary"
      rx={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgApps)
export default ForwardRef
