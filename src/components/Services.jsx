import { motion } from 'framer-motion';
import { Building, Ruler, HardHat, Warehouse } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: 'Construção Civil',
      description:
        'Execução de obras residenciais, comerciais e industriais com excelência e qualidade.',
    },
    {
      icon: <Ruler className="w-12 h-12 text-primary" />,
      title: 'Projetos Arquitetônicos',
      description:
        'Desenvolvimento de projetos personalizados que atendem às necessidades específicas de cada cliente.',
    },
    {
      icon: <HardHat className="w-12 h-12 text-primary" />,
      title: 'Gerenciamento de Obras',
      description:
        'Gestão completa do seu projeto, desde o planejamento até a entrega final.',
    },
    {
      icon: <Warehouse className="w-12 h-12 text-primary" />,
      title: 'Reformas e Ampliações',
      description:
        'Transformação e modernização de espaços existentes com soluções inovadoras.',
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em construção civil, com foco na
            qualidade e satisfação dos nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-8">
            Quer saber mais sobre como podemos ajudar no seu projeto?
          </p>
          <a href="#contact" className="btn-primary">
            Entre em Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}
