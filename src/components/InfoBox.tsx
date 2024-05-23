import { ReactNode } from 'react';

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};

type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props; // we can not destructure severity here | b/c it may not be available in hint mode

  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props; // if we pass the above condition we must be in warning mode so we can destructure severity here with out getting errors

  return (
    <aside
      className={`infobox infobox-warning ${
        severity ? `warning--${severity}` : ''
      }`}
    >
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
