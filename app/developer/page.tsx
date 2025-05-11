"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
  created_at: string;
}



const GITHUB_USERNAME = 'tylertzm';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date);
};

const DeveloperPage = () => {
  const [activities, setActivities] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGithubActivity = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events`);
        if (response.ok) {
          const data: Event[] = await response.json();
          const pushEvents = data.filter((event) => event.type === 'PushEvent');
          setActivities(pushEvents.slice(0, 5));
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
    <div className='flow min-h-screen flex justify-center bg-[#ffffff] py-20 px-4'>
      <div className='max-w-xl mx-auto'>
        <h1 className='mb-16 text-3xl font-light tracking-wider text-neutral-800 border-b border-neutral-200 pb-4 max-w-xs'>
        进展
          <span className='block text-sm mt-1 text-neutral-500'>Development Activity</span>
        </h1>

        {loading ? (
          <div className='flex justify-center py-12'>
            <div className='h-[1px] w-12 bg-neutral-300 animate-pulse'></div>
          </div>
        ) : activities.length > 0 ? (
          <div className='space-y-16'>
            {activities.map((event, index) => (
              <div key={index} className='relative pl-6'>
                <div className='absolute left-0 top-2 h-[1px] w-3 bg-neutral-400' />
                <div className='space-y-3'>
                  <time className='font-light tracking-wider text-sm text-neutral-500'>
                    {formatDate(event.created_at)}
                  </time>
                  <h3 className='text-xl font-light tracking-wide'>
                    <Link
                      href={event.repo.url.replace('api.', '').replace('/repos', '')}
                      target='_blank'
                      className='hover:text-neutral-600 transition-colors duration-300'
                    >
                      {event.repo.name}
                    </Link>
                  </h3>
                  <p className='text-sm font-light text-neutral-600'>
                    {event.payload.commits.length}
                    <span className='ml-1'>コミット</span>
                  </p>
                  <ul className='mt-4 space-y-2'>
                    {event.payload.commits.map((commit, idx) => (
                      <li
                        key={idx}
                        className='text-sm font-light text-neutral-700 leading-relaxed pl-4 border-l border-neutral-200'
                      >
                        {commit.message}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='py-12 text-center'>
            <p className='text-neutral-600 font-light tracking-wide'>
              最近のアクティビティはありません
              <span className='block mt-1 text-sm text-neutral-500'>No recent activities found</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeveloperPage;
