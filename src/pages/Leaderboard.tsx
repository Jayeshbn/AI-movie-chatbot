import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "Alex Johnson", level: 5, score: 2500, achievements: ["Level 5 Master", "Speed Demon"] },
    { rank: 2, name: "Sarah Smith", level: 4, score: 2100, achievements: ["Conversation Expert"] },
    { rank: 3, name: "Mike Brown", level: 4, score: 1900, achievements: ["Quick Learner"] },
    { rank: 4, name: "Emma Davis", level: 3, score: 1600, achievements: ["Rising Star"] },
    { rank: 5, name: "Chris Wilson", level: 3, score: 1400, achievements: ["Consistent Player"] }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="glass-card p-6">
        <div className="flex items-center justify-center mb-8">
          <Trophy className="h-8 w-8 text-yellow-400 mr-3" />
          <h1 className="text-3xl font-bold gradient-text">Global Leaderboard</h1>
        </div>

        <div className="space-y-4">
          {leaderboardData.map((player) => (
            <div
              key={player.rank}
              className="bg-white/5 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold gradient-text w-8">
                  {player.rank}
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-white">{player.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>Level {player.level}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold gradient-text">
                  {player.score} pts
                </div>
                <div className="text-sm text-gray-400">
                  {player.achievements.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;