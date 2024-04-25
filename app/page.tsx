"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { usePathname, useSearchParams } from 'next/navigation';

// Ensure Supabase client is correctly imported and installed
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
console.log('Supabase Instance: ', supabase);

interface VocabularyItem {
  id: string;
  term: string;
  votes: number;
}

const Home = () => {
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>([]);
  const pathname = usePathname();
  const searchParams: URLSearchParams = useSearchParams();

  // Directly use searchParams to get the 'locale'
  const locale = searchParams.get('locale') || 'defaultLocale'; // Fallback to 'defaultLocale' if 'locale' is not specified

  useEffect(() => {
    const fetchVocabulary = async () => {
      const { data, error } = await supabase
        .from('vocabulary')
        .select('*')
        .order('created_at', { ascending: false })
        .eq('locale', locale); // Filter by current locale

      if (error) {
        console.error("Error fetching vocabulary:", error);
      } else {
        setVocabulary(data || []);
      }
    };

    if (locale) {
      fetchVocabulary();
    }
  }, [locale]); // Dependency on locale

  // Handling votes
  const handleVote = async (vocabularyId: string) => {
    const response = await fetch('/api/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 'your-user-id',
        vocabularyId: vocabularyId,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      const updatedVocabulary = vocabulary.map(item => {
        if (item.id === vocabularyId) {
          return { ...item, votes: item.votes + 1 };
        }
        return item;
      });
      setVocabulary(updatedVocabulary);
    } else {
      alert(data.message || 'Error voting.');
    }
  };

  return (
    <div className="bg-blue-900 min-h-screen text-white">
      <nav className="bg-blue-800 p-4">
        {/* Navigation content */}
      </nav>
      <header className="text-center p-8">
        <h1 className="text-4xl font-bold">All Positive Vocabulary Votes</h1>
      </header>
      <main className="p-4">
        <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vocabulary.map((word) => (
            <div key={word.id} className="bg-blue-700 p-4 rounded-md shadow-lg">
              <h2 className="text-2xl font-semibold">{word.term}</h2>
              <p>Votes: {word.votes}</p>
              <button
                className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white font-bold"
                onClick={() => handleVote(word.id)}
              >
                Vote
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
