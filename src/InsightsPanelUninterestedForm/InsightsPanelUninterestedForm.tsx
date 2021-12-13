import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@/Base/Button/PrimaryOutlined';
import makeStylesWithTheme, { Theme } from '@/utils/hooks/makeStylesWithTheme';
import { InsightsPanelUninterestedFormProps } from './interface';

const useStyles = makeStylesWithTheme((theme: Theme) => ({
  buttonContainer: {
    marginTop: theme.spacing(3),
  },
  title: {
    color: theme.palette.gray3.main,
    fontWeight: 500,
    marginBottom: theme.spacing(3),
    '&.Mui-focused': {
      color: theme.palette.gray3.main,
    },
  },
  label: {
    color: theme.palette.gray3.main,
    fontSize: '0.85rem',
  },
  loading: {
    margin: theme.spacing(1, 0),
  },
  radio: {
    '&.Mui-checked': {
      color: theme.palette.primary.main,
      '&:hover': {
        background: 'inherit',
      },
    },
    '&:hover': {
      background: 'inherit',
    },
  },
}));

function createValueObj(value: string | undefined, filter_type: string): string {
  return JSON.stringify({ value, filter_type });
}

function findFirstOption(
  type: string | undefined,
  categories: string[],
  tags: string[],
): [string, string] {
  if (type) {
    return [type, 'type'];
  }

  if (categories.length) {
    return [categories[0], 'category'];
  }

  if (tags.length) {
    return [tags[0], 'tag'];
  }

  return ['', ''];
}

function InsightsPanelUninterestedForm({
  onSubmit,
  onCancel,
  loading,
  categories = [],
  tags = [],
  type,
}: InsightsPanelUninterestedFormProps): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = useState<string>(() =>
    createValueObj(...findFirstOption(type, categories, tags)),
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(JSON.parse(value));
  }

  function handleCancel() {
    setValue(createValueObj(type, 'type'));
    onCancel();
  }

  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth component="fieldset">
        <FormLabel className={classes.title} component="legend">
          Why are you not interested?
        </FormLabel>
        <RadioGroup
          aria-label="not-interested-cta"
          name="not-interested-cta"
          value={value}
          onChange={handleRadioChange}
        >
          {type && (
            <FormControlLabel
              classes={{ label: classes.label }}
              value={createValueObj(type, 'type')}
              control={
                <Radio
                  disableRipple
                  size="small"
                  color="primary"
                  classes={{ colorPrimary: classes.radio }}
                />
              }
              label={`Not interested in ${type}`}
            />
          )}

          {categories.map((category) => (
            <FormControlLabel
              key={category}
              classes={{ label: classes.label }}
              value={createValueObj(category, 'category')}
              control={
                <Radio
                  disableRipple
                  size="small"
                  color="primary"
                  classes={{ colorPrimary: classes.radio }}
                />
              }
              label={`Not interested in ${category}`}
            />
          ))}
          {tags.map((tag) => (
            <FormControlLabel
              key={tag}
              classes={{ label: classes.label }}
              value={createValueObj(tag, 'tag')}
              control={
                <Radio
                  disableRipple
                  size="small"
                  color="primary"
                  classes={{ colorPrimary: classes.radio }}
                />
              }
              label={`Not interested in ${tag}`}
            />
          ))}
        </RadioGroup>
        <Grid className={classes.buttonContainer} container spacing={2}>
          <Grid item xs={6}>
            <Button fullWidth disabled={loading} onClick={handleCancel} variant="outlined">
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth type="submit" disabled={loading} color="primary" variant="outlined">
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </form>
  );
}

export default InsightsPanelUninterestedForm;
