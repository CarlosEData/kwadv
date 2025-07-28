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
  Lock as LockIcon,
  DollarSign,
  Scale as ScaleIcon,
  PhoneCall,
  Gift,
  Users as UsersIcon,
} from "lucide-react";

const whatsappNumber = "5521998417061";
const whatsappMessage =
  "Olá, gostaria de obter mais informações sobre os serviços jurídicos da KW Advocacia.";

// Credenciais válidas para acesso às modalidades
const validCredentials = {
  "05232003747": "123456",
  "22299375880": "123456",
};

const openWhatsApp = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, "_blank");
};

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [showCPFModal, setShowCPFModal] = useState(false);
  const [selectedModality, setSelectedModality] = useState<string>("");
  const [cpfInput, setCpfInput] = useState("");
  const [showModalityDetails, setShowModalityDetails] = useState(false);
  const [cpfError, setCpfError] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ emailOrCpf: "", password: "" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cpfForModalities, setCpfForModalities] = useState("");
  const [cpfModalitiesError, setCpfModalitiesError] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    cpf: "",
  });
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [cpfModalPassword, setCpfModalPassword] = useState("");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    setTimeout(() => {
      const cpf = loginData.emailOrCpf.replace(/\D/g, "");
      const password = loginData.password;

      if (validCredentials[cpf] && validCredentials[cpf] === password) {
        setShowLoginModal(false);
        setCurrentPage("all-modalities");
        setLoginData({ emailOrCpf: "", password: "" });
        setLoginError("");
      } else {
        setLoginError(
          "Dados inválidos. Apenas clientes cadastrados podem acessar esta área."
        );
        setTimeout(() => {
          setShowLoginModal(false);
          setCurrentPage("home");
          setLoginData({ emailOrCpf: "", password: "" });
          setLoginError("");
        }, 2500);
      }
      setIsLoggingIn(false);
    }, 1000);
  };

  const handleLoginInputChange = (field: string, value: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastro enviado:", registerData);
    setShowRegisterModal(false);
    setRegisterData({ name: "", email: "", cpf: "" });
  };

  const handleRegisterInputChange = (field: string, value: string) => {
    setRegisterData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCPFForModalitiesSubmit = () => {
    const cleanCPF = cpfForModalities.replace(/\D/g, "");
    const password = cpfModalPassword;

    if (validCredentials[cleanCPF] && validCredentials[cleanCPF] === password) {
      setCurrentPage("all-modalities");
      setCpfModalitiesError("");
      setCpfForModalities("");
      setCpfModalPassword("");
    } else {
      setCpfModalitiesError(
        "Dados inválidos. Apenas clientes cadastrados podem acessar esta área."
      );
      setTimeout(() => {
        setCurrentPage("home");
        setCpfForModalities("");
        setCpfModalPassword("");
        setCpfModalitiesError("");
      }, 1500);
    }
  };

  const handleCPFSubmit = () => {
    const cleanCPF = cpfInput.replace(/\D/g, "");
    const password = cpfModalPassword;

    if (cleanCPF.length !== 11) {
      setCpfError("CPF deve conter 11 dígitos");
      return;
    }

    if (validCredentials[cleanCPF] && validCredentials[cleanCPF] === password) {
      setShowModalityDetails(true);
      setCpfError("");
    } else {
      setCpfError(
        "Dados inválidos. Apenas clientes cadastrados podem acessar esta área."
      );
      setTimeout(() => {
        setShowCPFModal(false);
        setCpfError("");
        setCpfInput("");
        setCpfModalPassword("");
      }, 2000);
    }
  };

  const closeCPFModal = () => {
    setShowCPFModal(false);
    setShowModalityDetails(false);
    setCpfInput("");
    setCpfModalPassword("");
    setCpfError("");
    setSelectedModality("");
  };

  const modalities = [
    {
      name: "Essencial",
      benefits: [
        "Consultas jurídicas ilimitadas por WhatsApp ou e-mail",
        "1 atendimento ao vivo por mês (online)",
        "Análise, revisão e confecção de 1 contrato por mês",
        "10% de desconto em ações judiciais",
      ],
    },
    {
      name: "Avançado",
      benefits: [
        "Consultas jurídicas ilimitadas por WhatsApp ou e-mail",
        "3 atendimentos ao vivo por mês (online)",
        "20% de desconto em ações judiciais",
        "Orientação para elaboração de documentos simples",
        "Análise, revisão e confecções de 3 contratos por mês",
        "Até 2 demandas por ano incluídas no plano",
      ],
    },
    {
      name: "Premium",
      benefits: [
        "Consultas jurídicas ilimitadas por WhatsApp ou e-mail",
        "5 atendimentos ao vivo por mês (online)",
        "30% de desconto em ações judiciais",
        "Orientação para elaboração de documentos simples",
        "Análise, revisão e confecções de 5 contratos por mês",
        "Até 5 demandas por ano incluídas no plano",
      ],
    },
    {
      name: "Familiar",
      benefits: [
        "Consultas jurídicas ilimitadas por WhatsApp ou e-mail",
        "5 atendimentos ao vivo por mês (online)",
        "30% de desconto em ações judiciais",
        "Orientação para elaboração de documentos simples",
        "Análise, revisão e confecções de 5 contratos por mês",
        "Até 5 demandas por ano incluídas no plano",
      ],
    },
  ];

  const modalityDetails = {
    Essencial: {
      price: "97",
      description:
        "Indicado para: Profissionais que querem suporte jurídico preventivo e acesso inicial à estrutura",
    },
    Avançado: {
      price: "159",
      description:
        "Indicado para: Quem deseja acompanhamento jurídico mais próximo e prioridade no atendimento.",
    },
    Premium: {
      price: "249",
      description:
        "Indicado para: Profissionais que querem cobertura jurídica ampla e atendimento personalizado.",
    },
    Familiar: {
      price: "389",
      description:
        "Proteção Jurídica para Quem Você Ama. Cônjuge ou companheiro(a) Até 2 filhos ou dependentes diretos Possibilidade de incluir mais dependentes por R$ 49/mês por pessoa adicional",
    },
  };

  // Login Page
  if (currentPage === "login") {
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
                Voltar
              </button>
            </div>
          </div>
        </header>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gold/20 shadow-2xl">
              <div className="text-center mb-8">
                <img src="/kw-logo.png" alt="KW Advocacia" className="h-16 w-auto" />
                <h1 className="text-3xl font-serif mb-4 text-gold">Login</h1>
                <p className="text-gray-300">Digite seu CPF para acessar as modalidades</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">CPF</label>
                  <input
                    type="text"
                    value={cpfForModalities}
                    onChange={(e) => setCpfForModalities(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    placeholder="000.000.000-00"
                    maxLength={11}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
                  <input
                    type="password"
                    value={cpfModalPassword}
                    onChange={(e) => setCpfModalPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    placeholder="Digite sua senha"
                  />
                  {cpfModalitiesError && (
                    <p className="text-red-400 text-sm mt-2">{cpfModalitiesError}</p>
                  )}
                </div>
                <button
                  onClick={handleCPFForModalitiesSubmit}
                  className="w-full bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-400"
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
                  modalityDetails[modality.name as keyof typeof modalityDetails];
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
        {/* New FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black flex items-center justify-center">
                <HelpCircle className="mr-2" size={32} /> Perguntas que as pessoas costumam ter ao pensar em contratar um plano jurídico:
              </h2>
              <p className="text-xl text-gray-600">
                Entenda mais sobre como nossos planos podem ajudar você
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  question: "1. Mas eu não estou com nenhum problema agora. Por que teria um plano jurídico?",
                  answer: "Porque o plano jurídico atua preventivamente. Assim como você tem um plano de saúde mesmo quando está bem, o plano jurídico resolve questões antes que virem dores de cabeça — e te orienta em qualquer dúvida do dia a dia: contratos, dívidas, trabalho, condomínio, vizinho, bancos, etc.",
                },
                {
                  question: "2. Esse plano cobre tudo? E se eu precisar entrar com um processo?",
                  answer: "Depende do plano escolhido. No plano básico, você tem orientação completa e consultas ilimitadas. Nos planos mais completos, você tem direito a ações judiciais inclusas, com honorários contratuais pagos pelo plano (exceto taxas e custas).",
                },
                {
                  question: "3. E se eu quiser cancelar depois?",
                  answer: "Você pode cancelar quando quiser, sem fidelidade. Mas atenção: quanto mais tempo você fica, mais benefícios você acumula.",
                },
                {
                  question: "4. Qual a diferença entre esse plano e contratar um advogado direto?",
                  answer: "O plano jurídico te dá acesso contínuo e imediato a um consultor jurídico. Você não precisa pagar toda vez que tiver uma dúvida ou para revisar um documento — é tudo incluído. Além disso, sai muito mais barato do que contratar por demanda.",
                },
                {
                  question: "5. Vocês resolvem problemas de que tipo?",
                  answer: "De tudo que faz parte da sua vida: Dúvidas trabalhistas Questões familiares (divórcio, guarda, pensão) Direito do consumidor Cobrança indevida Nome sujo injustamente Dificuldade com banco, aluguel, vizinhos, contratos Ações judiciais (conforme plano) Orientações, documentos, multas etc.",
                },
              ].map((faq, index) => (
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
        {/* New Advantages Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black flex items-center justify-center">
                <CheckCircle className="mr-2" size={32} /> VANTAGENS:
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça os benefícios de contar com nosso suporte jurídico contínuo
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="text-gold" size={32} />,
                  title: "1. Segurança jurídica todos os dias",
                  text: "Você tem um advogado sempre pronto para tirar suas dúvidas e te orientar, sem pagar consulta toda vez.",
                },
                {
                  icon: <DollarSign className="text-gold" size={32} />,
                  title: "2. Economia real",
                  text: "Em vez de arcar com honorários altos e imprevistos quando surgir um problema, você planeja seu orçamento com um valor fixo mensal e tem suporte jurídico sempre que precisar.",
                },
                {
                  icon: <Scale className="text-gold" size={32} />,
                  title: "3. Acesso à Justiça garantido",
                  text: "Com o plano, você tem um time ao seu lado — orientando preventivamente no dia a dia e pronto para atuar formalmente quando necessário. Acesso à Justiça com segurança, estratégia e respaldo profissional.",
                },
                {
                  icon: <Phone className="text-gold" size={32} />,
                  title: "4. Atendimento rápido, direto e sem enrolação",
                  text: "Nada de espera ou burocracia. Você tem um canal exclusivo com atendimento jurídico de verdade, sempre.",
                },
                {
                  icon: <Gift className="text-gold" size={32} />,
                  title: "5. Benefícios acumulativos",
                  text: "Quanto mais tempo no plano, mais vantagens.",
                },
                {
                  icon: <Users className="text-gold" size={32} />,
                  title: "6. Proteção para sua família também",
                  text: "Planos com cobertura estendida permitem que seus familiares também tenham apoio jurídico direto, sem burocracia, sempre que precisarem.",
                },
              ].map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">{advantage.icon}</div>
                  <div>
                    <h3 className="font-bold text-black mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{advantage.text}</p>
                  </div>
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

  // Home Page
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black border-b border-gold/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/kw-logo.png" alt="KW Advocacia" className="h-24 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-white hover:text-gold transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-white hover:text-gold transition-colors">
                Sobre
              </a>
              <a href="#areas" className="text-white hover:text-gold transition-colors">
                Áreas
              </a>
              <a href="#modalidades" className="text-white hover:text-gold transition-colors">
                Modalidades
              </a>
              <a href="#contato" className="text-white hover:text-gold transition-colors">
                Contato
              </a>
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
          {isMenuOpen && (
            <div className="md:hidden">
              <nav className="px-2 pt-2 pb-3 space-y-1 border-t border-gold/20">
                <a href="#inicio" className="block py-2 text-white hover:text-gold">
                  Início
                </a>
                <a href="#sobre" className="block py-2 text-white hover:text-gold">
                  Sobre
                </a>
                <a href="#areas" className="block py-2 text-white hover:text-gold">
                  Áreas
                </a>
                <a href="#modalidades" className="block py-2 text-white hover:text-gold">
                  Modalidades
                </a>
                <a href="#contato" className="block py-2 text-white hover:text-gold">
                  Contato
                </a>
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="block py-2 text-white hover:text-gold text-left flex items-center gap-2"
                >
                  <User size={18} />
                  Área do Cliente
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
      <section id="inicio" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img src="/kw-logo.png" alt="KW Advocacia" className="h-60 md:h-80 w-auto mx-auto mb-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-gold">
            Advocacia Digital de Excelência
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Soluções jurídicas modernas e acessíveis
          </p>
          <button
            onClick={openWhatsApp}
            className="bg-gold text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Fale Conosco Agora
          </button>
        </div>
      </section>
      <section id="sobre" className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">Quem Somos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A KW Advocacia Digital combina tradição jurídica com inovação
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Experiência</h3>
              <p className="text-gray-300">Mais de 20 anos em diversas áreas do direito</p>
            </div>
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Atendimento</h3>
              <p className="text-gray-300">Atendimento personalizado e humanizado</p>
            </div>
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Excelência</h3>
              <p className="text-gray-300">Compromisso com qualidade e resultados</p>
            </div>
          </div>
        </div>
      </section>
      <section id="areas" className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">Áreas de Atuação</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serviços especializados em diversas áreas do direito
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40">
              <FileText className="text-gold mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Cível</h3>
              <p className="text-gray-300">Ações cíveis, reparação de danos</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40">
              <Home className="text-gold mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Imobiliário</h3>
              <p className="text-gray-300">Compra, venda, locação de imóveis</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40">
              <Shield className="text-gold mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Previdenciário</h3>
              <p className="text-gray-300">Aposentadorias, pensões, benefícios</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40">
              <Building className="text-gold mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Empresarial</h3>
              <p className="text-gray-300">Constituição de empresas, contratos</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40">
              <Baby className="text-gold mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito de Família</h3>
              <p className="text-gray-300">Divórcio, guarda, pensão alimentícia</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40">
              <FileText className="text-gold mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Contratos e Negociações</h3>
              <p className="text-gray-300">Elaboração, revisão de contratos</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40">
              <Hammer className="text-gold mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito Trabalhista</h3>
              <p className="text-gray-300">Rescisões, verbas trabalhistas</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40">
              <HandHeart className="text-gold mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Soluções Extrajudiciais</h3>
              <p className="text-gray-300">Mediação, conciliação</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40">
              <CreditCard className="text-gold mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-3 text-gold">Direito do Consumidor</h3>
              <p className="text-gray-300">Defesa dos direitos do consumidor</p>
            </div>
          </div>
        </div>
      </section>
      <section id="modalidades" className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">
              Modalidade de Acompanhamento Jurídico
            </h2>
            <div className="mt-8">
              <button
                onClick={() => navigateTo("login")}
                className="bg-gold text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 inline-flex items-center gap-2"
              >
                <User size={20} />
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-300">Tire suas dúvidas sobre nossos serviços</p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Como funciona o atendimento jurídico?",
                answer:
                  "Oferecemos atendimento personalizado através de consultas presenciais, por telefone, WhatsApp e videochamada.",
              },
              {
                question: "Quais documentos preciso levar para a consulta?",
                answer:
                  "Os documentos necessários variam conforme o tipo de questão jurídica.",
              },
              {
                question: "Os atendimentos são presenciais?",
                answer:
                  "Sim, oferecemos atendimentos presenciais em nosso escritório, além de consultas digitais.",
              },
              {
                question: "Como agendar uma consulta?",
                answer:
                  "Você pode agendar sua consulta através do nosso WhatsApp, telefone ou e-mail.",
              },
              {
                question: "Qual o prazo para resolução dos casos?",
                answer:
                  "O prazo varia conforme a complexidade e natureza de cada caso.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-gold/20">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800"
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
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contato" className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">Entradas</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Estamos prontos para ajudar com suas questões jurídicas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Telefone</h3>
              <p className="text-gray-400">(21) 99841-7069</p>
            </div>
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Email</h3>
              <p className="text-gray-400">contato@kwadvocacia.com.br</p>
            </div>
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gold">Horário</h3>
              <p className="text-gray-400">Seg-Sex: 9h-17h</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={openWhatsApp}
              className="bg-gold text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-black border-t border-gray-800/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src="/kw-logo.png" alt="KW Advocacia" className="h-24 w-auto mb-6" />
              <p className="text-gray-400 mb-6">
                Soluções jurídicas modernas e acessíveis
              </p>
              <div className="flex space-x-4">
                <div className="bg-gold/10 rounded-full w-10 h-10 flex items-center justify-center">
                  <Heart className="text-gold" size={20} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Áreas de Atuação</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Direito Cível</li>
                <li>Direito do Consumidor</li>
                <li>Direito de Família</li>
                <li>Direito Trabalhista</li>
                <li>Direito Previdenciário</li>
                <li>Contratos e Negociações</li>
                <li>Soluções Extrajudiciais</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(21) 99841-7069</li>
                <li>contato@kwadvocacia.com.br</li>
                <li>suporte@kwadvocacia.com.br</li>
                <li>Seg-Sex: 9h-17h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/20 mt-4 pt-4 text-center text-gray-400">
            <p>&copy; 2023 KW Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-gold/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-white">Área do Cliente</h2>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex justify-center mb-6">
              <img src="/kw-logo.png" alt="KW Advocacia" className="h-16 w-auto" />
            </div>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email ou CPF
                </label>
                <input
                  type="text"
                  value={loginData.emailOrCpf}
                  onChange={(e) => handleLoginInputChange("emailOrCpf", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-white"
                  placeholder="Digite seu email ou CPF"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => handleLoginInputChange("password", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-white"
                  placeholder="Digite sua senha"
                  required
                />
                {loginError && <p className="text-red-400 text-sm mt-2">{loginError}</p>}
              </div>
              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full bg-gold text-black font-semibold py-2 rounded-lg hover:bg-yellow-400 disabled:opacity-50"
              >
                {isLoggingIn ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent mr-2"></div>
                    Verificando...
                  </div>
                ) : (
                  "Entrar"
                )}
              </button>
            </form>
            <div className="mt-4 text-center">
              <button className="text-gold hover:text-yellow-400 text-sm">
                Esqueci minha senha
              </button>
              <p className="text-gray-300 text-sm mt-2">
                Não tem cadastro?{" "}
                <button
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowRegisterModal(true);
                  }}
                  className="text-gold hover:text-yellow-400"
                >
                  Cadastre-se
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-gold/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-white">Solicitar Cadastro</h2>
              <button
                onClick={() => setShowRegisterModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex justify-center mb-6">
              <img src="/kw-logo.png" alt="KW Advocacia" className="h-16 w-auto" />
            </div>
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={registerData.name}
                  onChange={(e) => handleRegisterInputChange("name", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-white"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={registerData.email}
                  onChange={(e) => handleRegisterInputChange("email", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-white"
                  placeholder="Digite seu email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">CPF</label>
                <input
                  type="text"
                  value={registerData.cpf}
                  onChange={(e) => handleRegisterInputChange("cpf", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-white"
                  placeholder="000.000.000-00"
                  maxLength={14}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-black font-semibold py-2 rounded-lg hover:bg-yellow-400"
              >
                Solicitar Cadastro
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-gray-300 text-sm">
                Sua solicitação será processada em até 24 horas úteis.
              </p>
            </div>
          </div>
        </div>
      )}
      {showCPFModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-gold/20">
            {!showModalityDetails ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif text-white">Verificação de Cliente</h2>
                  <button
                    onClick={closeCPFModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="flex justify-center mb-6">
                  <img src="/kw-logo.png" alt="KW Advocacia" className="h-16 w-auto" />
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">CPF</label>
                    <input
                      type="text"
                      value={cpfInput}
                      onChange={(e) => setCpfInput(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-white"
                      placeholder="000.000.000-00"
                      maxLength={14}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
                    <input
                      type="password"
                      value={cpfModalPassword}
                      onChange={(e) => setCpfModalPassword(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-white"
                      placeholder="Digite sua senha"
                    />
                    {cpfError && <p className="text-red-400 text-sm mt-2">{cpfError}</p>}
                  </div>
                  <button
                    onClick={handleCPFSubmit}
                    className="w-full bg-gold text-black font-semibold py-2 rounded-lg hover:bg-yellow-400"
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
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="flex justify-center mb-6">
                  <img src="/kw-logo.png" alt="KW Advocacia" className="h-16 w-auto" />
                </div>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gold mb-2">
                    R$ {modalityDetails[selectedModality as keyof typeof modalityDetails]?.price}
                  </div>
                  <div className="text-gray-600 text-sm">por mês</div>
                  <div className="text-xs text-gray-500 mt-2">
                    {modalityDetails[selectedModality as keyof typeof modalityDetails]?.description}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {modalities
                    .find((p) => p.name === selectedModality)
                    ?.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="text-gold mr-2" size={16} />
                        {benefit}
                      </li>
                    ))}
                </ul>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-gold text-black font-semibold py-2 rounded-lg hover:bg-yellow-400"
                >
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
