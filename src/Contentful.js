import {createClient} from 'contentful';

export default createClient ({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
  // space: "dzydpxoozrmc",
  // accessToken: "lxnAzWsA1KYqo2qf7MtCf6Int-VRlr8SoVZaJUi8a3g"
})
