import React, {Component} from 'react';
import {
  Link,
  Icon,
  Header,
  Tray,
  SmartProfile,
  SmartServices,
  Auth,
  Footer
} from '@jetbrains/ring-ui';
import hubLogo from '@jetbrains/logos/hub/hub.svg';

import styles from './app.css';

export default class AppRoot extends Component {
  componentDidMount() {
    // You can uncomment this after registering your client as a Hub service
    // https://www.jetbrains.com/help/hub/2017.3/OAuth-2.0-Authorization.html#d79479e312
    // this.auth.init();
  }

  auth = new Auth({
    // clientId: <your client id here>
    serverUri: 'https://hub.jetbrains.com' // replace with your Hub server
  });

  render() {
    return (
      <div>
        <Header>
          <Link href="/">
            <Icon
              glyph={hubLogo}
              size={Icon.Size.Size48}
            />
          </Link>
          <Tray>
            <SmartServices auth={this.auth}/>
            <SmartProfile auth={this.auth}/>
          </Tray>
        </Header>
        <div className={styles.content}>
          {'App content'}
        </div>
        <Footer/>
      </div>
    );
  }
}
