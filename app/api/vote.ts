import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// 初始化 Supabase 客户端
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

interface VoteRequest {
  vocabularyId: string;
  userId: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { vocabularyId, userId }: VoteRequest = req.body;
    const voteWeight = 1; // 所有用户的投票权重均为1
    const timePeriod = 8 * 60 * 60 * 1000; // 用户可以每8小时投票一次

    // 检查用户最近的投票时间
    const { data: lastVote, error: lastVoteError } = await supabase
      .from('votes')
      .select('*')
      .eq('user_id', userId)
      .eq('vocabulary_id', vocabularyId)
      .single();

    if (lastVoteError) {
      console.error('Error fetching last vote:', lastVoteError);
      return res.status(500).json({ message: 'Error fetching last vote' });
    }

    if (lastVote && new Date().getTime() - new Date(lastVote.created_at).getTime() < timePeriod) {
      return res.status(429).json({ message: `Please wait until your next vote.` });
    }

    // 更新词汇的投票数
    const { error } = await supabase
      .from('vocabulary')
      .update({ votes: supabase.raw('votes + ?', voteWeight) })
      .match({ id: vocabularyId });

    if (error) {
      return res.status(500).json({ message: 'Error updating vote count', error });
    }

    // 记录投票
    const { error: voteError } = await supabase
      .from('votes')
      .insert([{ user_id: userId, vocabulary_id: vocabularyId, created_at: new Date().toISOString() }]);

    if (voteError) {
      return res.status(500).json({ message: 'Error recording vote', error: voteError });
    }

    return res.status(200).json({ message: 'Vote recorded successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
