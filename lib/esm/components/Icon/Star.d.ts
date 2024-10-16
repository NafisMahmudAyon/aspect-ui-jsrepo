interface StarProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    rest?: React.SVGProps<SVGSVGElement>;
    size?: number;
}
declare const Star: ({ className, size, ...rest }: StarProps) => import("react/jsx-runtime").JSX.Element;
export { Star };
