// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // 如果请求是针对静态文件或者API路由，就不进行重定向
  if (req.nextUrl.pathname.startsWith('/_next') || req.nextUrl.pathname.includes('/api/')) {
    return;
  }

  // 如果没有指定语言，则重定向到默认语言
  if (!req.nextUrl.locale) {
    const url = req.nextUrl.clone();
    url.pathname = `/en${url.pathname}`; // 假设英语是默认语言
    return NextResponse.redirect(url);
  }
}
