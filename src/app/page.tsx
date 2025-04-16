'use client'

import { generateAnimeRecommendations, GenerateAnimeRecommendationsOutput } from '@/ai/flows/generate-anime-recommendations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

// Placeholder function to fetch anime image URLs (replace with actual implementation)
const getAnimeImage = (title: string) => {
  // Replace with actual logic to fetch image from MyAnimeList or another source
  return `https://picsum.photos/200/300?random=${title}`; // Placeholder image URL
};

const getRandomColor = () => {
  const colors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100', 'bg-pink-100'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function Home() {
  const [preferences, setPreferences] = useState('');
  const [recommendations, setRecommendations] = useState<GenerateAnimeRecommendationsOutput>([]);
  const [loading, setLoading] = useState(false);

  const getRecommendations = async () => {
    setLoading(true);
    const newRecommendations = await generateAnimeRecommendations({ preferences });
    // Ensure at least 5 recommendations are returned (or as many as possible)
    setRecommendations(newRecommendations.slice(0, Math.max(5, newRecommendations.length)));
    setLoading(false);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">AniRec - Get Anime Recommendations</h1>
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Enter your favorite anime or genres"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          />
          <Button onClick={getRecommendations} disabled={loading}>
            {loading ? 'Loading...' : 'Get Recommendations'}
          </Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((anime, index) => (
          <Card key={index} className={`shadow-md rounded-lg ${getRandomColor()}`}>
            <CardHeader>
              <CardTitle>{anime.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={getAnimeImage(anime.title)}
                alt={anime.title}
                className="mb-4 rounded-md"
              />
              <CardDescription>
                Rating: {anime.rating}
                <br />
                {anime.summary}
                <br />
                <a href={anime.watchUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Watch Now
                </a>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
