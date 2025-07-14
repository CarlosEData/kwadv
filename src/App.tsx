import React, { useState } from 'react';
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
  HandHeart
} from 'lucide-react';

const whatsappNumber = "5521998417061";
const whatsappMessage = "Olá! Gostaria de saber mais sobre os planos jurídicos da KW Advocacia Digital.";

const openWhatsApp = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, '_blank');
};

// Base simulada de CPFs válidos para teste
const validCPFs = [
  '12345678901',
  '98765432100',
  '11111111111',
  '22222222222'
];

// Dados dos planos com preços (ocultos da interface principal)
const planDetails = {
  'Essencial': { price: '97', description: 'Plano básico com 2 consultas mensais' },
  'Avançado': { price: '159', description: 'Plano intermediário com 4 consultas mensais' },
  'Premium': { price: '249', description: 'Plano completo com consultas ilimitadas' },
  'Familiar': { price: '389', description: 'Cobertura completa para toda família' }
};

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCPFModal, setShowCPFModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [cpfInput, setCpfInput] = useState('');
  const [showPlanDetails, setShowPlanDetails] = useState(false);
  const [cpfError, setCpfError] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ emailOrCpf: '', password: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cpfForPlans, setCpfForPlans] = useState('');
  const [cpfPlansError, setCpfPlansError] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleVerifyValue = (planName: string) => {
    setSelectedPlan(planName);
    setShowCPFModal(true);
    setCpfInput('');
    setCpfError('');
    setShowPlanDetails(false);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login enviado:', loginData);
    // Simular login bem-sucedido
    setShowLoginModal(false);
    setLoginData({ emailOrCpf: '', password: '' });
  };

  const handleLoginInputChange = (field: string, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleCPFForPlansSubmit = () => {
    const cleanCPF = cpfForPlans.replace(/\D/g, '');
    
    if (cleanCPF.length !== 11) {
      setCpfPlansError('CPF deve conter 11 dígitos');
      return;
    }

    if (validCPFs.includes(cleanCPF)) {
      setCurrentPage('all-plans');
      setCpfPlansError('');
      setCpfForPlans('');
    } else {
      // CPF não encontrado - redirecionar para home com mensagem discreta
      setTimeout(() => {
        setCurrentPage('home');
        setCpfForPlans('');
        setCpfPlansError('');
        // Aqui você pode adicionar uma notificação discreta se desejar
      }, 1500);
      setCpfPlansError('CPF não encontrado');
    }
  };

  const handleCPFSubmit = () => {
    const cleanCPF = cpfInput.replace(/\D/g, '');
    
    if (cleanCPF.length !== 11) {
      setCpfError('CPF deve conter 11 dígitos');
      return;
    }

    if (validCPFs.includes(cleanCPF)) {
      setShowPlanDetails(true);
      setCpfError('');
    } else {
      setCpfError('CPF não localizado em nossa base');
      setTimeout(() => {
        setShowCPFModal(false);
        setCpfError('');
        setCpfInput('');
      }, 2000);
    }
  };

  const closeCPFModal = () => {
    setShowCPFModal(false);
    setShowPlanDetails(false);
    setCpfInput('');
    setCpfError('');
    setSelectedPlan('');
  };

  const plans = [
    {
      name: 'Essencial',
      benefits: [
        '2 consultas mensais',
        'Atendimento por WhatsApp',
        '1 contrato analisado',
        'Suporte básico'
      ]
    },
    {
      name: 'Avançado',
      benefits: [
        '4 consultas mensais',
        'Atendimento prioritário',
        '3 contratos analisados',
        'Consultoria especializada'
      ]
    },
    {
      name: 'Premium',
      benefits: [
        'Consultas ilimitadas',
        'Atendimento VIP',
        'Contratos ilimitados',
        'Assessoria completa'
      ]
    },
    {
      name: 'Familiar',
      benefits: [
        'Cobertura familiar completa',
        'Atendimento 24/7',
        'Todos os serviços inclusos',
        'Suporte especializado'
      ]
    }
  ];

  const faqs = [
    {
      question: "Como funciona a assinatura dos planos?",
      answer: "Nossos planos são mensais e podem ser cancelados a qualquer momento. Você tem acesso imediato aos serviços após a contratação."
    },
    {
      question: "Posso alterar meu plano depois?",
      answer: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento através da área do cliente."
    },
    {
      question: "Os atendimentos são presenciais?",
      answer: "Oferecemos atendimento digital via WhatsApp, videochamada e e-mail. Atendimentos presenciais podem ser agendados quando necessário."
    },
    {
      question: "Qual a diferença entre os planos?",
      answer: "A principal diferença está no número de consultas mensais, prioridade no atendimento e serviços inclusos. Consulte nossa tabela comparativa."
    }
  ];

  // Renderização condicional baseada na página atual
  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="bg-black border-b border-gold/20 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <img 
                  src="/kw_transparent.png" 
                  alt="KW Advocacia" 
                  className="h-12 w-auto"
                />
              </div>
              
              <button
                onClick={() => navigateTo('home')}
                className="text-white hover:text-gold transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Voltar
              </button>
            </div>
          </div>
        </header>

        {/* Login/CPF Verification Page */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gold/20 shadow-2xl">
              <div className="text-center mb-8">
                <img 
                  src="/kw_transparent.png" 
                  alt="KW Advocacia" 
                  className="h-16 w-auto mx-auto mb-6"
                />
                <h1 className="text-3xl font-serif mb-4 text-gold">Login</h1>
                <p className="text-gray-300">
                  Digite seu CPF para acessar os planos
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    CPF
                  </label>
                  <input
                    type="text"
                    value={cpfForPlans}
                    onChange={(e) => setCpfForPlans(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                    placeholder="000.000.000-00"
                    maxLength={11}
                  />
                  {cpfPlansError && (
                    <p className="text-red-400 text-sm mt-2">{cpfPlansError}</p>
                  )}
                </div>

                <button
                  onClick={handleCPFForPlansSubmit}
                  className="w-full bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Acessar Planos
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (currentPage === 'all-plans') {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="bg-black border-b border-gold/20 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <img 
                  src="/kw_transparent.png" 
                  alt="KW Advocacia" 
                  className="h-12 w-auto"
                />
              </div>
              
              <button
                onClick={() => navigateTo('home')}
                className="text-white hover:text-gold transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Voltar ao Início
              </button>
            </div>
          </div>
        </header>

        {/* All Plans Page */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gold">Nossos Planos</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escolha o plano ideal para suas necessidades jurídicas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => {
                const planDetail = planDetails[plan.name as keyof typeof planDetails];
                return (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
                    <h3 className="text-2xl font-serif mb-4 text-gold">{plan.name}</h3>
                    
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gold mb-2">
                        R$ {planDetail?.price}
                      </div>
                      <div className="text-gray-400 text-sm">por mês</div>
                      <div className="text-xs text-gray-500 mt-2">
                        {planDetail?.description}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="text-gold mr-2 flex-shrink-0" size={16} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={openWhatsApp}
                      className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      Quero Este Plano
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Página principal (home)
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gold/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/image.png" 
                alt="KW Advocacia" 
                className="h-12 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-white hover:text-gold transition-colors">Início</a>
              <a href="#sobre" className="text-white hover:text-gold transition-colors">Sobre</a>
              <a href="#areas" className="text-white hover:text-gold transition-colors">Áreas</a>
              <a href="#planos" className="text-white hover:text-gold transition-colors">Planos</a>
              <a href="#contato" className="text-white hover:text-gold transition-colors">Contato</a>
              <button 
                onClick={() => setShowLoginModal(true)}
                className="text-white hover:text-gold transition-colors flex items-center gap-2"
              >
                <User size={18} />
                Área do Cliente
              </button>
            </nav>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <nav className="px-2 pt-2 pb-3 space-y-1 border-t border-gold/20">
                <a href="#inicio" className="block py-2 text-white hover:text-gold transition-colors">Início</a>
                <a href="#sobre" className="block py-2 text-white hover:text-gold transition-colors">Sobre</a>
                <a href="#areas" className="block py-2 text-white hover:text-gold transition-colors">Áreas</a>
                <a href="#planos" className="block py-2 text-white hover:text-gold transition-colors">Planos</a>
                <a href="#contato" className="block py-2 text-white hover:text-gold transition-colors">Contato</a>
                <button 
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="block py-2 text-white hover:text-gold transition-colors text-left flex items-center gap-2"
                >
                  <User size={18} />
                  Área do Cliente
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/image.png" 
              alt="KW Advocacia" 
              className="h-24 w-auto mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-gold">
            Advocacia Digital de Excelência
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Soluções jurídicas modernas e acessíveis para você e sua família
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-gold text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Fale Conosco Agora
          </button>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">Quem Somos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A KW Advocacia Digital é um escritório moderno que combina tradição jurídica com inovação tecnológica
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Experiência</h3>
              <p className="text-gray-300">Mais de 10 anos de experiência em diversas áreas do direito</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Atendimento</h3>
              <p className="text-gray-300">Atendimento personalizado e humanizado para cada cliente</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Excelência</h3>
              <p className="text-gray-300">Compromisso com a qualidade e resultados efetivos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">Áreas de Atuação</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos serviços especializados em diversas áreas do direito
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <Gavel className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Civil</h3>
              <p className="text-gray-300">Contratos, responsabilidade civil, direitos reais e obrigações</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <Home className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Imobiliário</h3>
              <p className="text-gray-300">Compra, venda, locação e regularização de imóveis</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <Building className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Empresarial</h3>
              <p className="text-gray-300">Constituição de empresas, contratos comerciais e consultoria</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <Baby className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito de Família</h3>
              <p className="text-gray-300">Divórcio, guarda, pensão alimentícia e inventário</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <Hammer className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Trabalhista</h3>
              <p className="text-gray-300">Rescisões, verbas trabalhistas e consultoria empresarial</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <CreditCard className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito do Consumidor</h3>
              <p className="text-gray-300">Defesa dos direitos do consumidor e relações de consumo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">Modalidade de Acompanhamento Jurídico</h2>
            <div className="mt-8">
              <button 
                onClick={() => navigateTo('login')}
                className="bg-gold text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
              >
                <User size={20} />
                Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-300">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-gold/20">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-gold" size={20} />
                  ) : (
                    <ChevronDown className="text-gold" size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">Entre em Contato</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos prontos para ajudar você com suas questões jurídicas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Telefone</h3>
              <p className="text-gray-300">(21) 99841-7061</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">E-mail</h3>
              <p className="text-gray-300">contato@kwadvocacia.com.br</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Horário</h3>
              <p className="text-gray-300">Seg-Sex: 9h às 18h</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={openWhatsApp}
              className="bg-gold text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img 
                src="/image.png" 
                alt="KW Advocacia" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4">
                Advocacia digital moderna e acessível para você e sua família.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gold/10 rounded-full w-10 h-10 flex items-center justify-center">
                  <Heart className="text-gold" size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Direito Civil</li>
                <li>Direito de Família</li>
                <li>Direito Empresarial</li>
                <li>Consultoria Jurídica</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(21) 99841-7061</li>
                <li>contato@kwadvocacia.com.br</li>
                <li>Seg-Sex: 9h às 18h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gold/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KW Advocacia Digital. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal de Login */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md border border-gold/20 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-white">Área do Cliente</h2>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex justify-center mb-6">
              <img 
                src="/image.png" 
                alt="KW Advocacia" 
                className="h-16 w-auto"
              />
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail ou CPF
                </label>
                <input
                  type="text"
                  value={loginData.emailOrCpf}
                  onChange={(e) => handleLoginInputChange('emailOrCpf', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Digite seu e-mail ou CPF"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => handleLoginInputChange('password', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Digite sua senha"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
              >
                <Lock size={18} />
                Entrar
              </button>
            </form>

            <div className="mt-6 space-y-3 text-center">
              <button className="text-gold hover:text-yellow-400 transition-colors text-sm">
                Esqueci minha senha
              </button>
              <div className="text-gray-400 text-sm">
                Ainda não tem cadastro?{' '}
                <span className="text-gold cursor-pointer hover:text-yellow-400 transition-colors">
                  Entre em contato
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Verificação CPF */}
      {showCPFModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md border border-gold/20 shadow-2xl">
            {!showPlanDetails ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif text-white">Verificação de Cliente</h2>
                  <button
                    onClick={closeCPFModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex justify-center mb-6">
                  <img 
                    src="/image.png" 
                    alt="KW Advocacia" 
                    className="h-16 w-auto"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Digite seu CPF para visualizar os valores
                    </label>
                    <input
                      type="text"
                      value={cpfInput}
                      onChange={(e) => setCpfInput(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                      placeholder="000.000.000-00"
                      maxLength={11}
                    />
                    {cpfError && (
                      <p className="text-red-400 text-sm mt-2">{cpfError}</p>
                    )}
                  </div>

                  <button
                    onClick={handleCPFSubmit}
                    className="w-full bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Consultar
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif text-white">Plano {selectedPlan}</h2>
                  <button
                    onClick={closeCPFModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gold mb-2">
                    R$ {planDetails[selectedPlan as keyof typeof planDetails]?.price}
                  </div>
                  <div className="text-gray-400">por mês</div>
                  <div className="text-sm text-gray-500 mt-2">
                    {planDetails[selectedPlan as keyof typeof planDetails]?.description}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plans.find(p => p.name === selectedPlan)?.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-gold mr-2 flex-shrink-0" size={16} />
                      {benefit}
                    </div>
                  ))}
                </div>

                <button
                  onClick={openWhatsApp}
                  className="w-full bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Quero Este Plano
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;