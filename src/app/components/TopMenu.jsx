

import {TagHeader, LogoMKS, LogoSistemas, CardItem} from '@/app/components/TopMenuStyles.tsx';
import CardIcon from './CardButtonIcon';



export default function TopMenu() {
  return (
    <TagHeader>
      <div>
      <LogoMKS>MKS</LogoMKS>
      <LogoSistemas>Sistemas</LogoSistemas>
      </div>
      <CardItem>
        <CardIcon></CardIcon>
        0</CardItem>
    </TagHeader>
  );
}
