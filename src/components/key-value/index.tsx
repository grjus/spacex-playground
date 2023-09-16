import { FC, ReactNode } from 'react';

const KeyValue: FC<{ label: string; icon: ReactNode; children?: JSX.Element }> = ({ label, children, icon }) => {
  return (
    <div>
      <div className="flex items-center gap-x-1 text-lg text-info">
        <span className="font-bold">{label}</span>
        <span>{icon}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default KeyValue;
