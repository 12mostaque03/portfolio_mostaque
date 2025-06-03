
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate web designer with over 5 years of experience creating stunning digital experiences. 
              I specialize in modern web design, user interface development, and bringing creative visions to life 
              through code.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach combines aesthetic excellence with functional design, ensuring every project not only 
              looks beautiful but also delivers exceptional user experiences that drive results.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="glass-card text-sm">Web Design</span>
              <span className="glass-card text-sm">UI/UX Design</span>
              <span className="glass-card text-sm">Frontend Development</span>
              <span className="glass-card text-sm">Brand Identity</span>
            </div>
          </div>
          
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden glass-card">
                <img 
                  src="/photo.png"
                  alt="Sk Mostaque"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
