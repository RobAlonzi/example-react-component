import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Button from '@/Base/Button/PrimaryOutlined';
import InsightShareForm from '@/InsightShareForm';
import { useInsightsPanel } from '@/InsightsPanel';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';
import { InsightsPanelShareProps, InsightsPanelSubmitProps } from './interface';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  button: {
    textTransform: 'initial',
    fontWeight: 'initial',
  },
  container: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 3),
  },
  icon: {
    color: theme.palette.gray2.main,
  },
}));

function InsightsPanelShare({ onShare }: InsightsPanelShareProps): JSX.Element {
  const {
    state: { activeInsight },
  } = useInsightsPanel();
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function onButtonClick() {
    setOpen(true);
  }

  function handleFormCancel() {
    setOpen(false);
  }

  async function handleFormShare(values: InsightsPanelSubmitProps) {
    setLoading(true);
    await onShare(values);
    setOpen(false);
    setLoading(false);
  }

  if (!activeInsight) {
    return <></>;
  }

  return (
    <>
      <Grid container className={classes.container}>
        <Button
          fullWidth
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={onButtonClick}
          startIcon={<MailOutlineIcon className={classes.icon} />}
        >
          Share by email
        </Button>
      </Grid>
      <InsightShareForm
        insight={activeInsight!}
        open={open}
        onCancel={handleFormCancel}
        onSubmit={handleFormShare}
        loading={loading}
      />
    </>
  );
}

export default InsightsPanelShare;
