import React from 'react';
import { injectIntl } from 'react-intl';

import PackagesPreviewComponent from './PackagePreviewComponent';

import packages from './messages';

const PackageListComponent = (props) => {
  const { formatMessage } = props.intl;
  const packageList = ['matupplevelsen', 'storturen'];
  return (
    <div className="row">
      <div className="container-fluid">
        {
          packageList.map((pkg) => {

            return (
              <PackagesPreviewComponent
                id={packages[pkg].id}
                name={formatMessage(packages[pkg].messages.name)}
                description={formatMessage(packages[pkg].messages.short_text)}
                short_description={formatMessage(packages[pkg].messages.summary)}
                price={packages[pkg].price.priceDouble}
                slug={packages[pkg].slug}
                image={packages[pkg].imageUrl}
                key={packages[pkg].id}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default injectIntl(PackageListComponent);
