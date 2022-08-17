<!--崩溃欺骗-->
const OriginTitle = document.title;
let titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '╭(°A°`)╮ 喔唷，页面崩溃啦 ~';
    clearTimeout(titleTime);
  }
  else {
    document.title = '(ฅ>ω<*ฅ) 噫又好了~' + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
