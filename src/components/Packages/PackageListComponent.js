import React from 'react';

import PackagesPreviewComponent from './PackagePreviewComponent';

const packages = [
  {
    name: 'Matupplevelsen längs Göta kanal',
    price: 1895,
    description: "",
    short_description: "",
    imageUrl: './img/packages/matupplevelsen.jpg',
    slug: ""
  },
]

const PackageListComponent = () => {
  return (
    <div>
      packages.map((package) => {
        <PackagesPreviewComponent
          name={package.name}
          slug={package.slug}
        />
      });
    </div>
  );
}

export default PackageListComponent;
