import css from "./style.module.scss"
import cn from "classnames"
import Image from "../../assets/images/placeholder.jpg"

interface AvatarProps {
    src?: string,
    alt?: string,
    size?: AvatarSize,
    onClick?: () => void,
    editable?: boolean;
}


export const enum AvatarSize {
    SMALL = "small",
    MEDIUM = "medium",
    BIG = "big"
}


function Avatar({src, alt, size = AvatarSize.SMALL, editable, onClick}:AvatarProps) {


  return (
    <div onClick={onClick} className={cn(css.wrapper, css[size], editable && css.editable)}>
      <img src={src || Image} alt={alt} />
    </div>
  )
}

export default Avatar