import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgStoreSlash = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path
      d="M20 18.586v-7.143a3.95 3.95 0 0 1-5-.8 3.96 3.96 0 0 1-1.789 1.154Z"
      opacity={0.25}
    />
    <path
      d="M22 23a1 1 0 0 1-.707-.293l-20-20a1 1 0 0 1 1.414-1.414l20 20A1 1 0 0 1 22 23"
      opacity={1}
    />
    <path
      d="M12.586 14H10a1 1 0 0 0-1 1v7h6v-5.586Z"
      opacity={0.7}
    />
    <path
      d="M10 14h2.586l-2.49-2.49A3.8 3.8 0 0 1 9 10.642a4 4 0 0 1-5 .82V21a1 1 0 0 0 1 1h4v-7a1 1 0 0 1 1-1m5 2.414V22h4a.99.99 0 0 0 .93-.655z"
      opacity={0.25}
    />
    <path
      d="M13.211 11.797A3.96 3.96 0 0 0 15 10.643 3.998 3.998 0 0 0 22 8a1 1 0 0 0-.071-.371l-2-5A1 1 0 0 0 19 2H5a1 1 0 0 0-.929.629l-.008.02zM3.255 4.669 2.071 7.63A1 1 0 0 0 2 8a3.998 3.998 0 0 0 7 2.643 3.8 3.8 0 0 0 1.095.866z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStoreSlash)
export default ForwardRef
