"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// 初始化 Supabase 客户端
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const AdminPage = () => {
    const [pendingTerms, setPendingTerms] = useState([]);

    // 获取待审核的词汇
    useEffect(() => {
        const fetchPendingTerms = async () => {
            const { data, error } = await supabase
                .from('vocabulary')
                .select('*')
                .eq('status', 'pending');  // 状态为 pending 的表示待审核

            if (error) {
                console.error('Error fetching pending terms:', error);
            } else {
                setPendingTerms(data || []);
            }
        };

        fetchPendingTerms();
    }, []);

    // 处理审核通过操作
    const handleApprove = async (id) => {
        const { data, error } = await supabase
            .from('vocabulary')
            .update({ status: 'approved' })  // 更新状态为 approved
            .match({ id });

        if (error) {
            console.error('Error approving term:', error);
        } else {
            setPendingTerms(pendingTerms.filter((term) => term.id !== id));
        }
    };

    // 处理审核拒绝操作
    const handleReject = async (id) => {
        const { data, error } = await supabase
            .from('vocabulary')
            .update({ status: 'rejected' })  // 更新状态为 rejected
            .match({ id });

        if (error) {
            console.error('Error rejecting term:', error);
        } else {
            setPendingTerms(pendingTerms.filter((term) => term.id !== id));
        }
    };

    return (
        <div>
            <h1>管理员审核界面</h1>
            {pendingTerms.length > 0 ? (
                <ul>
                    {pendingTerms.map((term) => (
                        <li key={term.id}>
                            <div>
                                <p>词汇: {term.term}</p>
                                <button onClick={() => handleApprove(term.id)}>通过</button>
                                <button onClick={() => handleReject(term.id)}>拒绝</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>当前没有待审核的词汇。</p>
            )}
        </div>
    );
};

export default AdminPage;
