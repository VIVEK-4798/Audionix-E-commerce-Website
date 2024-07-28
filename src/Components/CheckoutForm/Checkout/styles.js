import { styled } from '@mui/material/styles';
import { AppBar, Container, Paper, Stepper, Button, CircularProgress, Divider } from '@mui/material';

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: 'relative',
}));

export const CustomContainer = styled(Container)(({ theme }) => ({
  marginTop: '5%',
  width: 'auto',
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export const CustomPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  [theme.breakpoints.down('xs')]: {
    width: '100%',
    marginTop: 60,
  },
  [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
}));

export const CustomStepper = styled(Stepper)(({ theme }) => ({
  padding: theme.spacing(3, 0, 5),
}));

export const CustomButtons = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginLeft: theme.spacing(1),
}));

export const CustomDivider = styled(Divider)(({ theme }) => ({
  margin: '20px 0',
}));

export const CustomSpinner = styled(CircularProgress)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
