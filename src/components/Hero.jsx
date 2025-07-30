import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Construímos sonhos,</span>
              <br />
              edificamos o futuro
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              A NTC Brasil transforma ideias em realidade concreta, com
              excelência e inovação em cada projeto.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Fale Conosco
                <ArrowRight size={20} />
              </a>
              <a href="#services" className="btn-outline">
                Nossos Serviços
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-primary">15+</h3>
                  <p className="text-gray-600">Anos de Experiência</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-primary">200+</h3>
                  <p className="text-gray-600">Projetos Realizados</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-primary">100%</h3>
                  <p className="text-gray-600">Clientes Satisfeitos</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-primary">50+</h3>
                  <p className="text-gray-600">Profissionais</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 transform rotate-3 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
