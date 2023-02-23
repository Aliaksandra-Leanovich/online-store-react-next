import mainBackground from '../../public/icons/mainBackground.jpg';
import advantagesBackground from '../../public/icons/advantagesBackground.jpg';
import formBackground from '../../public/icons/formBackground.png';
import logo from '../../public/icons/logo.jpg';
import mirIcon from '../../public/icons/mir.jpg';
import googlePayIcon from '../../public/icons/googlePay.jpg';
import visaIcon from '../../public/icons/visa.jpg';
import webMoneyIcon from '../../public/icons/webmoney.jpg';
import yandexIcon from '../../public/icons/yandex.jpg';
import masterCardIcon from '../../public/icons/mastercard.jpg';
import telegramIcon from '../../public/icons/telegramm.jpg';
import okIcon from '../../public/icons/ok.jpg';
import facebookIcon from '../../public/icons/facebook.jpg';
import whatsappIcon from '../../public/icons/whatsapp.jpg';
import viberIcon from '../../public/icons/viber.jpg';
import instargramIcon from '../../public/icons/instagram.jpg';
import vkIcon from '../../public/icons/vk.jpg';

const dark = {
  color: {
    borderAdvantage: '#ff3465',
    formBackground: '#000000',
    formText: '#ffffff',
    formInput: '#ffffff ',
    formPlaceholder: '#ffffff',
    labelSlider: '#ff3465',
    lightPrimary: '#000000',
    lightPrimary2: '#4e4e4e',
    navigationBackground: '#000000',
    primary: '#ffffff',
    priceSliderNew: '#1a1a1a',
    priceSliderOld: '#bcbcbc',
    secondary: '#000000',
    sliderBackground: '#ffffff',
    text: '#ffffff',
    text2: '#b7b7b7',
    text3: '#828282',
    textSlider: '#969696',
    textSlider2: '#5c5c66',
    textSlider3: '#ff3465'
  }
};

const gray = {
  color: {
    borderAdvantage: '#ff3465',
    formBackground: '#3d3d3d',
    formText: '#ffffff',
    formInput: '#ffffff ',
    formPlaceholder: '#ffffff',
    labelSlider: '#ff3465',
    lightPrimary: '#3d3d3d',
    lightPrimary2: '#4e4e4e',
    navigationBackground: '#3d3d3d',
    primary: '#ffffff',
    priceSliderNew: '#1a1a1a',
    priceSliderOld: '#bcbcbc',
    secondary: '#3d3d3d',
    sliderBackground: '#ffffff',
    text: '#ffffff',
    text2: '#b7b7b7',
    text3: '#828282',
    textSlider: '#969696',
    textSlider2: '#5c5c66',
    textSlider3: '#ff3465'
  }
};

const light = {
  color: {
    borderAdvantage: 'rgba(0, 0, 0, 0.2)',
    formBackground: '#f3f3f3',
    formText: '#5a5a5a',
    formInput: '#c4c4c4 ',
    formPlaceholder: '#9a9a9a',
    labelSlider: '#ff3465',
    lightPrimary: '#323232',
    lightPrimary2: '#4e4e4e',
    navigationBackground: '#000000',
    primary: '#000000',
    priceSliderNew: '#1a1a1a',
    priceSliderOld: '#bcbcbc',
    secondary: '#ffffff',
    sliderBackground: '#ffffff',
    text: '#464646',
    text2: '#b7b7b7',
    text3: '#828282',
    textSlider: '#969696',
    textSlider2: '#5c5c66',
    textSlider3: '#ffffff'
  }
};

const fonts = {
  fontWeight: {
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
  },

  fontFamily: {
    primary: `"OpenSans", sans-serif`,
    secondary: `"Roboto", sans-serif;`
  }
};

const images = {
  backgrounds: {
    main: mainBackground.src,
    advantages: advantagesBackground.src,
    form: formBackground.src,
    logo: logo.src
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

export const lightTheme = { ...fonts, ...light, ...images };
export const darkTheme = { ...fonts, ...dark, ...images };
export const grayTheme = { ...fonts, ...gray, ...images };
