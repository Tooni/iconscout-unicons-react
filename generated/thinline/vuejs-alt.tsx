import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVuejsAlt = (
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
    <path d="M22.934 3.256a.5.5 0 0 0-.434-.251l-4.99-.003L17.503 3l-4-.026H13.5a.5.5 0 0 0-.43.245l-1.072 1.805-1.07-1.78A.5.5 0 0 0 10.505 3l-4-.027H6.5A.5.5 0 0 0 6.399 3H1.5a.5.5 0 0 0-.432.752l10.5 18a.5.5 0 0 0 .864 0l10.5-17.995a.5.5 0 0 0 .002-.501m-12.718.742 1.355 2.259A.5.5 0 0 0 12 6.5h.001a.5.5 0 0 0 .429-.245l1.353-2.28 2.83.02-3.006 4.917L12 11.54 7.394 3.979zM12 20.508 2.37 4h3.85l5.353 8.76a.5.5 0 0 0 .147.142c.014.01.021.026.035.034a.5.5 0 0 0 .672-.175l5.353-8.759 3.85.002z" />
  </svg>
)
const ForwardRef = forwardRef(SvgVuejsAlt)
export default ForwardRef
