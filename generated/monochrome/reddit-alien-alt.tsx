import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRedditAlienAlt = (
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
      d="M18.893 7a3.014 3.014 0 0 1-3-3.022 3 3 0 0 1 6-.023v.023a3.014 3.014 0 0 1-3 3.022M11.8 23c-6.168 0-11-3.075-11-7s4.832-7 11-7 11 3.075 11 7-4.832 7-11 7"
      className="reddit-alien-alt_svg__uim-tertiary"
    />
    <path
      d="M20.499 8.292a3.77 3.77 0 0 0-4.497 1.223c2.952.756 5.224 2.295 6.228 4.234.1-.161.194-.326.269-.5a3.78 3.78 0 0 0-2-4.957M11.8 9q.585 0 1.156.037l.856-5.705 2.087.71c0-.022-.006-.042-.006-.064a2.97 2.97 0 0 1 .653-1.828l-3.224-1.096a1 1 0 0 0-1.312.798l-1.076 7.175c.287-.014.573-.027.866-.027m-4.208.516c-.088-.117-.172-.238-.273-.344a3.777 3.777 0 0 0-5.952 4.582c1.002-1.94 3.273-3.48 6.225-4.238"
      className="reddit-alien-alt_svg__uim-quaternary"
    />
    <path
      d="M11.842 19.5a5.1 5.1 0 0 1-3.781-1.218 1 1 0 0 1 1.416-1.414c.68.5 1.525.726 2.365.632a3.38 3.38 0 0 0 2.368-.633 1 1 0 1 1 1.414 1.416 5.12 5.12 0 0 1-3.782 1.217M10 14.002a1 1 0 1 0-1 1c.552-.001 1-.448 1-1m6 0a1 1 0 1 0-1 1c.552-.001 1-.448 1-1"
      className="reddit-alien-alt_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRedditAlienAlt)
export default ForwardRef
