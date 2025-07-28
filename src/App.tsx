import React, { useState } from "react";
import {
  Menu,
  X,
  Scale,
  Users,
  FileText,
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Award,
  Eye,
  User,
  Lock,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Heart,
  Briefcase,
  UserCheck,
  ArrowLeft,
  Gavel,
  Home,
  Building,
  Baby,
  Hammer,
  CreditCard,
  HandHeart,
  HelpCircle,
  LockIcon,
  DollarSign,
  ScaleIcon,
  PhoneCall,
  Gift,
  Users as UsersIcon,
  MessageSquare,
} from "lucide-react";

// Dados das modalidades (mantidos do código original, assumindo que existem)
const modalities = [
  // Exemplo de estrutura, substitua pelos dados reais do seu projeto
  {
    name: "Plano Básico",
    benefits: [
      "Consultas ilimitadas",
      "Orientação jurídica preventiva",
      "Revisão de contratos",
    ],
  },
  {
    name: "Plano Completo",
    benefits: [
      "Consultas ilimitadas",
      "Ações judiciais inclusas",
      "Suporte familiar",
    ],
  },
  // Adicione outras modalidades conforme necessário
];

const modalityDetails = {
  "Plano Básico": {
    price: "99,90",
    description: "Ideal para quem busca orientação jurídica no dia a dia.",
  },
  "Plano Completo": {
    price: "199,90",
    description: "Suporte completo, incluindo ações judiciais.",
  },
  // Adicione outros detalhes conforme necessário
};

// Array de FAQs atualizado com o conteúdo do anexo
const newFaqs = [
  {
    question: "Mas eu não estou com nenhum problema agora. Por que teria um plano jurídico?",
    answer: "Porque o plano jurídico atua preventivamente. Assim como você tem um plano de saúde mesmo quando está bem, o plano jurídico resolve questões antes que virem dores de cabeça — e te orienta em qualquer dúvida do dia a dia: contratos, dívidas, trabalho, condomínio, vizinho, bancos, etc.",
  },
  {
    question: "Esse plano cobre tudo? E se eu precisar entrar com um processo?",
    answer: "Depende do plano escolhido. No plano básico, você tem orientação completa e consultas ilimitadas. Nos planos mais completos, você tem direito a ações judiciais inclusas, com honorários contratuais pagos pelo plano (exceto taxas e custas).",
  },
  {
    question: "E se eu quiser cancelar depois?",
    answer: "Você pode cancelar quando quiser, sem fidelidade. Mas atenção: quanto mais tempo você fica, mais benefícios você acumula.",
  },
  {
    question: "Qual a diferença entre esse plano e contratar um advogado direto?",
    answer: "O plano jurídico te dá acesso contínuo e imediato a um consultor jurídico. Você não precisa pagar toda vez que tiver uma dúvida ou para revisar um documento — é tudo incluído. Além disso, sai muito mais barato do que contratar por demanda.",
  },
  {
    question: "Vocês resolvem problemas de que tipo?",
    answer: "De tudo que faz parte da sua vida: Dúvidas trabalhistas, Questões familiares (divórcio, guarda, pensão), Direito do consumidor, Cobrança indevida, Nome sujo injustamente, Dificuldade com banco, aluguel, vizinhos, contratos, Ações judiciais (conforme plano), Orientações, documentos, multas etc.",
  },
];

