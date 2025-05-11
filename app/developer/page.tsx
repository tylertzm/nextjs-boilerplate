
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Type definitions for GitHub Activity and Commit
interface Commit {
  message: string;
}

interface Event {
  type: string;
  repo: {
    name: string;
    url: string;
  };
  payload: {
    commits: Commit[];
  };
}

const DeveloperPage: React.FC = () => {
  const [activities, setActivities] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Replace 'your-github-username' with your actual GitHub username
  const GITHUB_USERNAME = 'tylertzm';

  useEffect(() => {
    const fetchGithubActivity = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events`);
        if (response.ok) {
          const data: Event[] = await response.json();
          // Filter only push events
          const pushEvents = data.filter(event => event.type === 'PushEvent');
          setActivities(pushEvents.slice(0, 5)); // Limit to 5 activities
        }
      } catch (error) {
        console.error('Failed to fetch GitHub activity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubActivity();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white font-geistSans">

      <div className="w-full max-w-xl p-4 bg-gray-100 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Recent GitHub Activity</h2>
        
        {loading ? (
          <p>Loading...</p>
        ) : activities.length > 0 ? (
          <ul className="space-y-3">
            {activities.map((event, index) => (
              <li key={index} className="bg-white p-3 rounded-xl shadow-sm">
                <p className="text-lg font-medium">
                  <Link href={event.repo.url.replace('api.', '').replace('/repos', '')} target="_blank">
                    {event.repo.name}
                  </Link>
                </p>
                <p className="text-sm text-gray-600">Pushed {event.payload.commits.length} commit(s)</p>
                <ul className="ml-4 mt-1 text-sm text-gray-700">
                  {event.payload.commits.map((commit, idx) => (
                    <li key={idx}>- {commit.message}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent push events found.</p>
        )}
      </div>
    </div>
  );
};

export default DeveloperPage;