import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFacebookMessengerAlt = (
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
    <path d="m16.117 8.906-2.589 3.086-3.715-2.281a.5.5 0 0 0-.644.104l-3.052 3.636a.5.5 0 0 0 .766.643l2.774-3.306 3.715 2.281c.211.13.485.085.645-.104l2.866-3.416a.5.5 0 0 0-.766-.643M12 1C5.715 1 .975 5.594.975 11.686a10.43 10.43 0 0 0 3.471 7.905c.071.06.114.149.118.242l.058 1.867a1.343 1.343 0 0 0 1.883 1.187l2.088-.92a.33.33 0 0 1 .226-.018c1.037.283 2.107.425 3.181.422 6.285 0 11.025-4.594 11.025-10.685S18.285 1 12 1m0 20.371a11 11 0 0 1-2.916-.387 1.36 1.36 0 0 0-.894.068l-2.086.919a.35.35 0 0 1-.324-.026.34.34 0 0 1-.158-.276l-.058-1.871a1.34 1.34 0 0 0-.45-.952 9.45 9.45 0 0 1-3.14-7.16C1.975 6.164 6.285 2 12 2s10.025 4.164 10.025 9.686S17.715 21.37 12 21.37" />
  </svg>
)
const ForwardRef = forwardRef(SvgFacebookMessengerAlt)
export default ForwardRef
