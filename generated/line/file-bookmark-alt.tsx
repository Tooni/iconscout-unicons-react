import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFileBookmarkAlt = (
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
    <path d="M7.5 10h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2m4 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-4h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m6.92-2.62a1 1 0 0 0-.21-1.09l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.09 0l-.28-.1H5.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a1 1 0 0 0 0-2h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h4a1 1 0 0 0 .92-.62M13.5 8a1 1 0 0 1-1-1V5.41L15.09 8Zm7 4h-5a1 1 0 0 0-1 1v8a1 1 0 0 0 .53.88 1 1 0 0 0 1-.05l1.97-1.3 2 1.3a1 1 0 0 0 1.5-.83v-8a1 1 0 0 0-1-1m-1 7.12-.94-.63a1 1 0 0 0-1.12 0l-.94.63V14h3Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgFileBookmarkAlt)
export default ForwardRef
