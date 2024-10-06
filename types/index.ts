export default interface MagicButtonProps{
    title: string,
    icon: React.ReactNode,
    position: string, 
    handleClick?: ()=> void;
    otherClasses?: string, 
}