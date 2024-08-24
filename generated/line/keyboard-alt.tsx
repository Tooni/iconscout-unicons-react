import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeyboardAlt = (
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
    <path d="M6.71 9.29a1 1 0 0 0-1.42 0 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09 1.2 1.2 0 0 0 .33.21A.84.84 0 0 0 6 11a1 1 0 0 0 .92-1.38 1 1 0 0 0-.21-.33M10 11a1 1 0 0 0 .92-1.38 1 1 0 0 0-.21-.33 1 1 0 0 0-.9-.29.6.6 0 0 0-.19.06l-.18.09-.15.12A1.05 1.05 0 0 0 9 10a1 1 0 0 0 1 1m-3.62 2.08a1 1 0 0 0-.76 0A1 1 0 0 0 5 14a1 1 0 0 0 1.38.92 1.2 1.2 0 0 0 .33-.21A1 1 0 0 0 7 14a1 1 0 0 0-.29-.71.9.9 0 0 0-.33-.21M14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m.71-3.71a1 1 0 0 0-1.42 0 1 1 0 0 0-.21.33A1 1 0 1 0 15 10a.84.84 0 0 0-.08-.38 1 1 0 0 0-.21-.33m3.85 3.88a.8.8 0 0 0-.18-.09 1 1 0 0 0-.76 0 1.2 1.2 0 0 0-.33.21A1.05 1.05 0 0 0 17 14a1 1 0 1 0 2 0 1.05 1.05 0 0 0-.29-.71ZM20 5H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-2.29-6.71A1 1 0 0 0 17 10a1 1 0 1 0 1.92-.38 1 1 0 0 0-.21-.33" />
  </svg>
)
const ForwardRef = forwardRef(SvgKeyboardAlt)
export default ForwardRef
