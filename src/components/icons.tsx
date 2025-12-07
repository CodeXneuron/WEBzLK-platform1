import Image from 'next/image';

export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement> & { width?: number, height?: number }) => (
    <Image
      src="https://i.ibb.co/PGRr8ktt/logo-yakawebz-trans.png"
      alt="WEBz Logo"
      width={props.width || 32}
      height={props.height || 32}
      className={props.className}
    />
  ),
};
