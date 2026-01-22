import Link from 'next/link';

export default function FeaturedProjects() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 pt-10">
        <div className="flex items-end justify-between border-b border-[#e7f3e9] dark:border-white/10 pb-6">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Portfolio</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Featured Projects</h2>
          </div>
          <Link href="/portfolio" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
            View All <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuxUZygBl8VV0dfFti1ljI4btvozT3mQqaAAe5dm_SEylHdZ3jl1OuiEfR23KS9jDyajAD9Z-zA8fdEykEVpbJd749Tl0FAXLqDHrBnWAtcQ118RrZMe41RGvIfxBI0_PaFiD-H8YDhpwYhI8P-GwhptO4GSlRHq2HlPwT_-G4AHaWdlPLZL6QoSs_QFEswHtHTra9JVi2-sslKLd_PfdCGBrQ8xNpWCNJHlP-3fTGeuG0isTOEeG_g7HwgzYTi_e8MImTzxZU8E8")`
              }}
            />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-white text-2xl font-bold leading-tight mb-2">Modern Zen Gardens</p>
              <p className="text-white/70 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Tokyo Residence • 2023
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJQVijTPqub45I55ircRxFgmlQFFRFlROESsAB2anLgWGe3iKWHC_TrIT2X1MhOogpxaMH7amjcTOqOXWoS_qdBM4-IInezRx8Hh5CuQJKquXiOimvLPl8h-2_kmWNpLPW03-C8dtGLI_wzC5EhHba7q269aZS1y-ClkJ-nqjgoYqXc6vZDnTCfMBWG11mx9BLZLOLLuQHnKnG1TZqns1fgc-ZsxWL03o0LRF8QJ0AoMk7LB5CozGrSajdIasmowhhRrAwQrsAMBA")`
              }}
            />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-white text-2xl font-bold leading-tight mb-2">Minimalist Patios</p>
              <p className="text-white/70 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Beverly Hills • 2024
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRx1nZzL11P0p1tD4zTpUe9uZOHSErrpFhfG4UhqCaWdZbOX2tJ1CYZx9U69qeAFIGVtLHx5DXSFZCuqqLypiaikoanpO2cjBtlktwhS9ynD4Lh-BfuaIdSVRtsnSF599wMsYBXFLiUkzbZno9373XNAiokiI9SW77_AMdt2Pjscf5FP1lXSBnL_Z4Wf8zNfbzXxfpmUgfrkLdBnJR_PW0JqyIDqQX_WiTknxmaXIl1E83Z0S5eySJ5Woqhq7SZd-VuLkvU_uDvIY")`
              }}
            />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-white text-2xl font-bold leading-tight mb-2">Architectural Greenery</p>
              <p className="text-white/70 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Oslo Office Park • 2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
