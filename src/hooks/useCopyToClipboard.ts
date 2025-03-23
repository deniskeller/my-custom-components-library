import { useState } from 'react';

const useCopyToClipboard = (): [boolean, (text: string) => Promise<void>] => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      // Сбрасываем состояние через 2 секунды
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
      setIsCopied(false);
    }
  };

  return [isCopied, copyToClipboard];
};

export default useCopyToClipboard;