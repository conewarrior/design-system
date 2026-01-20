import { ReactNode } from 'react';

interface StepProps {
  number: number;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Step({ number, title, description, children }: StepProps) {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <div className="step-content">
        <h3 className="step-title">{title}</h3>
        {description && <p className="step-description">{description}</p>}
        <div className="step-body">{children}</div>
      </div>
    </div>
  );
}
