// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import centrifugeChain from './centrifuge-chain';
import edgeware from './edgeware';
import encointerNode from './encointer-node';
import kulupu from './kulupu';
import nodeTemplate from './node-template';
import robonomics from './robonomics';
import stablePoc from './stable-poc';

export default {
  'centrifuge-chain': centrifugeChain,
  edgeware,
  'encointer-node': encointerNode,
  ipci: robonomics,
  kulupu,
  'node-template': nodeTemplate,
  'robonomics-parachain': robonomics,
  robonomics,
  'stable-poc': stablePoc,
  stable_poc: stablePoc
};
