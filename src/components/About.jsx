import { motion } from 'framer-motion';
import { Building2, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: 'Expertise em Construção',
      description:
        'Anos de experiência no mercado da construção civil, entregando projetos de alta qualidade.',
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Foco no Cliente',
      description:
        'Comprometimento total com a satisfação do cliente e atenção aos detalhes em cada projeto.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Qualidade Garantida',
      description:
        'Utilizamos os melhores materiais e técnicas para garantir resultados duradouros.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que escolher a <span className="gradient-text">NTC Brasil</span>
            ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somos uma empresa comprometida com a excelência na construção civil,
            oferecendo soluções inovadoras e sustentáveis para nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Saiba Mais
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
