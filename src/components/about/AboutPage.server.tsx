import {Heading, Input, PageHeader} from '~/components';

import {Suspense} from 'react';

import {NotFound, Layout} from '~/components/index.server';
import {BuilderComponent} from '~/components/BuilderComponent.client';

import {useQuery} from '@shopify/hydrogen';
import {builder} from '@builder.io/react';

builder.init('3f198c2c64954819b90c50689de641a8');

const MODEL_NAME = 'page';

export function AboutPage(props: any) {
  const content = useQuery([MODEL_NAME, props.pathname], async () => {
    return await builder
      .get(MODEL_NAME, {
        userAttributes: {
          urlPath: '/about',
        },
      })
      .promise();
  });

  return (
    <>
      <Layout>
        <Suspense></Suspense>
        <PageHeader heading={content?.data?.data?.title}>
          <BuilderComponent model={MODEL_NAME} content={content?.data} />
        </PageHeader>
      </Layout>
    </>
  );
}
