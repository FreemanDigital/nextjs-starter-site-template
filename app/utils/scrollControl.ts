// utils/scrollControl.ts
export const disableScroll = (): void => {
    document.body.style.overflow = 'hidden';
  };
  
  export const enableScroll = (): void => {
    document.body.style.overflow = '';
  };
  