import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBasketball = (
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
    <path d="M12 2a10 10 0 0 0-8.4 4.59 10 10 0 0 0 14.66 13.2A10 10 0 0 0 12 2m2 2.26A8 8 0 0 1 19.74 10 9.8 9.8 0 0 0 15 11.38a15.7 15.7 0 0 0-2.4-2.21A10.06 10.06 0 0 0 14 4.26M12 4a7.9 7.9 0 0 1-1.14 4.07c-.15-.08-.29-.17-.44-.24a15.5 15.5 0 0 0-4.09-1.47A8 8 0 0 1 12 4M5 8.16A13.8 13.8 0 0 1 9.49 9.6l.13.08A7.93 7.93 0 0 1 4 12a8 8 0 0 1 1-3.84m5 11.58A8 8 0 0 1 4.26 14a9.9 9.9 0 0 0 7.08-3.21 14 14 0 0 1 2 1.8A10 10 0 0 0 10 19.74m2 .26a8 8 0 0 1 2.56-5.85c.06.08.12.15.17.23a14 14 0 0 1 1.84 4.18A7.93 7.93 0 0 1 12 20m6.21-3a16 16 0 0 0-1.8-3.75L16.2 13a7.9 7.9 0 0 1 3.8-1 8 8 0 0 1-1.79 5" />
  </svg>
)
const ForwardRef = forwardRef(SvgBasketball)
export default ForwardRef
