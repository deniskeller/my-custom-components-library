import React from 'react';
import { BaseIcon, BaseSubtitle, BaseTooltip } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';

interface Props {
  href?: string;
  title?: string;
}

const LinkToViewCode: React.FC<Props> = ({ href = '', title = '' }) => {
  return (
    <>
      <BaseSubtitle className="Mr">{title}</BaseSubtitle>

      <BaseTooltip content="Open in Github">
        <Link href={href} target="_blank" rel="noreferrer">
          <div className="Icon">
            <BaseIcon icon={ALL_ICONS.GITHUB} />
          </div>
        </Link>
      </BaseTooltip>
    </>
  );
};

export default LinkToViewCode;
