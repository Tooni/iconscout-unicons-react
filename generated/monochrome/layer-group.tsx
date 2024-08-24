import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayerGroup = (
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
    <path
      d="M12 14.195c-.176 0-.348-.046-.5-.133l-9-5.198a1 1 0 0 1 0-1.732l9-5.194c.31-.177.69-.177 1 0l9 5.194a1 1 0 0 1 0 1.732l-9 5.198a1 1 0 0 1-.5.133"
      className="layer-group_svg__uim-quaternary"
    />
    <path
      d="m21.5 11.132-1.964-1.134-7.036 4.064c-.31.178-.69.178-1 0L4.464 9.998 2.5 11.132a1 1 0 0 0 0 1.732l9 5.198c.31.178.69.178 1 0l9-5.198a1 1 0 0 0 0-1.732"
      className="layer-group_svg__uim-tertiary"
    />
    <path
      d="m21.5 15.132-1.964-1.134-7.036 4.064c-.31.178-.69.178-1 0l-7.036-4.064L2.5 15.132a1 1 0 0 0 0 1.732l9 5.198c.31.178.69.178 1 0l9-5.198a1 1 0 0 0 0-1.732"
      className="layer-group_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLayerGroup)
export default ForwardRef
