# DeCode - Decentralized Coding Contests

We bring to you the Decentralized Coding Contest **DeCode** to connect developers to the blockchain ecosystem. Rewards are distributed to the highest ranking individuals in contest leaderboard.

Web3 tech used:
- [Cartesi - The Blockchain OS](https://cartesi.io/) - provides compute power on Linux VMs. This is immensely useful considering how slow smart contracts can be on Layer 1. Cartesi allows us to run intense computational jobs concurrently and with ease.

- [Covalent](https://www.covalenthq.com/) - provides a unified API bringing visibility to billions of Web3 data points.


- [Push Protocol](https://push.org/) - a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.


Web2 tech used:
- [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/)
- [DigitalOcean](https://www.digitalocean.com/)
- [Mongo DB](https://www.mongodb.com/)



## Cartesi 
- [Cartesi - The Blockchain OS](https://cartesi.io/)
  - Our platform uses the [ELO Rating System](https://en.wikipedia.org/wiki/Elo_rating_system) for updating the ratings of the users after the contest ends. This can be compute intensive and expensive to run on a solidity smart contract
  - We use the calc-u-rating npm package for the ELO Rating logic and then compile the code using webpack to create a single entry point (dist/main.js) to execute the app using tjs provided in cartesi machine
  - Cartesi Smart Contract (deployed using echo-js demo in the rollups examples repository)
  - 0x42f28Cbcd84c9Bc0aC9909e2AfC1fFcCeC27c39A
  - Cartesi graphql api (deployed on digitalocean droplet)
  - http://128.199.22.239:4000/graphql
- [Covalent](https://www.covalenthq.com/)
  - Our own DCX token is based on erc20 token holders API from Covalent to fetch the latest leaderboards.
  - *****link to that file**** pages/api/covalentapi.js/
- [Push Protocol](https://push.org/)
- After Every Contest ends we inform the users of the rewards recieved by using the push protocol 
- More precisely, we made use of the @pushprotocol/restapi, uiweb
- ****link to that file**** pages/api/notificationPushApi.js
