import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFlipVAlt = (
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
    <path d="m5.826 10.057.418-1.555v-.003a.5.5 0 1 0-.965-.257l-.418 1.555a.5.5 0 0 0 .965.26M3.25 20h-.099l.027-.095a.5.5 0 0 0-.354-.613.51.51 0 0 0-.613.354l-.194.724A.5.5 0 0 0 2.5 21h.75a.5.5 0 0 0 0-1M7.821 3h-.75a.5.5 0 0 0-.483.37l-.194.725a.502.502 0 0 0 .966.26L7.455 4h.366a.5.5 0 0 0 0-1M4.357 13.592a.5.5 0 0 0-.612.352L3.327 15.5a.5.5 0 0 0 .965.26l.418-1.555a.5.5 0 0 0-.353-.612M7.013 20H5.986a.5.5 0 0 0 0 1h1.027a.5.5 0 0 0 0-1m14.97.37-4.572-17A.5.5 0 0 0 16.93 3H13.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .482-.63M14 20V4h2.545l4.303 16zM10.5 3h-.75a.5.5 0 0 0 0 1H10v.25a.5.5 0 0 0 1 0V3.5a.5.5 0 0 0-.5-.5m0 16.25a.5.5 0 0 0-.5.5V20h-.25a.5.5 0 0 0 0 1h.75a.5.5 0 0 0 .5-.5v-.75a.5.5 0 0 0-.5-.5m0-5.683a.5.5 0 0 0-.5.5v1.55a.5.5 0 1 0 1 0v-1.55a.5.5 0 0 0-.5-.5m0-5.683a.5.5 0 0 0-.5.5v1.55a.5.5 0 1 0 1 0v-1.55a.5.5 0 0 0-.5-.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipVAlt)
export default ForwardRef
