export type SVGIconProps = React.HTMLAttributes<SVGElement>;
export type ImageIconProps = React.HTMLAttributes<HTMLImageElement>;

export const Icons = {
  applicationIcon: (props: ImageIconProps) => (
    <img src="/trident-icon.svg" className="h-7" alt="Trident" {...props} />
  ),
  applicationLogo: (props: ImageIconProps) => (
    <img src="/trident-logo.svg" className="h-7" alt="Trident" {...props} />
  ),
  applicationIconDark: (props: ImageIconProps) => (
    <img
      src="/trident-icon-dark.svg"
      className="h-7"
      alt="Trident"
      {...props}
    />
  ),
  applicationLogoDark: (props: ImageIconProps) => (
    <img
      src="/trident-logo-dark.svg"
      className="h-7"
      alt="Trident"
      {...props}
    />
  ),
  spinner: (props: SVGIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
