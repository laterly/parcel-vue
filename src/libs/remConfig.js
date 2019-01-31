  //rem适配
  export default () => {
      let doc = window.document,
          docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      let recalc = (function refreshRem() {
          return refreshRem
      })();
      docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);
      if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
          doc.documentElement.classList.add('ios');
          if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8) doc.documentElement.classList.add('hairlines')
      }
      if (!doc.addEventListener) return;
      window.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false)
  };