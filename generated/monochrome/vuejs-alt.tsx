import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgVuejsAlt = (
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
      d="M12.018 19.151 4.315 6h2.823l4.886 8.407L16.871 6h2.809z"
      opacity={0.5}
    />
    <path
      d="m14.38 4.001-2.374 3.956-2.384-3.956H.825L12.02 23.115 23.161 4H14.38zm-2.362 15.15L4.315 6h2.823l4.886 8.407L16.871 6h2.809z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVuejsAlt)
export default ForwardRef
