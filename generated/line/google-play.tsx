import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgGooglePlay = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M20.919 10.653a503 503 0 0 1-4.023-2.323l-.003-.002L4.64 1.253a1.68 1.68 0 0 0-1.408-.16l-.076.03a1.4 1.4 0 0 0-.173.07 1.52 1.52 0 0 0-.738 1.364v18.986a1.44 1.44 0 0 0 .692 1.27 1 1 0 0 0 .155.064 1 1 0 0 0 .087.035 1.4 1.4 0 0 0 .446.083 1.7 1.7 0 0 0 .831-.232l12.438-7.182 4.021-2.322a1.53 1.53 0 0 0 .842-1.334 1.49 1.49 0 0 0-.837-1.272M4.244 19.839V4.102l7.94 7.859Zm5.018-2.162 4.344-4.31 1.15 1.139zm4.342-7.125L9.206 6.2l5.554 3.207Zm2.947 2.917-1.526-1.51 1.528-1.516c.72.419 1.843 1.07 2.616 1.515Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgGooglePlay)
export default ForwardRef
