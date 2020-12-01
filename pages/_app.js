import '../styles/globals.css'
import 'antd/dist/antd.css';

import Amplify from 'aws-amplify'
import config from '../src/aws-exports'
import Menu from '../components/menu';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
Amplify.configure({
  ...config,
  ssr: true
})


function MyApp({ Component, pageProps}) {
  const store = useStore(pageProps.initialReduxState)
  
  return(
    <Provider store={store}>
      <Menu />
      <Component {...pageProps}/>
    </Provider>)
}

export default MyApp

