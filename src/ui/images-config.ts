import mainBackground from '../../public/assets/icons/mainBackground.jpg';
import advantagesBackground from '../../public/assets/icons/advantagesBackground.jpg';
import formBackground from '../../public/assets/icons/formBackground.png';
import logo from '../../public/assets/icons/logo.jpg';
import mirIcon from '../../public/assets/icons/mir.jpg';
import googlePayIcon from '../../public/assets/icons/googlePay.jpg';
import visaIcon from '../../public/assets/icons/visa.jpg';
import webMoneyIcon from '../../public/assets/icons/webmoney.jpg';
import yandexIcon from '../../public/assets/icons/yandex.jpg';
import masterCardIcon from '../../public/assets/icons/mastercard.jpg';
import telegramIcon from '../../public/assets/icons/telegramm.jpg';
import okIcon from '../../public/assets/icons/ok.jpg';
import facebookIcon from '../../public/assets/icons/facebook.jpg';
import whatsappIcon from '../../public/assets/icons/whatsapp.jpg';
import viberIcon from '../../public/assets/icons/viber.jpg';
import instargramIcon from '../../public/assets/icons/instagram.jpg';
import vkIcon from '../../public/assets/icons/vk.jpg';
import product1 from '../../public/assets/icons/product1.jpg';
import product2 from '../../public/assets/icons/product2.jpg';
import product3 from '../../public/assets/icons/product3.jpg';
import product4 from '../../public/assets/icons/product4.jpg';
import product5 from '../../public/assets/icons/product5.jpg';
import product6 from '../../public/assets/icons/product6.jpg';
import product7 from '../../public/assets/icons/product7.jpg';
import data from '../../public/assets/images.json';
import { useUpdateValuesInObject } from '@/hooks/use-update-values-in-object.hook';

export const images = {
  backgrounds: {
    main: mainBackground.src,
    advantages: advantagesBackground.src,
    form: formBackground.src,
    logo: logo.src
  },

  products: {
    product1: product1.src,
    product2: product2.src,
    product3: product3.src,
    product4: product4.src,
    product5: product5.src,
    product6: product6.src,
    product7: product7.src
  },

  payments: {
    mir: {
      src: mirIcon.src,
      width: '54',
      height: '16'
    },
    google: {
      src: googlePayIcon.src,
      width: '72',
      height: '28'
    },
    visa: {
      src: visaIcon.src,
      width: '68',
      height: '22'
    },
    webmoney: {
      src: webMoneyIcon.src,
      width: '42',
      height: '42'
    },
    yandex: {
      src: yandexIcon.src,
      width: '38',
      height: '36'
    },
    mastercard: {
      src: masterCardIcon.src,
      width: '66',
      height: '40'
    }
  },

  socials: {
    telegram: telegramIcon.src,
    ok: okIcon.src,
    facebook: facebookIcon.src,
    whatsapp: whatsappIcon.src,
    viber: viberIcon.src,
    instargram: instargramIcon.src,
    vk: vkIcon.src
  }
};

const newObject = useUpdateValuesInObject(images.backgrounds, data.backgrounds);
console.log(newObject);
