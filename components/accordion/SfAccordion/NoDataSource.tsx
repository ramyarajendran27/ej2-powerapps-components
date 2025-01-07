import * as React from 'react';

interface INoDataSource {
  resources: ComponentFramework.Resources;
}

/**
 * Represents NoDataSource component that is rendered when there is no items data available.
 */
export const NoDataSource: React.FC<INoDataSource> = React.memo((props: INoDataSource) => {
  const message = props.resources.getString("NoDataSource_Message");
  return (
    <div id='NoDataSource'>
      <img src="https://ej2.syncfusion.com/react/demos/src/grid/images/emptyRecordTemplate.svg" alt="No data source" />
      <h3>{message}</h3>
    </div>
  );
});

NoDataSource.displayName = 'NoDataSource';
