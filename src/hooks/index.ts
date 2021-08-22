import { useState } from 'react';

interface Store {
  appTitle: string;
}

const useStore = (): { store: Store } => {
  const [store] = useState<Store>({
    appTitle: 'Template With React, Typescript, Tailwind CSS, ESLint',
  });

  return {
    store,
  };
};

export default useStore;
