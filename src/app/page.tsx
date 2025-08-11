export default function Home() {
  return (
    <div>

      <section className="relative h-screen w-full bg-black">
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
          <img src="https://res.cloudinary.com/djrhjkkvm/image/upload/v1715295053/Shop/lets-plant-a-forest_for-every-star-a-tree_native-miyawaki-forest_mojave-desert_t2l360.jpg" className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-50" />
        </div>
        <div style={{
          position: "absolute",
          top: "49%",
          transform: "translateY(-49%)",
        }} className="w-full px-6 z-20">
          <h2 className="font-regular tracking-normal leading-tighter text-white mx-auto max-w-2xl lg:max-w-4xl text-center text-xl">
            Earthcare &gt; doomscroll.
          </h2>
        </div>
      </section>

      <section style={{ backgroundColor: "#eff3f6" }}>
      
      </section>

      <footer className="mb-20 text-center text-gray-500">
        &copy; 2025 For Every Star A Tree.
      </footer>

    </div>
  );
}
