const iconTemplate = (variables, { tpl, options }) =>
  tpl`
import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { UniconProps } from '../UniconProps';

const ${variables.componentName} = ({size=24, color='currentColor', ...props}: UniconProps, ref: Ref<SVGSVGElement>) => (
  ${variables.jsx}
);

${variables.exports};
`;

module.exports = iconTemplate;
