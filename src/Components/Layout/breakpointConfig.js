// breakpoint watcher
export const breakpoint = new Proxy(
  {
    breakpointWidth: window.screen.width,
    xs: window.screen.width < 617,
    sm: window.screen.width >= 617 && window.screen.width < 769,
    lg: window.screen.width >= 769 && window.screen.width < 1367,
    xl: window.screen.width >= 1367,
    isSmAndDown: window.screen.width < 769,
    isLgAndDown: window.screen.width < 1367,
  },
  {
    set: function (obj, prop, value) {
      if(obj[prop]) {
        if(prop === 'breakpointWidth') {
          if(obj.breakpointWidth !== value) {
            obj.breakpointWidth = value;
            obj.xs = value < 617;
            obj.sm = value >= 617 && value < 769;
            obj.lg = value >= 769 && value < 1367;
            obj.xl = value >= 1367;
            obj.isSmAndDown = value < 769;
            obj.isLgAndDown = value < 1367;
          }
          return true;
        } else throw new Error(`Property ${prop} is read-only`)
      } else throw new Error(`Property ${prop} not exists`)
    }
  });