import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLeftIndentAlt = (
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
    <path d="M5.884 9.18a.5.5 0 0 0-.704-.064l-3 2.5a.5.5 0 0 0 0 .768l3 2.5a.5.5 0 0 0 .704-.064.5.5 0 0 0-.064-.704L3.281 12l2.54-2.116a.5.5 0 0 0 .063-.704M12.5 7h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1M9.045 5h-.003a.5.5 0 0 0-.5.497l-.084 13a.5.5 0 0 0 .497.503h.003a.5.5 0 0 0 .5-.497l.084-13A.5.5 0 0 0 9.045 5M21.5 18h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1m0-8h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1m0 4h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgLeftIndentAlt)
export default ForwardRef
