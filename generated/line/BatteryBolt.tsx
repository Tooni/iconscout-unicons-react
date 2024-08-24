import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBatteryBolt = (
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
    <path d="M6.69 15H4V9h2.31a1 1 0 0 0 0-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.69a1 1 0 1 0 0-2m7.2-2.56a1 1 0 0 0 .06-.18 1.4 1.4 0 0 0 0-.2v-.18a.7.7 0 0 0-.05-.2 1 1 0 0 0-.08-.17 1 1 0 0 0-.1-.16l-.16-.13-.09-.09h-.06l-.18-.06h-3.5l1.45-2.5a1 1 0 1 0-1.74-1l-2.31 4v.06a1 1 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2S7 12 7 12v.12a.7.7 0 0 0 .05.2 1 1 0 0 0 .08.17 1 1 0 0 0 .1.16l.16.13a1 1 0 0 0 .09.09h.16A1 1 0 0 0 8 13h3.27l-1.45 2.5a1 1 0 0 0 1.74 1l2.31-4s.01-.04.02-.06M21 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m-4-3h-2.69a1 1 0 0 0 0 2H17v6h-2.31a1 1 0 1 0 0 2H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgBatteryBolt)
export default ForwardRef
