## What is this?

This is a custom Insight Panel component, that was built to display a user's new and saved insights on a section of a web app. It is built with React + Typescript, and comes with some tests to make sure everything does what it needs to do.

The component is broken down into many sub-components as it gives it the ability to be pieced together as needed. What you see below is the 'fully loaded' version of this component, but there are instances where not every 'sub-feature' is required. For instance, not always will the component need to have the footer or the share button, and separating them out into their own component makes it trivial to remove them in those cases.

## Sample Usage

In `src/InsightsPanel/InsightsPanel.stories.tsx` you will see a sample usage of the component.

```
 <InsightsPanel insights={SAMPLE_USER_INSIGHTS} savedInsights={[SAMPLE_USER_INSIGHTS[1]]}>
      <InsightsPanelHeader title="Insights">
        <IconButton aria-label="insights preferences">
          <SettingsOutlinedIcon onClick={handlePreferencesClick} />
        </IconButton>
      </InsightsPanelHeader>
      <InsightsPanelTabs />
      <InsightsPanelInsight onAction={handleInsightAction} />
      <InsightsPanelShare onShare={handleInsightShare} />
      <InsightsPanelFooter onUninterested={handleUninterested} />
    </InsightsPanel>
```
The insights are passed in to the parent `InsightsPanel` component. Each child of this component then has access to these insights and the overall state of the component with the power of React context. 

If you would like to add features to this component, simply create a new component, and import `useInsightsPanel`. This will give any child access to the state of `InsightsPanel`, and the ability to dispatch new events to the state. If you want to remove features, just simply omit them when building this component. 

## Screenshots
![image](https://user-images.githubusercontent.com/5641600/145760381-570d913f-c3dc-4f56-8b84-b2115f3ab184.png)
![image](https://user-images.githubusercontent.com/5641600/145760411-4945f441-df2a-4ade-8de1-5787e02568d8.png)

## Getting Started

In the project directory, you can run:

### `npm install`

Will install all the dependencies needed to view the project

## Available Scripts

### `npm run storybook`

Will build and run a local copy of Storybook. This will show you a live preview of how the Insight component works.

### `npm test`

Launches the jest test runner.

### `npm run test:watch`

Launches the jest test runner in watch mode

### `npm run build`

Builds the app for publishing to the `dist` folder.<br />
Uses `esbuild` to bundle the code, `typescript` to create types for the component and `ts-alias` to convert aliased paths into relative paths.

Also creates a separate `package.json` file which is included in the `dist` folder.