// Array de vantagens atualizado com títulos, descrições e ícones
const advantages = [
  {
    icon: <LockIcon className="text-gold" size={32} />,
    title: "Segurança jurídica todos os dias",
    description: "Você tem um advogado sempre pronto para tirar suas dúvidas e te orientar, sem pagar consulta toda vez.",
  },
  {
    icon: <DollarSign className="text-gold" size={32} />,
    title: "Economia real",
    description: "Em vez de arcar com honorários altos e imprevistos quando surgir um problema, você planeja seu orçamento com um valor fixo mensal e tem suporte jurídico sempre que precisar.",
  },
  {
    icon: <ScaleIcon className="text-gold" size={32} />,
    title: "Acesso à Justiça garantido",
    description: "Com o plano, você tem um time ao seu lado — orientando preventivamente no dia a dia e pronto para atuar formalmente quando necessário. Acesso à Justiça com segurança, estratégia e respaldo profissional.",
  },
  {
    icon: <PhoneCall className="text-gold" size={32} />,
    title: "Atendimento rápido, direto e sem enrolação",
    description: "Nada de espera ou burocracia. Você tem um canal exclusivo com atendimento jurídico de verdade, sempre.",
  },
  {
    icon: <Gift className="text-gold" size={32} />,
    title: "Benefícios acumulativos",
    description: "Quanto mais tempo no plano, mais vantagens.",
  },
  {
    icon: <UsersIcon className="text-gold" size={32} />,
    title: "Proteção para sua família também",
    description: "Planos com cobertura estendida permitem que seus familiares também tenham apoio jurídico direto, sem burocracia, sempre que precisarem.",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [openFaq, setOpenFaq] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank"); // Substitua pelo número real
  };

  // All-Modalities Page
  if (currentPage === "all-modalities") {
    return (
      <div className="min-h-screen bg-black text-white">
        <header className="bg-black border-b border-gold/20 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <img src="/kw-logo.png" alt="KW Advocacia" className="h-12 w-auto" />
              </div>
              <button
                onClick={() => navigateTo("home")}
                className="text-white hover:text-gold transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Voltar ao Início
              </button>
            </div>
          </div>
        </header>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gold">
                Nossas Modalidades de Assessoria Jurídica
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escolha a modalidade ideal para suas necessidades jurídicas
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modalities.map((modality, index) => {
                const modalityDetail =
                  modalityDetails[modality.name];
                return (
                  <div
                    key={index}
                    className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40"
                  >
                    <h3 className="text-2xl font-serif mb-4 text-gold">{modality.name}</h3>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gold mb-2">
                        R$ {modalityDetail?.price}
                      </div>
                      <div className="text-gray-400 text-sm">por mês</div>
                      <div className="text-xs text-gray-500 mt-2">
                        {modalityDetail?.description}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {modality.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="text-gold mr-2 flex-shrink-0" size={16} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={openWhatsApp}
                      className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      Quero Esta Modalidade
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black flex items-center justify-center">
                <MessageSquare className="mr-2" size={32} /> 💬 Perguntas que as pessoas costumam ter ao pensar em contratar um plano jurídico:
              </h2>
              <p className="text-xl text-gray-600">
                Entenda mais sobre como nossos planos podem ajudar você
              </p>
            </div>
            <div className="space-y-4">
              {newFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center">
                      <span className="font-semibold text-black">{faq.question}</span>
                    </div>
                    {openFaq === index ? (
                      <ChevronUp className="text-black" size={20} />
                    ) : (
                      <ChevronDown className="text-black" size={20} />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black flex items-center justify-center">
                <CheckCircle className="mr-2" size={32} /> VANTAGENS
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça os benefícios de contar com nosso suporte jurídico contínuo
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">{advantage.icon}</div>
                    <h3 className="text-lg font-semibold text-black">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button
                onClick={openWhatsApp}
                className="bg-gold text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 inline-flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Página inicial (exemplo, substitua pelo código real da sua página inicial)
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <img src="/kw-logo.png" alt="KW Advocacia" className="h-12 w-auto" />
            <button
              onClick={() => navigateTo("all-modalities")}
              className="text-white hover:text-gold"
            >
              Ver Modalidades
            </button>
          </div>
        </div>
      </header>
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gold">
            Bem-vindo à KW Advocacia
          </h1>
          <p className="text-xl text-gray-300">
            Soluções jurídicas para o seu dia a dia
          </p>
          <button
            onClick={() => navigateTo("all-modalities")}
            className="mt-8 bg-gold text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400"
          >
            Conheça Nossos Planos
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
