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
const whatsappMessage = "Olá, gostaria de obter mais informações sobre os serviços jurídicos da KW Advocacia.";

// Credenciais válidas para acesso às modalidades
const validCredentials = {
  "05232003747": "123456",
  "22299375880": "123456"
};

const openWhatsApp = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, '_blank');
};

// Dados das modalidades com preços (ocultos da interface principal)
const modalityDetails = {
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
  const [selectedModality, setSelectedModality] = useState<string>('');
  const [cpfInput, setCpfInput] = useState('');
  const [showModalityDetails, setShowModalityDetails] = useState(false);
  const [cpfError, setCpfError] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ emailOrCpf: '', password: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cpfForModalities, setCpfForModalities] = useState('');
  const [cpfModalitiesError, setCpfModalitiesError] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerData, setRegisterData] = useState({ name: '', email: '', cpf: '' });
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [cpfModalPassword, setCpfModalPassword] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleVerifyValue = (planName: string) => {
    setSelectedModality(planName);
    setShowCPFModal(true);
    setCpfInput('');
    setCpfModalPassword('');
    setCpfError('');
    setShowModalityDetails(false);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    
    // Simular delay de verificação
    setTimeout(() => {
      const cpf = loginData.emailOrCpf.replace(/\D/g, ''); // Remove formatação
      const password = loginData.password;
      
      // Verificar se as credenciais são válidas
      if (validCredentials[cpf] && validCredentials[cpf] === password) {
        // Login bem-sucedido - redirecionar para modalidades
        setShowLoginModal(false);
        setCurrentPage('all-modalities');
        setLoginData({ emailOrCpf: '', password: '' });
        setLoginError('');
      } else {
        // Credenciais inválidas - mostrar erro e redirecionar para home
        setLoginError('Dados inválidos. Apenas clientes cadastrados podem acessar esta área.');
        setTimeout(() => {
          setShowLoginModal(false);
          setCurrentPage('home');
          setLoginData({ emailOrCpf: '', password: '' });
          setLoginError('');
        }, 2500);
      }
      setIsLoggingIn(false);
    }, 1000);
  };

  const handleLoginInputChange = (field: string, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cadastro enviado:', registerData);
    // Simular cadastro bem-sucedido
    setShowRegisterModal(false);
    setRegisterData({ name: '', email: '', cpf: '' });
    // Aqui você pode adicionar uma notificação de sucesso
  };

  const handleRegisterInputChange = (field: string, value: string) => {
    setRegisterData(prev => ({ ...prev, [field]: value }));
  };

  const handleCPFForModalitiesSubmit = () => {
    const cleanCPF = cpfForModalities.replace(/\D/g, '');
    const password = cpfModalPassword;
    
    // Verificar se o CPF e senha são válidos
    if (validCredentials[cleanCPF] && validCredentials[cleanCPF] === password) {
      setCurrentPage('all-modalities');
      setCpfModalitiesError('');
      setCpfForModalities('');
      setCpfModalPassword('');
    } else {
      setCpfModalitiesError('Dados inválidos. Apenas clientes cadastrados podem acessar esta área.');
      setTimeout(() => {
        setCurrentPage('home');
        setCpfForModalities('');
        setCpfModalPassword('');
        setCpfModalitiesError('');
      }, 1500);
    }
  };

  const handleCPFSubmit = () => {
    const cleanCPF = cpfInput.replace(/\D/g, '');
    const password = cpfModalPassword;
    
    if (cleanCPF.length !== 11) {
      setCpfError('CPF deve conter 11 dígitos');
      return;
    }

    // Verificar se o CPF e senha são válidos
    if (validCredentials[cleanCPF] && validCredentials[cleanCPF] === password) {
      setShowModalityDetails(true);
      setCpfError('');
    } else {
      setCpfError('Dados inválidos. Apenas clientes cadastrados podem acessar esta área.');
      setTimeout(() => {
        setShowCPFModal(false);
        setCpfError('');
        setCpfInput('');
        setCpfModalPassword('');
      }, 2000);
    }
  };

  const closeCPFModal = () => {
    setShowCPFModal(false);
    setShowModalityDetails(false);
    setCpfInput('');
    setCpfModalPassword('');
    setCpfError('');
    setSelectedModality('');
  };

  const modalities = [
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
      question: "Como funciona o atendimento jurídico?",
      answer: "Oferecemos atendimento personalizado através de consultas presenciais, por telefone, WhatsApp e videochamada, sempre com foco na resolução eficiente das suas questões jurídicas."
    },
    {
      question: "Quais documentos preciso levar para a consulta?",
      answer: "Os documentos necessários variam conforme o tipo de questão jurídica. Nossa equipe orientará você sobre a documentação específica durante o agendamento da consulta."
    },
    {
      question: "Os atendimentos são presenciais?",
      answer: "Sim, oferecemos atendimentos presenciais em nosso escritório, além de consultas digitais via WhatsApp, videochamada e e-mail para maior comodidade dos clientes."
    },
    {
      question: "Como agendar uma consulta?",
      answer: "Você pode agendar sua consulta através do nosso WhatsApp, telefone ou e-mail. Nossa equipe está disponível para orientá-lo sobre horários e modalidades de atendimento."
    },
    {
      question: "Qual o prazo para resolução dos casos?",
      answer: "O prazo varia conforme a complexidade e natureza de cada caso. Durante a consulta inicial, fornecemos uma estimativa realista baseada na nossa experiência e análise específica da situação."
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
                  src="/Inserir um subtítulo (5).png" 
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
                  src="/kw-logo.png" 
                  alt="KW Advocacia" 
                  className="h-16 w-auto"
                />
                <h1 className="text-3xl font-serif mb-4 text-gold">Login</h1>
                <p className="text-gray-300">
                  Digite seu CPF para acessar as modalidades
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    CPF
                  </label>
                  <input
                    type="text"
                    value={cpfForModalities}
                    onChange={(e) => setCpfForModalities(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                    placeholder="000.000.000-00"
                    maxLength={11}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    value={cpfModalPassword}
                    onChange={(e) => setCpfModalPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Digite sua senha"
                  />
                  {cpfModalitiesError && (
                    <p className="text-red-400 text-sm mt-2">{cpfModalitiesError}</p>
                  )}
                </div>

                <button
                  onClick={handleCPFForModalitiesSubmit}
                  className="w-full bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Acessar Modalidades
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (currentPage === 'all-modalities') {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="bg-black border-b border-gold/20 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <img 
                  src="/Inserir um subtítulo (5).png" 
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
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gold">Nossas Modalidades de Assessoria Jurídica</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escolha a modalidade ideal para suas necessidades jurídicas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modalities.map((modality, index) => {
                const modalityDetail = modalityDetails[modality.name as keyof typeof modalityDetails];
                return (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
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
                      className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
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
                src="/kw-logo.png" 
                alt="KW SOCIEDADE DE ADVOGADOS" 
                className="h-24 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-white hover:text-gold transition-colors">Início</a>
              <a href="#sobre" className="text-white hover:text-gold transition-colors">Sobre</a>
              <a href="#areas" className="text-white hover:text-gold transition-colors">Áreas</a>
              <a href="#modalidades" className="text-white hover:text-gold transition-colors">Modalidades</a>
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
                <a href="#modalidades" className="block py-2 text-white hover:text-gold transition-colors">Modalidades</a>
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
              src="/kw-logo.png" 
              alt="KW SOCIEDADE DE ADVOGADOS" 
              className="h-60 md:h-80 w-auto mx-auto mb-6"
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
              <p className="text-gray-300">Mais de 20 anos de experiência em diversas áreas do direito</p>
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
              <FileText className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Cível</h3>
              <p className="text-gray-300">Ações cíveis, reparação de danos, direitos e deveres civis</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <Home className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Imobiliário</h3>
              <p className="text-gray-300">Compra, venda, locação e regularização de imóveis</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <Shield className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Previdenciário</h3>
              <p className="text-gray-300">Aposentadorias, pensões, benefícios e revisões previdenciárias</p>
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
              <FileText className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Contratos e Negociações</h3>
              <p className="text-gray-300">Elaboração, revisão e negociação de contratos diversos</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <Hammer className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Trabalhista</h3>
              <p className="text-gray-300">Rescisões, verbas trabalhistas e consultoria empresarial</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <HandHeart className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Soluções Extrajudiciais</h3>
              <p className="text-gray-300">Mediação, conciliação e resolução de conflitos sem litígio</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <CreditCard className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito do Consumidor</h3>
              <p className="text-gray-300">Defesa dos direitos do consumidor e relações de consumo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades Section */}
      <section id="modalidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
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
                src="/kw-logo.png" 
                alt="KW SOCIEDADE DE ADVOGADOS" 
                className="h-24 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4">
                Soluções jurídicas modernas e acessíveis para você e sua família.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gold/10 rounded-full w-10 h-10 flex items-center justify-center">
                  <Heart className="text-gold" size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">ÁREAS DE ATUAÇÃO</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Direito Cível</li>
                <li>Direito do Consumidor</li>
                <li>Direito de Família e Sucessões</li>
                <li>Direito Trabalhista</li>
                <li>Direito Previdenciário</li>
                <li>Contratos e Negociações</li>
                <li>Soluções Extrajudiciais</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(21) 99841-7061</li>
                <li>contato@kwadvocacia.com.br</li>
                <li>suporte@kwadvocacia.com.br</li>
                <li>Seg-Sex: 9h às 18h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gold/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KW SOCIEDADE DE ADVOGADOS. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal de Login */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md border border-gold/20 shadow-2xl">
           <div className="mb-6">
             <h2 className="text-2xl font-serif text-white text-center">Área do Cliente</h2>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex justify-center mb-6">
              <img 
                src="/kw-logo.png" 
                alt="KW Advocacia" 
                className="h-20 w-auto"
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
                {loginError && (
                  <p className="text-red-400 text-sm mt-2">{loginError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoggingIn ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                    Verificando...
                  </>
                ) : (
                  <>
                    <Lock size={18} />
                    Entrar
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 space-y-3 text-center">
              <button className="text-gold hover:text-yellow-400 transition-colors text-sm">
                Esqueci minha senha
              </button>
              <div className="text-gray-400 text-sm">
                Ainda não tem cadastro?{' '}
                <button 
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowRegisterModal(true);
                  }}
                  className="text-gold cursor-pointer hover:text-yellow-400 transition-colors"
                >
                  Cadastre-se Aqui
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Cadastro */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md border border-gold/20 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-white">Solicitar Cadastro</h2>
              <button
                onClick={() => setShowRegisterModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex justify-center mb-6">
              <img 
                src="/kw-logo.png" 
                alt="KW Sociedade de Advogados" 
                className="h-24 w-auto"
              />
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={registerData.name}
                  onChange={(e) => handleRegisterInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  value={registerData.email}
                  onChange={(e) => handleRegisterInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  CPF
                </label>
                <input
                  type="text"
                  value={registerData.cpf}
                  onChange={(e) => handleRegisterInputChange('cpf', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                  placeholder="000.000.000-00"
                  maxLength={11}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
              >
                <UserCheck size={18} />
                Solicitar Cadastro
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Sua solicitação será processada em até 24 horas úteis.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Verificação CPF */}
      {showCPFModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md border border-gold/20 shadow-2xl">
            {!showModalityDetails ? (
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
                    src="/kw-logo.png" 
                    alt="KW Advocacia" 
                    className="h-20 w-auto mx-auto mb-6"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      CPF
                    </label>
                    <input
                      type="text"
                      value={cpfInput}
                      onChange={(e) => setCpfInput(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                      placeholder="000.000.000-00"
                      maxLength={11}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Senha
                    </label>
                    <input
                      type="password"
                      value={cpfModalPassword}
                      onChange={(e) => setCpfModalPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Digite sua senha"
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
                  <h2 className="text-2xl font-serif text-white">Modalidade {selectedModality}</h2>
                  <button
                    onClick={closeCPFModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gold mb-2">
                    R$ {modalityDetails[selectedModality as keyof typeof modalityDetails]?.price}
                  </div>
                  <div className="text-gray-400">por mês</div>
                  <div className="text-sm text-gray-500 mt-2">
                    {modalityDetails[selectedModality as keyof typeof modalityDetails]?.description}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {modalities.find(p => p.name === selectedModality)?.benefits.map((benefit, idx) => (
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
                  Quero Esta Modalidade
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