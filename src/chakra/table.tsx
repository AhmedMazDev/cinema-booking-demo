import * as React from "react";

function TableIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse cx={10} cy={10} rx={7.426} ry={7.353} fill={props.color} />
      <ellipse cx={0.99} cy={10} rx={0.99} ry={0.98} fill={props.color} />
      <ellipse cx={17.03} cy={16.373} rx={0.99} ry={0.98} fill={props.color} />
      <ellipse cx={17.03} cy={3.627} rx={0.99} ry={0.98} fill={props.color} />
      <ellipse cx={3.564} cy={3.627} rx={0.99} ry={0.98} fill={props.color} />
      <ellipse cx={10} cy={0.98} rx={0.99} ry={0.98} fill={props.color} />
      <ellipse cx={3.564} cy={16.373} rx={0.99} ry={0.98} fill={props.color} />
      <ellipse cx={10} cy={19.02} rx={0.99} ry={0.98} fill={props.color} />
      <ellipse cx={19.01} cy={10} rx={0.99} ry={0.98} fill={props.color} />
    </svg>
  );
}

export default TableIcon;
