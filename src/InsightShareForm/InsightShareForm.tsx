import React, { useRef } from 'react';
import { useFormik, FormikErrors } from 'formik';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import OutlinedButton from '@/Base/Button/Outlined';
import PrimaryOutlinedButton from '@/Base/Button/PrimaryOutlined';
import Insight from '@/Insight';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';
import { InsightShareFormProps, InsightShareFormValues } from './interface';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  actions: {
    padding: theme.spacing(1, 3),
    marginBottom: theme.spacing(2),
  },
  button: {
    textTransform: 'initial',
    fontWeight: 'initial',
  },
  container: {
    height: '100%',
  },
  insight: {
    background: '#F8F8FA',
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1),
  },
  input: {
    marginBottom: theme.spacing(3),
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main,
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
  },
  form: {
    margin: theme.spacing(2, 0, 0),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
  },
  validation: {
    marginTop: -theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.body2.fontSize,
    color: 'red',
  },
}));

function validateForm(values: InsightShareFormValues): FormikErrors<InsightShareFormValues> {
  let errors: FormikErrors<InsightShareFormValues> = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  }

  return errors;
}

function InsightShareForm({
  insight,
  onCancel,
  onSubmit,
  open,
  loading,
}: InsightShareFormProps): JSX.Element {
  const imageRef = useRef<HTMLImageElement>(null);
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    } as InsightShareFormValues,
    onSubmit: handleSubmit,
    validate: validateForm,
  });

  async function handleSubmit({ email, message }: InsightShareFormValues) {
    onSubmit({ email, message, image: imageRef.current?.src || '', insight });
  }

  function handleCancel() {
    onCancel();
    formik.resetForm();
  }

  return (
    <Dialog onClose={handleCancel} open={open}>
      <DialogTitle disableTypography>
        <Typography className={classes.title} variant="h5">
          Share by Email
        </Typography>
      </DialogTitle>
      <form className={classes.form} onSubmit={formik.handleSubmit} data-testid="share-form">
        <DialogContent>
          <TextField
            fullWidth
            role="textbox"
            aria-label="email"
            id="email"
            name="email"
            error={Boolean(formik.touched.email && formik.errors.email)}
            className={classes.input}
            placeholder="Email address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={classes.validation}>{formik.errors.email}</div>
          )}
          <TextField
            multiline
            fullWidth
            role="textbox"
            aria-label="message"
            id="message"
            name="message"
            error={Boolean(formik.touched.message && formik.errors.message)}
            className={classes.input}
            rows={4}
            placeholder="Enter a message"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (
            <div className={classes.validation}>{formik.errors.message}</div>
          )}
          <div className={classes.insight}>
            <Insight image collapsable={false} insight={insight} imageRef={imageRef} />
          </div>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <OutlinedButton
            fullWidth
            disabled={loading}
            onClick={handleCancel}
            className={classes.button}
          >
            Cancel
          </OutlinedButton>
          <PrimaryOutlinedButton
            fullWidth
            disabled={loading}
            type="submit"
            className={classes.button}
          >
            {loading ? 'Sending...' : 'Send'}
          </PrimaryOutlinedButton>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default InsightShareForm;
