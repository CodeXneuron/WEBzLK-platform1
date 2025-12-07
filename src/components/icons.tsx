import Image from 'next/image';

export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement> & { width?: number, height?: number }) => (
    <Image
      src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/593263272_122096027055155982_4510306994200071308_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HjOJycLOsvAQ7kNvwGRgs18&_nc_oc=AdnYeXXDlXlf-Pznqc3ovAo-eT6xfeh3XuCNkbLHgxqjdAwljV5ADJ-QRok4hoT9iWFpTzDx44SCGna5_i1pOJNL&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=p5gBeuomHaHGQp8MX4ZoRQ&oh=00_AfkpkMdLujft_1G8EJbtNuwmPIIx_45UwLTig0HE_w8DiA&oe=693B152B"
      alt="WEBz Logo"
      width={props.width || 32}
      height={props.height || 32}
      className={props.className}
      unoptimized // Using unoptimized because the URL contains query parameters and might not be stable
    />
  ),
};
