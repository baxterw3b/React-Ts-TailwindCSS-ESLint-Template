import useStore from '@hooks';

const App: React.FC = (): JSX.Element => {
  const { store } = useStore();
  console.log(store);
  return <h1 className="font-sans">{store.appTitle}</h1>;
};

export default App;
