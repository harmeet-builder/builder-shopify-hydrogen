import {
  gql,
  HydrogenRouteProps,
  useLocalization,
  useUrl,
} from '@shopify/hydrogen';

import {AboutPage} from '~/components/index.server';
import {PAGINATION_SIZE} from '~/lib/const';

export default function About({
  pageBy = PAGINATION_SIZE,
  params,
}: {
  pageBy?: number;
  params: HydrogenRouteProps['params'];
}) {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {handle} = params;
  const {searchParams} = useUrl();

  const searchTerm = searchParams.get('q');

  return <AboutPage />;
}
