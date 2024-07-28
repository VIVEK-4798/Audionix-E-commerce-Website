import { styled } from '@mui/system';

export const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3),
}));

export const Toolbar = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
