import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function Section(props: Props) {
  return <div className="section">{props.children}</div>;
}
