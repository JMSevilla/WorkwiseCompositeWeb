/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import MuiButton, { ButtonProps } from '@mui/material/Button';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<ButtonProps>;

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};