import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFileShareAlt = (
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
    <path d="M13.5 12.5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1m5 5a2 2 0 0 0-1.18.39l-1.75-.8 1.91-.88a2 2 0 0 0 1 .29 2 2 0 1 0-2-2l-1.89.87A2 2 0 1 0 13.5 19a1.9 1.9 0 0 0 .92-.24l2.1 1a2 2 0 1 0 2-2.23Zm-8 2h-5a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3a1 1 0 0 0 2 0V8.44a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.1 0 1 1 0 0 0-.26-.06H5.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2Zm2-14.59 2.59 2.59H13.5a1 1 0 0 1-1-1Zm-5 10.59a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm0-6h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgFileShareAlt)
export default ForwardRef
