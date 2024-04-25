"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

// Ensure Supabase client is correctly imported and installed
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const AddVocabularyPage = () => {
    const router = useRouter();
    const [term, setTerm] = useState('');
    const [lang, setLang] = useState(router.locale || 'en'); // 使用当前 locale 作为默认语言选项

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { data, error } = await supabase
            .from('vocabulary')
            .insert([
                { term, lang, status: 'pending' } // 默认状态为 pending，等待审核
            ]);

        if (error) {
            alert('An error occurred while submitting the term');
            console.error('Error inserting new term:', error);
        } else {
            alert('Term submitted successfully!');
            setTerm('');
            setLang(router.locale || 'en'); // 重置语言为当前 locale 或默认语言
        }
    };

    return (
        <div>
            <h1>Add a New Positive Vocabulary</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="term">Enter a positive term</label>
                <input
                    id="term"
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Enter a positive term"
                    required
                />
                <label htmlFor="language-select">Select Language</label>
                <select id="language-select" value={lang} onChange={(e) => setLang(e.target.value)} aria-label="Select Language" required>
                    <option value="">Select Language</option>
                    <option value="en-US">English</option>
                    <option value="zh-CN">中文 (简体)</option>
                    <option value="zh-TW">中文 (繁體)</option>
                    <option value="ja-JP">日本語</option>
                    <option value="ko-KR">한국어</option>
                    <option value="es-ES">Español</option>
                    <option value="de-DE">Deutsch</option>
                    <option value="fr-FR">Français</option>
                    <option value="hi-IN">印地语</option>
                    <option value="ar-AR">العربية</option>
                    <option value="bn-BD">বাংলা</option>
                    <option value="pt-PT">Português</option>
                    <option value="ru-RU">Русский</option>
                    {/* 根据需要继续添加更多语言选项 */}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddVocabularyPage;
