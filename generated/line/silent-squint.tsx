import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSilentSquint = (
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
    <path d="M7.66 12.21a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l1.5-1.5a1 1 0 0 0 0-1.42l-1.5-1.5a1 1 0 0 0-1.42 1.42l.8.79-.8.79a1 1 0 0 0 0 1.42m7.5 0a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-.79-.79.79-.79a1 1 0 1 0-1.42-1.42l-1.5 1.5a1 1 0 0 0 0 1.42Zm.11 2a1 1 0 0 0-1.2 0l-.74.55-.73-.55a1 1 0 0 0-1.2 0l-.73.55-.74-.55a1 1 0 0 0-1.2 0l-1.33 1a1 1 0 1 0 1.2 1.6l.73-.55.74.55a.7.7 0 0 0 .12.06.8.8 0 0 0 .22.08h.48a1.1 1.1 0 0 0 .33-.16l.73-.55.73.55a1 1 0 0 0 1 .11l.1-.05a.4.4 0 0 0 .11-.06l.74-.55.73.55a1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4 1 1 0 0 0-.2-1.4ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgSilentSquint)
export default ForwardRef
