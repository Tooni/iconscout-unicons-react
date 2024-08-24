import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVuejsAlt = (
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
      d="M12.018 19.151 4.315 6h2.823l4.886 8.407L16.871 6h2.809z"
      className="vuejs-alt_svg__uim-tertiary"
    />
    <path
      d="m14.38 4.001-2.374 3.956-2.384-3.956H.825L12.02 23.115 23.161 4H14.38zm-2.362 15.15L4.315 6h2.823l4.886 8.407L16.871 6h2.809z"
      className="vuejs-alt_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVuejsAlt)
export default ForwardRef
