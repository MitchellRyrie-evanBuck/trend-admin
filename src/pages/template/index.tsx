import { Card, Typography } from 'antd';
import { useState } from 'react';

import { useThemeToken } from '@/theme/hooks';

export default function TemplatePage() {
  const { colorPrimary } = useThemeToken();
  return (
    <div>
      模版
    </div>
  );
}
