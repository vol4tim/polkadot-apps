// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import acala from './acala';
import centrifugeChain from './centrifuge-chain';
import crab from './crab';
import testPara from './cumulus-test-parachain';
import edgeware from './edgeware';
import encointerNodeNotee from './encointer-node-notee';
import encointerNodeTeeproxy from './encointer-node-teeproxy';
import kilt from './kilt';
import kulupu from './kulupu';
import nodeTemplate from './node-template';
import robonomics from './robonomics';
import nodle from './nodle';
import stablePoc from './stable-poc';

export default {
  Crab: crab,
  'Nodle Chain Node': nodle,
  acala,
  'centrifuge-chain': centrifugeChain,
  'cumulus-test-parachain': testPara,
  edgeware,
  'encointer-node': encointerNodeNotee,
  'encointer-node-notee': encointerNodeNotee,
  'encointer-node-teeproxy': encointerNodeTeeproxy,
  ipci: robonomics,
  kulupu,
  'mashnet-node': kilt,
  'node-template': nodeTemplate,
  'robonomics-parachain': robonomics,
  robonomics,
  'stable-poc': stablePoc,
  stable_poc: stablePoc
};
