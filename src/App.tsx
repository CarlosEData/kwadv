import React, { useState } from 'react';
import { 
  MessageCircle, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Award,
  FileText,
  Heart,
  Briefcase,
  Scale,
  UserCheck,
  Menu,
  X,
  ArrowLeft,
  Gavel,
  Home,
  Building,
  Baby,
  Hammer,
  CreditCard,
  HandHeart
} from 'lucide-react';

const whatsappNumber = "5521998417061";
const whatsappMessage = "Olá! Gostaria de saber mais sobre os planos jurídicos da KW Advocacia Digital.";

const openWhatsApp = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, '_blank');
};

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const plans = [
    {
      name: "Essencial",
      price: "97",
      features: [
        "2 consultas por mês",
        "Atendimento via WhatsApp",
        "Orientação jurídica básica",
        "Análise de documentos simples"
      ],
      popular: false
    },
    {
      name: "Avançado",
      price: "159",
      features: [
        "4 consultas por mês",
        "Atendimento via WhatsApp",
        "Revisão de contratos",
        "Consultoria preventiva",
        "Suporte em negociações"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "249",
      features: [
        "Consultas ilimitadas",
        "Atendimento prioritário",
        "Revisão de contratos",
        "Suporte judicial incluído",
        "Consultoria empresarial",
        "Desconto em ações judiciais"
      ],
      popular: true
    },
    {
      name: "Família",
      price: "389",
      features: [
        "Cobertura para toda família",
        "Consultas ilimitadas",
        "Atendimento 24/7",
        "Todas as áreas do direito",
        "Suporte judicial completo",
        "Desconto máximo em ações"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente atendimento! Resolveram minha questão trabalhista rapidamente.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "João Santos",
      text: "Profissionais competentes e sempre disponíveis. Recomendo!",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ana Costa",
      text: "O plano família foi perfeito para nossa necessidade. Muito satisfeita!",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "O que está incluído no plano?",
      answer: "Cada plano inclui consultas jurídicas, atendimento via WhatsApp, revisão de documentos e suporte especializado conforme descrito em cada modalidade."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, você pode cancelar seu plano a qualquer momento sem multas ou taxas de cancelamento."
    },
    {
      question: "Como funciona o atendimento pelo WhatsApp?",
      answer: "Você terá acesso direto aos nossos advogados através do WhatsApp durante o horário comercial, com resposta em até 2 horas."
    },
    {
      question: "O plano cobre todo o Brasil?",
      answer: "Sim, nossos planos oferecem cobertura jurídica em todo território nacional."
    },
    {
      question: "Como funciona o desconto no plano anual?",
      answer: "Ao optar pelo pagamento anual, você ganha 1 mês grátis, economizando o equivalente a um mês de mensalidade."
    }
  ];

  const menuItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'about', label: 'Quem Somos', icon: Users },
    { id: 'areas', label: 'Áreas de Atuação', icon: Scale },
    { id: 'privacy', label: 'Política de Privacidade', icon: Shield },
    { id: 'opportunities', label: 'Oportunidades', icon: Award }
  ];

  // Navigation Header
  const NavigationHeader = () => (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <img 
            src="/image.png" 
            alt="KW Advocacia Digital" 
            className="h-8 cursor-pointer"
            onClick={() => navigateTo('home')}
          />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.id 
                      ? 'text-yellow-500 bg-yellow-500/10' 
                      : 'text-gray-300 hover:text-yellow-500'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button 
              onClick={openWhatsApp}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-yellow-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-yellow-500/20">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 text-left transition-all duration-300 ${
                    currentPage === item.id 
                      ? 'text-yellow-500 bg-yellow-500/10' 
                      : 'text-gray-300 hover:text-yellow-500'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button 
              onClick={openWhatsApp}
              className="w-full mt-4 bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
              Contato via WhatsApp
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  // Back to Home Button
  const BackButton = () => (
    <button
      onClick={() => navigateTo('home')}
      className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors mb-8"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Voltar ao Início</span>
    </button>
  );

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-black text-white pt-20">
        <NavigationHeader />
        <div className="container mx-auto px-6 py-12">
          <BackButton />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 font-serif text-center">
              Quem <span className="text-yellow-500">Somos</span>
            </h1>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
                Experiência que humaniza, inovação que transforma
              </h2>
            </div>
            
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
              <p>
                Com quase duas décadas de atuação, a KW Advocacia Digital combina a solidez de uma trajetória consolidada com métodos inovadores de gestão processual. Somos um escritório moderno, estruturado para entregar soluções ágeis e eficientes, apoiado por ferramentas digitais que garantem transparência e controle em cada etapa — sem abrir mão do toque humano e do atendimento individualizado.
              </p>
              
              <p>
                Nosso compromisso é proporcionar a pessoas físicas e jurídicas um acompanhamento jurídico confiável, sempre atualizado e alinhado às suas necessidades reais. Atuamos de forma independente, com orientação preventiva e estratégica, prezando pela eficiência e pelo respeito irrestrito às normas da advocacia.
              </p>
            </div>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-yellow-500/20">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">20 Anos</h3>
                <p className="text-gray-400">de experiência consolidada</p>
              </div>
              
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-yellow-500/20">
                <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Inovação</h3>
                <p className="text-gray-400">tecnológica e humanizada</p>
              </div>
              
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-yellow-500/20">
                <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Atendimento</h3>
                <p className="text-gray-400">individualizado e ético</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={openWhatsApp}
                className="bg-yellow-500 text-black px-12 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                Quero Meu Plano Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'areas') {
    const areas = [
      {
        title: "Direito Cível",
        icon: Scale,
        description: "Elaboração, revisão e rescisão de contratos; Ações de cobrança, execução e responsabilidade civil; Reparação de danos morais e materiais; Questões relativas à posse, propriedade e relações obrigacionais."
      },
      {
        title: "Direito do Consumidor",
        icon: Shield,
        description: "Indenizações por práticas abusivas ou falhas na prestação de serviços; Defesa em ações movidas por consumidores; Demandas contra instituições financeiras, operadoras de saúde, empresas de telecomunicação e varejo."
      },
      {
        title: "Direito de Família e Sucessões",
        icon: Heart,
        description: "Divórcios consensuais e litigiosos; Pensão alimentícia, guarda e regulamentação de visitas; Inventário judicial e extrajudicial; Reconhecimento e dissolução de união estável; Planejamento sucessório."
      },
      {
        title: "Direito Trabalhista",
        icon: Briefcase,
        description: "Verbas rescisórias não pagas; Reconhecimento de vínculo empregatício; Horas extras e jornada de trabalho; Assédio moral ou sexual; Estabilidade provisória e reintegração."
      },
      {
        title: "Direito Previdenciário",
        icon: UserCheck,
        description: "Aposentadoria por idade, tempo de contribuição ou invalidez; Auxílio-doença, BPC/LOAS e pensão por morte; Revisões e correções de benefícios; Planejamento previdenciário."
      },
      {
        title: "Contratos e Negociações",
        icon: FileText,
        description: "Assessoria na elaboração, revisão e gestão contratual; Consultoria preventiva para redução de riscos; Negociação e formalização de acordos extrajudiciais. Soluções Extrajudiciais Mediação, conciliação e negociação direta; Notificações e acordos extrajudiciais; Estratégias jurídicas voltadas à prevenção e à celeridade na resolução de conflitos."
      }
    ];

    return (
      <div className="min-h-screen bg-black text-white pt-20">
        <NavigationHeader />
        <div className="container mx-auto px-6 py-12">
          <BackButton />
          
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-16 font-serif text-center">
              Áreas de <span className="text-yellow-500">Atuação</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {areas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <IconComponent className="w-8 h-8 text-yellow-500 mr-4" />
                      <h3 className="text-2xl font-semibold">{area.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{area.description}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-16">
              <button 
                onClick={openWhatsApp}
                className="bg-yellow-500 text-black px-12 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                Quero Meu Plano Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-black text-white pt-20">
        <NavigationHeader />
        <div className="container mx-auto px-6 py-12">
          <BackButton />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-16 font-serif text-center">
              Política de <span className="text-yellow-500">Privacidade</span>
            </h1>
            
            <div className="space-y-8 text-gray-300">
              <div className="bg-gray-900/50 p-8 rounded-lg border border-yellow-500/20">
                <p className="text-lg leading-relaxed">
                  A KW Advocacia adota medidas rigorosas para garantir a confidencialidade, integridade e segurança das informações fornecidas por seus clientes, parceiros e visitantes. Esta Política de Privacidade tem como objetivo esclarecer como os dados pessoais são coletados, utilizados, armazenados e protegidos, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD).
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-500">1. Coleta de dados pessoais</h3>
                  <p className="leading-relaxed">
                    Coletamos apenas os dados estritamente necessários para a prestação dos nossos serviços jurídicos e institucionais. As informações são fornecidas de forma voluntária pelo titular, seja por meio do site, e-mail, WhatsApp, formulários ou presencialmente.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-500">2. Finalidade do tratamento</h3>
                  <p className="mb-4">Os dados são tratados exclusivamente para os seguintes propósitos:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Atendimento jurídico individualizado</li>
                    <li>Elaboração de documentos e contratos</li>
                    <li>Cumprimento de obrigações legais ou regulatórias</li>
                    <li>Comunicação com o titular dos dados</li>
                    <li>Gestão da relação contratual</li>
                    <li>Envio de informações institucionais e atualizações relevantes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-500">3. Compartilhamento de dados</h3>
                  <p className="mb-4">A KW Advocacia não compartilha, vende ou cede dados pessoais a terceiros, salvo nas seguintes hipóteses:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Com consentimento expresso do titular</li>
                    <li>Para cumprimento de obrigação legal, regulatória ou judicial</li>
                    <li>Quando necessário para a execução de serviços contratados com parceiros previamente autorizados e sob confidencialidade</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-500">4. Armazenamento e segurança</h3>
                  <p className="leading-relaxed">
                    Os dados são armazenados em ambientes seguros, físicos e/ou digitais, com acesso restrito a pessoas autorizadas e protegidos por medidas técnicas de segurança da informação. Monitoramos continuamente nossos processos para prevenir acessos não autorizados, vazamentos ou alterações indevidas.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-500">5. Direitos do titular</h3>
                  <p className="mb-4">Nos termos da LGPD, o titular dos dados poderá, a qualquer momento:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Confirmar a existência do tratamento</li>
                    <li>Acessar, corrigir ou atualizar seus dados</li>
                    <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
                    <li>Revogar o consentimento concedido</li>
                    <li>Solicitar a portabilidade dos dados</li>
                    <li>Opor-se ao tratamento em desacordo com a legislação</li>
                  </ul>
                  <p className="mt-4">
                    As solicitações podem ser feitas diretamente ao nosso canal de atendimento: <span className="text-yellow-500">privacidade@kwadvocacia.com.br</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-500">6. Retenção de dados</h3>
                  <p className="leading-relaxed">
                    Os dados serão mantidos somente pelo tempo necessário para atingir as finalidades descritas nesta política ou conforme exigido por obrigação legal, regulatória ou contratual.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-500">7. Atualizações desta política</h3>
                  <p className="leading-relaxed">
                    A KW Advocacia reserva-se o direito de alterar esta Política de Privacidade a qualquer tempo. Recomendamos a consulta periódica. A versão vigente estará sempre disponível em nosso site.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <button 
                onClick={openWhatsApp}
                className="bg-yellow-500 text-black px-12 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                Quero Meu Plano Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'opportunities') {
    return (
      <div className="min-h-screen bg-black text-white pt-20">
        <NavigationHeader />
        <div className="container mx-auto px-6 py-12">
          <BackButton />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-16 font-serif text-center">
              <span className="text-yellow-500">Oportunidades</span>
            </h1>
            
            <div className="space-y-12">
              <div className="bg-gray-900/50 p-8 rounded-lg border border-yellow-500/20">
                <h2 className="text-3xl font-semibold mb-6 text-yellow-500">Junte-se à Nossa Equipe</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Acreditamos em uma advocacia colaborativa, moderna e ética. Por isso, estamos sempre abertos a profissionais que compartilhem dos nossos valores e desejem contribuir com uma atuação jurídica sólida e humanizada.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Se você é advogado(a), estudante ou parceiro institucional interessado em integrar nosso ecossistema jurídico, entre em contato pelo e-mail <span className="text-yellow-500">contato@kwadvocacia.com.br</span>.
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-8 rounded-lg border border-yellow-500/20">
                <h2 className="text-3xl font-semibold mb-6 text-yellow-500">Modalidades de Acompanhamento Jurídico</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Disponibilizamos modalidades de acompanhamento jurídico por adesão, criadas para promover acesso facilitado e contínuo à orientação jurídica qualificada.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Os valores mensais correspondem a um benefício jurídico exclusivo, voltado à consultoria preventiva, acompanhamento e suporte técnico. A eventual propositura de ação judicial será tratada por meio de contrato específico, com honorários ajustados conforme a complexidade do caso, podendo ser aplicados descontos de acordo com a modalidade aderida.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/50 p-6 rounded-lg border border-yellow-500/20">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-500">Essencial</h3>
                    <p className="text-gray-300">Acesso à orientação jurídica mensal, com revisão de documentos e acompanhamento básico.</p>
                  </div>
                  
                  <div className="bg-black/50 p-6 rounded-lg border border-yellow-500/20">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-500">Avançado</h3>
                    <p className="text-gray-300">Inclui suporte ampliado, elaboração de peças extrajudiciais e acompanhamento mais próximo.</p>
                  </div>
                  
                  <div className="bg-black/50 p-6 rounded-lg border border-yellow-500/20">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-500">Premium</h3>
                    <p className="text-gray-300">Acompanhamento prioritário, revisões contratuais ilimitadas e agilidade em demandas urgentes.</p>
                  </div>
                  
                  <div className="bg-black/50 p-6 rounded-lg border border-yellow-500/20">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-500">Familiar</h3>
                    <p className="text-gray-300">Cobertura estendida a membros da mesma família, com condições especiais e atendimento multipessoal.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <button 
                onClick={openWhatsApp}
                className="bg-yellow-500 text-black px-12 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                Quero Meu Plano Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Home Page (original landing page)
  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black pt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523D4AF37%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <img 
              src="/image.png" 
              alt="KW Advocacia Digital" 
              className="h-24 mx-auto mb-8 opacity-90"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif text-white leading-tight">
            Sua Tranquilidade<br />
            <span className="text-yellow-500">Jurídica</span> Começa Aqui
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Planos jurídicos por adesão com 20 anos de experiência. 
            Proteja seus direitos com segurança e praticidade.
          </p>
          
          <button 
            onClick={openWhatsApp}
            className="bg-yellow-500 text-black px-12 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl mb-16"
          >
            Quero Meu Plano Agora
          </button>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-yellow-500/20">
              <MessageCircle className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Consultas Ilimitadas</h3>
              <p className="text-gray-400 text-center">Acesso direto aos advogados</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-yellow-500/20">
              <Shield className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">A partir de R$ 97/mês</h3>
              <p className="text-gray-400 text-center">Planos acessíveis para todos</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-yellow-500/20">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">20 Anos de Experiência</h3>
              <p className="text-gray-400 text-center">Tradição e inovação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Equipe KW Advocacia" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6 font-serif text-white">
                20 Anos de Experiência.<br />
                <span className="text-yellow-500">Inovação, Ética e Resultados.</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A KW Advocacia Digital combina duas décadas de experiência jurídica com 
                tecnologia de ponta para oferecer soluções jurídicas acessíveis e eficientes. 
                Nossa missão é democratizar o acesso à justiça através de planos por adesão.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-black/50 rounded-lg border border-yellow-500/20">
                  <Shield className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold">OAB Regularizada</p>
                </div>
                
                <div className="text-center p-4 bg-black/50 rounded-lg border border-yellow-500/20">
                  <UserCheck className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold">LGPD Compliance</p>
                </div>
                
                <div className="text-center p-4 bg-black/50 rounded-lg border border-yellow-500/20">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Avaliações Positivas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">
            Como Funciona a <span className="text-yellow-500">Adesão</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Escolha seu plano</h3>
              <p className="text-gray-400">Selecione o plano ideal para suas necessidades</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Envie seus dados</h3>
              <p className="text-gray-400">Compartilhe suas informações via WhatsApp</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ativação em até 24h</h3>
              <p className="text-gray-400">Seu plano é ativado rapidamente</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Atendimento com advogado</h3>
              <p className="text-gray-400">Acesso direto aos nossos especialistas</p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={openWhatsApp}
              className="border-2 border-yellow-500 text-yellow-500 px-10 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Quero Meu Plano Agora
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">
            Benefícios do Atendimento Jurídico por <span className="text-yellow-500">Adesão</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Scale className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Consultoria Preventiva</h3>
              <p className="text-gray-400">Evite problemas jurídicos com orientação especializada antes que eles aconteçam.</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <MessageCircle className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Atendimento via WhatsApp</h3>
              <p className="text-gray-400">Acesso direto e rápido aos advogados através do WhatsApp.</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <FileText className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Revisão de Contratos</h3>
              <p className="text-gray-400">Análise detalhada de contratos e documentos importantes.</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Briefcase className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Suporte Judicial Incluído</h3>
              <p className="text-gray-400">Representação jurídica em processos conforme seu plano.</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Descontos em Ações Judiciais</h3>
              <p className="text-gray-400">Valores especiais para ações que não estão cobertas pelo plano.</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Heart className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Cobertura Familiar</h3>
              <p className="text-gray-400">Proteção jurídica para toda sua família em um só plano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Table */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 font-serif">
            Escolha Seu <span className="text-yellow-500">Plano</span>
          </h2>
          
          <p className="text-center text-gray-400 mb-12 text-lg">
            Ganhe 1 mês grátis no plano anual • Inventário: 7% do monte total
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-gray-900 rounded-lg p-8 border-2 ${
                  plan.popular 
                    ? 'border-yellow-500 transform scale-105' 
                    : 'border-gray-700'
                } hover:border-yellow-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-yellow-500 mb-1">
                    R$ {plan.price}
                  </div>
                  <p className="text-gray-400">/mês</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={openWhatsApp}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-yellow-500/30'
                  }`}
                >
                  Quero Meu Plano Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">
            O que nossos <span className="text-yellow-500">clientes</span> dizem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/50 p-8 rounded-lg border border-yellow-500/20">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-yellow-500 mr-4 grayscale"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">
            Perguntas <span className="text-yellow-500">Frequentes</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 flex justify-between items-center"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-500" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="p-6 bg-gray-800 rounded-b-lg border-l border-r border-b border-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 font-serif">
            Sua segurança jurídica <span className="text-yellow-500">não pode esperar</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Adira agora e ganhe 1 mês grátis no plano anual. 
            Proteja seus direitos com quem entende do assunto.
          </p>
          
          <button 
            onClick={openWhatsApp}
            className="bg-yellow-500 text-black px-16 py-6 rounded-lg text-2xl font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Quero Meu Plano Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img 
                src="/image.png" 
                alt="KW Advocacia Digital" 
                className="h-16 mb-6 opacity-80"
              />
              <p className="text-gray-400 mb-6 max-w-md">
                20 anos de experiência em soluções jurídicas inovadoras. 
                Democratizando o acesso à justiça através da tecnologia.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-400">(21) 99841-7061</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-400">contato@kwadvocacia.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-400">Rio de Janeiro, RJ</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => navigateTo('privacy')}
                  className="block text-gray-400 hover:text-yellow-500 transition-colors text-left"
                >
                  Política de Privacidade
                </button>
                <a href="#" className="block text-gray-400 hover:text-yellow-500 transition-colors">
                  Termos de Uso
                </a>
                <button 
                  onClick={() => navigateTo('areas')}
                  className="block text-gray-400 hover:text-yellow-500 transition-colors text-left"
                >
                  Áreas de Atuação
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © 2024 KW Advocacia Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;