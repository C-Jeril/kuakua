// next.config.js
module.exports = {
  i18n: {
    locales: [
      'en-US',
      'zh-CN',
      'zh-TW',
      'ja-JP',
      'ko-KR',
      'es-ES',
      'de-DE',
      'fr-FR',
      'hi-IN', // 印地语
      'ar-AR', // 阿拉伯语
      'bn-BD', // 孟加拉语
      'pt-PT', // 葡萄牙语
      'ru-RU'  // 俄语
    ],// 支持的语言列表
    defaultLocale: 'en-US', // 默认语言
    localeDetection: false, // 是否自动根据用户的语言偏好设置重定向
  },
  trailingSlash: true, // URL末尾添加斜杠
}