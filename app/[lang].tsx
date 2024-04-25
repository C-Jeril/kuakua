"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const VocabularyListByLanguagePage = () => {
    const [vocabulary, setVocabulary] = useState([]);
    const router = useRouter();
    const { locale } = router; // 使用 locale 替代 lang

    useEffect(() => {
        if (locale) {
            const fetchVocabulary = async () => {
                const { data, error } = await supabase
                    .from('vocabulary')
                    .select('*')
                    .eq('locale', locale) // 使用 locale 进行查询
                    .eq('status', 'approved'); // 只展示已经审核通过的词汇

                if (error) {
                    console.error('Error fetching vocabulary:', error);
                } else {
                    setVocabulary(data || []);
                }
            };

            fetchVocabulary();
        }
    }, [locale]);

    if (!vocabulary.length) {
        return <div>Loading...</div>; // 显示加载中提示
    }

    return (
        <div>
            <h1>{locale} Positive Vocabulary List</h1>
            <ul>
                {vocabulary.map((term) => (
                    <li key={term.id}>{term.term}</li>
                ))}
            </ul>
        </div>
    );
};

export default VocabularyListByLanguagePage;
