import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgImageV = (
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
    <path d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2m-15 19c-.828 0-1.5-.672-1.5-1.5v-5.225l3.763-3.762a1.753 1.753 0 0 1 2.474 0l10.468 10.466c-.068.01-.135.02-.205.021zM21 19.5c0 .378-.145.72-.377.984l-6.916-6.916 1.056-1.055a1.753 1.753 0 0 1 2.474 0L21 16.275zm0-4.639-3.056-3.055a2.753 2.753 0 0 0-3.888 0L13 12.86 9.944 9.806a2.815 2.815 0 0 0-3.888 0L3 12.86V4.5C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.672 1.5 1.5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgImageV)
export default ForwardRef
