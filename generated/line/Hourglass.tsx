import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHourglass = (
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
    <path d="M18.992 21.002h-1v-1.667a5 5 0 0 0-.3-1.678 1 1 0 0 0-.036-.084 5 5 0 0 0-.664-1.237l-1.4-1.867a3.02 3.02 0 0 1-.6-1.801v-1.01a3.02 3.02 0 0 1 .878-2.12l.657-.658a4.95 4.95 0 0 0 1.397-2.839c0-.013.008-.025.008-.04l-.003-.013a5 5 0 0 0 .063-.643V3.002h1a1 1 0 0 0 0-2h-14a1 1 0 0 0 0 2h1v2.343a5 5 0 0 0 .063.643l-.003.014c0 .014.007.026.008.04A4.95 4.95 0 0 0 7.456 8.88l.657.657a3.02 3.02 0 0 1 .879 2.121v1.01a3.02 3.02 0 0 1-.6 1.8l-1.4 1.868a5 5 0 0 0-.665 1.237 1 1 0 0 0-.036.084 5 5 0 0 0-.3 1.678v1.667h-1a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2m-11-16v-2h8v2Zm.878 2.464a3 3 0 0 1-.377-.464h6.997a3 3 0 0 1-.377.464l-.657.657a4.96 4.96 0 0 0-1.422 2.879H10.95a4.96 4.96 0 0 0-1.422-2.879Zm1.122 8.202a5.04 5.04 0 0 0 .988-2.666h2.023a5.03 5.03 0 0 0 .989 2.666l1 1.334h-6Zm6 5.334h-8v-1.667a3 3 0 0 1 .027-.333h7.945a3 3 0 0 1 .028.333Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHourglass)
export default ForwardRef
