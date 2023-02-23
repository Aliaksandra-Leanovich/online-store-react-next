import { media } from '@/ui';
import styled from '@emotion/styled';

export const WrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  max-width: 250px;
`;

export const ContainerSC = styled.div`
  display: flex;
  column-gap: 10px;

  ${media.DESKTOP} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    margin-bottom: 30px;
  }
  ${media.TABLET} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    margin-bottom: 30px;
  }
  ${media.PHONE} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    margin-bottom: 30px;
  }
`;

export const TitleSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 22px;
  line-height: 33px;

  color: ${(props) => props.theme.color.text2};
`;

export const TelegramSC = styled.div`
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.theme.socials.telegram})`};
`;

export const OkSC = styled.div`
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.theme.socials.ok})`};
`;

export const FacebookSC = styled.div`
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.theme.socials.facebook})`};
`;

export const WhatsappSC = styled.div`
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.theme.socials.whatsapp})`};
`;

export const ViberSC = styled.div`
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.theme.socials.viber})`};
`;

export const InstagramSC = styled.div`
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.theme.socials.instargram})`};
`;

export const VkSC = styled.div`
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.theme.socials.vk})`};
`;
