/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x560rogo7zD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
        <div className="min-h-screen bg-[#fff5f5]">
            <header className="text-center py-12 bg-[#fee2e2]">
                <h1 className="text-5xl font-bold text-[#991b1b]">夸夸网</h1>
                <p className="mt-4 text-xl text-[#991b1b]">上面全是各种夸赞人的词汇和语句,让用户对所有词汇、语句进行投票。</p>
            </header>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#991b1b]">我们的服务</h2>
                    <p className="mt-4 text-center text-[#991b1b]">网站支持多语言</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 shadow-md">
                            <h3 className="text-xl font-bold text-[#991b1b]">服务标题</h3>
                            <p className="mt-3 text-[#991b1b]">服务描述。</p>
                            <button className="mt-4 px-6 py-2 bg-[#fecaca] text-[#9f1239] font-bold rounded hover:bg-[#fca5a5]">
                                更多
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-[#fee2e2]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#991b1b]">关键特征</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 shadow-md">
                            <h3 className="text-xl font-bold text-[#991b1b]">特征标题</h3>
                            <p className="mt-3 text-[#991b1b]">特征描述。</p>
                            <button className="mt-4 px-6 py-2 bg-[#fecaca] text-[#9f1239] font-bold rounded hover:bg-[#fca5a5]">
                                更多
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#991b1b]">积极的词和短语</h2>
                    <p className="mt-4 text-center text-[#991b1b]">探索美丽的夸赞词汇和赋能语言。</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-6 shadow-md">
                            <p className="text-[#991b1b]">词汇或短语。</p>
                            <div className="mt-4 flex justify-between">
                                <ThumbsUpIcon className="h-6 w-6 text-[#991b1b]" />
                                <ThumbsDownIcon className="h-6 w-6 text-[#991b1b]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-12 bg-[#9f1239] text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <p>夸夸网 - 发现无尽的赞美</p>
                        <nav>
                            <ul className="flex space-x-4">
                                <li>
                                    <a className="hover:underline" href="#">
                                        首页
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        服务
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        见证
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        联系我们
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        登录
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="mt-8 text-center">
                        <p>联系我们: 123-456-7890</p>
                    </div>
                    <div className="mt-4 text-center">
                        <span>联系我们</span>
                        <ul className="flex justify-center space-x-2">
                            <li>
                                <FacebookIcon className="h-4 w-4" />
                            </li>
                            <li>
                                <TwitterIcon className="h-4 w-4" />
                            </li>
                            <li>
                                <InstagramIcon className="h-4 w-4" />
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function InstagramIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function ThumbsDownIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 14V2" />
            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
        </svg>
    )
}


function ThumbsUpIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
    )
}


function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}