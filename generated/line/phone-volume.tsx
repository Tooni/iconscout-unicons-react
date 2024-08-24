import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPhoneVolume = (
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
    <path d="M19.41 13c-.22 0-.45-.07-.67-.12a10 10 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.46a13.2 13.2 0 0 1-2.67-2 13.2 13.2 0 0 1-2-2.67l.46-.21a2 2 0 0 0 1-2.48 10.5 10.5 0 0 1-.39-1.32c-.05-.22-.09-.45-.12-.67a3 3 0 0 0-3-2.49H5a3 3 0 0 0-2.24 1 3 3 0 0 0-.73 2.4 19.07 19.07 0 0 0 5.41 11 19.07 19.07 0 0 0 11 5.41 2.6 2.6 0 0 0 .39 0 3 3 0 0 0 2-.76 3 3 0 0 0 1-2.24v-3A3 3 0 0 0 19.41 13m.49 6a1 1 0 0 1-.33.74 1 1 0 0 1-.82.25 17.16 17.16 0 0 1-9.87-4.84A17.16 17.16 0 0 1 4 5.25a1 1 0 0 1 .25-.82A1 1 0 0 1 5 4.1h3a1 1 0 0 1 1 .78c0 .27.09.55.15.82a11 11 0 0 0 .46 1.54l-1.4.66a1 1 0 0 0-.52.56 1 1 0 0 0 0 .76 14.5 14.5 0 0 0 7 7 1 1 0 0 0 .76 0 1 1 0 0 0 .56-.52l.63-1.4a12 12 0 0 0 1.58.46c.26.06.54.11.81.15a1 1 0 0 1 .78 1ZM14 2h-.7a1 1 0 0 0 .17 2H14a6 6 0 0 1 6 6v.53a1 1 0 0 0 .91 1.08h.08a1 1 0 0 0 1-.91V10A8 8 0 0 0 14 2m2 8a1 1 0 0 0 2 0 4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgPhoneVolume)
export default ForwardRef
