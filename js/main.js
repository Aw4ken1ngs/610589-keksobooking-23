import { createAd } from './ad.js';
import { SIMILAR_AD_COUNT } from './ad.js';

const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());

similarAds;
