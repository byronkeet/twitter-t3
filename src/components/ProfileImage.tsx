import Image from "next/image";
import { VscAccount } from "react-icons/vsc";
type ProfileImageProps = {
	src?: string | null;
	className?: string;
};

const ProfileImage = ({ src, className = "" }: ProfileImageProps) => {
  return (
	<div className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}>
		{src == null ? (
			<VscAccount className="h-full w-full" />
		) : (
			<Image
				src={src}
				alt="Profile image"
				fill
				quality={100}
			/>
		)}
	</div>
  )
}

export default ProfileImage