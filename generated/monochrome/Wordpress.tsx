import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWordpress = (
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
      d="M12 2.6a9.4 9.4 0 1 0 9.4 9.4A9.4 9.4 0 0 0 12 2.6"
      className="wordpress_svg__uim-quaternary"
    />
    <path
      d="m12.146 12.729-2.5 7.265a8.34 8.34 0 0 0 5.121-.133 1 1 0 0 1-.06-.115zm-8.48-.73a8.33 8.33 0 0 0 4.698 7.5L4.388 8.61a8.3 8.3 0 0 0-.721 3.39"
      className="wordpress_svg__uim-primary"
    />
    <path
      d="M17.626 11.58a4.4 4.4 0 0 0-.687-2.299 3.9 3.9 0 0 1-.819-1.954 1.443 1.443 0 0 1 1.4-1.48c.037 0 .072.005.107.007a8.33 8.33 0 0 0-12.59 1.569c.196.006.38.01.537.01.871 0 2.22-.106 2.22-.106a.344.344 0 0 1 .054.686s-.452.053-.954.08l3.035 9.026 1.824-5.47-1.299-3.556c-.449-.027-.874-.08-.874-.08a.344.344 0 0 1 .053-.686s1.376.106 2.195.106c.871 0 2.221-.106 2.221-.106a.344.344 0 0 1 .053.686s-.452.053-.953.08l3.011 8.957.86-2.724a9.6 9.6 0 0 0 .606-2.747"
      className="wordpress_svg__uim-primary"
    />
    <path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m7.795 15.255a9.43 9.43 0 0 1-4.136 3.407 9.39 9.39 0 0 1-8.914-.867 9.43 9.43 0 0 1-3.407-4.136 9.39 9.39 0 0 1 .867-8.914 9.43 9.43 0 0 1 4.136-3.407 9.39 9.39 0 0 1 8.914.867 9.43 9.43 0 0 1 3.407 4.136 9.39 9.39 0 0 1-.867 8.914"
      className="wordpress_svg__uim-primary"
    />
    <path
      d="M19.369 8.859a7.9 7.9 0 0 1-.634 2.985l-2.545 7.358a8.334 8.334 0 0 0 3.123-11.2 6 6 0 0 1 .056.857"
      className="wordpress_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWordpress)
export default ForwardRef
