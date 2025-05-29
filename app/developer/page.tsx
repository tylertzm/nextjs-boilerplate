"use client";
import { useEffect, useState } from 'react';

interface VercelProject {
  id: string;
  name: string;
  createdAt: number;
  link: string;
}

const VERCEL_TOKEN = process.env.NEXT_PUBLIC_VERCEL_TOKEN!;
const SELECTED_PROJECTS = ['knowledgeos'];

const DeveloperPage = () => {
  const [projectUrl, setProjectUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVercelProjects = async () => {
      try {
        const response = await fetch('https://api.vercel.com/v9/projects', {
          headers: {
            Authorization: `Bearer ${VERCEL_TOKEN}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const project = data.projects.find((p: any) => SELECTED_PROJECTS.includes(p.name));
          if (project) {
            setProjectUrl(`https://${project.name}.vercel.app`);
          }
        } else {
          console.error('Vercel API error:', await response.text());
        }
      } catch (error) {
        console.error('Failed to fetch Vercel projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVercelProjects();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-neutral-50">
        <div className="h-[2px] w-16 bg-neutral-400 animate-pulse"></div>
      </div>
    );
  }

  if (!projectUrl) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-neutral-500">
        <p>knowledgeOS プロジェクトが見つかりません</p>
      </div>
    );
  }

return (
  <div className="min-h-screen flex justify-center py-20 px-4 bg-black">
    <div className="max-w-4xl w-full space-y-8">
      <h1 className="text-3xl font-light tracking-wider text-white border-b border-neutral-800 pb-4">
        knowledgeOS
        <span className="block text-sm mt-1 text-neutral-400">Live Preview</span>
      </h1>

      <a
        href={projectUrl!}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-neutral-700">
          <iframe
            src={projectUrl!}
            title="knowledgeOS Preview"
            className="w-full h-full"
            allow="fullscreen"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white bg-white/10 backdrop-blur px-6 py-2 rounded-lg text-sm tracking-wide border border-white/20">
              Visit Site
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
);
};

export default DeveloperPage;