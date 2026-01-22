'use client';

import { useState } from 'react';
import Image from 'next/image';

type FilterType = 'all' | 'estate' | 'modern-zen' | 'urban-patio';

interface Project {
  id: number;
  title: string;
  category: FilterType;
  location: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'The Belvedere Grounds',
    category: 'estate',
    location: 'Tuscany',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD51aBmN1dpqFiFG1KpWABDkMZJuMHwGZoIKF9qK4caxPK3oM5xUD8wNhdhrkPhWDPfA40XXuyTOCYuYYhLO1UkmFpKnbIMRZqegatSe697nb07BdSf8JOCblrq9tGO3mCGa7Zwofmm5EcUJcZzN65rPet4XLkuwjIlU7MMns6S-9KOQqHrog9rK-VRvIqZLp89G8hpB6mq4G8XXZ3Voml8Q942pmJf1N3YLlkUe4llG91wxBho9k-CiZX_HEf16dvteZJO7dLkhZc'
  },
  {
    id: 2,
    title: 'Serenity Courtyard',
    category: 'modern-zen',
    location: 'Kyoto',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuxUZygBl8VV0dfFti1ljI4btvozT3mQqaAAe5dm_SEylHdZ3jl1OuiEfR23KS9jDyajAD9Z-zA8fdEykEVpbJd749Tl0FAXLqDHrBnWAtcQ118RrZMe41RGvIfxBI0_PaFiD-H8YDhpwYhI8P-GwhptO4GSlRHq2HlPwT_-G4AHaWdlPLZL6QoSs_QFEswHtHTra9JVi2-sslKLd_PfdCGBrQ8xNpWCNJHlP-3fTGeuG0isTOEeG_g7HwgzYTi_e8MImTzxZU8E8'
  },
  {
    id: 3,
    title: 'Skyline Sanctuary',
    category: 'urban-patio',
    location: 'Manhattan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJQVijTPqub45I55ircRxFgmlQFFRFlROESsAB2anLgWGe3iKWHC_TrIT2X1MhOogpxaMH7amjcTOqOXWoS_qdBM4-IInezRx8Hh5CuQJKquXiOimvLPl8h-2_kmWNpLPW03-C8dtGLI_wzC5EhHba7q269aZS1y-ClkJ-nqjgoYqXc6vZDnTCfMBWG11mx9BLZLOLLuQHnKnG1TZqns1fgc-ZsxWL03o0LRF8QJ0AoMk7LB5CozGrSajdIasmowhhRrAwQrsAMBA'
  },
  {
    id: 4,
    title: 'Avenue Vertica',
    category: 'urban-patio',
    location: 'Paris',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRx1nZzL11P0p1tD4zTpUe9uZOHSErrpFhfG4UhqCaWdZbOX2tJ1CYZx9U69qeAFIGVtLHx5DXSFZCuqqLypiaikoanpO2cjBtlktwhS9ynD4Lh-BfuaIdSVRtsnSF599wMsYBXFLiUkzbZno9373XNAiokiI9SW77_AMdt2Pjscf5FP1lXSBnL_Z4Wf8zNfbzXxfpmUgfrkLdBnJR_PW0JqyIDqQX_WiTknxmaXIl1E83Z0S5eySJ5Woqhq7SZd-VuLkvU_uDvIY'
  },
  {
    id: 5,
    title: 'The Oakwood Vista',
    category: 'estate',
    location: 'Surrey',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF5Er2tfxQHbEW4gDIL8BLvpAmGFX7mr4_nJBZI3NEzNJww5RuCv907Ors7-d6VAXdkgXNV8olU8-kFbL-WQ1WYaZRvrBXbE4Erqv-bGMWC1ugVWzFPP6MGWdc9VUdXPnc2lvW203nV2kZYN-U-PviW7VQZxpnfavnBjYrPN5M4wW6A5OFLTUxnO73caCxqjLPJjh7GQsP8y9c4RxyGY6IIpTvaaPURVeapPVzA-fI4EUtLnFm1PDLKwSaZKoqfA4LxEvGdhVk9yA'
  },
  {
    id: 6,
    title: 'Geometric Flow',
    category: 'modern-zen',
    location: 'Zurich',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHXaxi1aiWwSbbCFXbNb2xD91lD570v40QOnfDAwTsHRUDpxOVakBPdfKnbYXjIeDQsrOE7ULKL6qNfM5QHWQ65EvhU2JhrGVulM6n6V_RVogD0ZTezlaex2WAgAhX1BCG-9FgFA25cUWG6Cp7uefQ2BZic5PtMG14chPbXx0xtdh9tWh-K3T0cdkzQFa6Hggmn-XarMFtKXkflhpFza2QVE9kbVe9LOHIYkBo65sy9g4Bwbh7_QWQxKDXqqdhMJjgBB-f6Mp0sw8'
  }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-32">
      <header className="pb-16 px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 dark:border-white/10 pb-12">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-7xl mb-6 italic">Selected Works</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-light">
              A curated index of architectural landscapes, from sprawling country estates to minimalist urban sanctuaries.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-[0.2em]">
            <button
              onClick={() => setFilter('all')}
              className={`pb-1 transition-colors ${
                filter === 'all'
                  ? 'text-primary border-b border-primary'
                  : 'text-gray-400 hover:text-[#0d1b10] dark:hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('estate')}
              className={`pb-1 transition-colors ${
                filter === 'estate'
                  ? 'text-primary border-b border-primary'
                  : 'text-gray-400 hover:text-[#0d1b10] dark:hover:text-white'
              }`}
            >
              Estate
            </button>
            <button
              onClick={() => setFilter('modern-zen')}
              className={`pb-1 transition-colors ${
                filter === 'modern-zen'
                  ? 'text-primary border-b border-primary'
                  : 'text-gray-400 hover:text-[#0d1b10] dark:hover:text-white'
              }`}
            >
              Modern Zen
            </button>
            <button
              onClick={() => setFilter('urban-patio')}
              className={`pb-1 transition-colors ${
                filter === 'urban-patio'
                  ? 'text-primary border-b border-primary'
                  : 'text-gray-400 hover:text-[#0d1b10] dark:hover:text-white'
              }`}
            >
              Urban Patio
            </button>
          </div>
        </div>
      </header>

      <main className="px-8 lg:px-16 pb-32 max-w-[1440px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="break-inside-avoid mb-8 group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 transition-all duration-500 ring-0 group-hover:ring-1 ring-primary/50">
                <Image
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                  width={600}
                  height={800}
                  
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#0d1b10] px-6 py-3 text-xs font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Estate
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">
                  {project.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} • {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
