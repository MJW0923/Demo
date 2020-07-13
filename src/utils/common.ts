/**
 * 通过参数名获取url中的参数值
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param  {string} name 参数名
 * @param  {boolean} hash 是否是hash
 * @return {string}  参数值]
 */
export function getQueryString(name: string, hash?: any) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r;
  if (hash) {
    r = window.location.hash.split('?')[1] && window.location.hash.split('?')[1].match(reg);
  } else {
    r = window.location.search.substr(1).match(reg);
  }
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

export const getCookieByName = (name: string) => {
  let arr;
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
};

/*将100000转为100,000.00形式*/
export const formatMoney = (money: any, rate = 100) => {
  if (money && money != null) {
    if (rate) {
      money = +money / +rate;
    }
    money = String(money);
    var left = money.split('.')[0],
      right = money.split('.')[1];
    right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
    var temp = left
      .split('')
      .reverse()
      .join('')
      .match(/(\d{1,3})/g);
    return (
      (Number(money) < 0 ? '-' : '') +
      temp
        .join(',')
        .split('')
        .reverse()
        .join('') +
      right
    );
  } else if (money === 0) {
    return '0.00';
  } else {
    return '0.00';
  }
};
/**
 * 单位元->单位分
 * @param money 要转换的钱，单位元
 * @param digit 转换倍数
 */
export const regYuanToFen = (money: number, digit: number) => {
  if (money) {
    let m = 0;
    let s1 = money.toString();
    let s2 = digit.toString();
    try {
      m += s1.split('.')[1].length;
    } catch (e) {}
    try {
      m += s2.split('.')[1].length;
    } catch (e) {}
    return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
  } else {
    return 0;
  }
};
export const regFenToYuan = (fen: number) => {
  if (fen) {
    let num = fen;
    num = fen * 0.01;
    let tmpnum = num + '';
    const reg =
      tmpnum.indexOf('.') > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
    tmpnum = tmpnum.replace(reg, '$1');
    return toDecimal2(tmpnum);
  } else {
    return 0;
  }
};
export const toDecimal2 = (x: any) => {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  var f = Math.round(x * 100) / 100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
};

export const simpleClone = (obj: any) => {
  if (obj) {
    try {
      return JSON.parse(JSON.stringify(obj));
    } catch (error) {
      console.log(error);
      return obj;
    }
  } else {
    return obj;
  }
};

/**
 * 随机指定长度字符串
 * @param length
 */
export const randomString = (length: number) => {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};
