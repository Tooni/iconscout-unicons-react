import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClinicMedical = (
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
    <path
      d="M21 12a1 1 0 0 1-.664-.252L12 4.338l-8.336 7.41a1 1 0 0 1-1.328-1.496l9-8a1 1 0 0 1 1.328 0l9 8A1 1 0 0 1 21 12"
      className="clinic-medical_svg__uim-tertiary"
    />
    <path
      d="M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2"
      className="clinic-medical_svg__uim-primary"
    />
    <path
      d="m12 4.338-8 7.111V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.551ZM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"
      className="clinic-medical_svg__uim-quaternary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClinicMedical)
export default ForwardRef
