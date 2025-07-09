import type { ComponentType } from 'react';

type withLoadingProps = {
  loading: boolean;
}

export function withLoading(Component: ComponentType) {
  return ({ loading }: withLoadingProps) => 
    loading ? <div>Загрузка...</div> : <Component />;
};