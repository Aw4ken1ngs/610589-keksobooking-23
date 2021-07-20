import { createAd, SIMILAR_AD_COUNT } from './ad.js';
import { setDisable, setEnable } from './form.js';
import { renderCard } from './offers.js';

const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());

similarAds.forEach((ad) => {
  renderCard(ad);
});


similarAds;
setDisable();
setEnable();
