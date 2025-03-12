import React from 'react';

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-teal-600 p-6 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold">IFTM Genesis • Styleguide</h1>
          <p className="mt-2 text-teal-100">
            Guia de estilo e componentes visuais
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        {/* Cores */}
        <section className="mb-12">
          <h2 className="mb-6 border-b pb-2 text-2xl font-bold text-slate-800">
            Paleta de Cores
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <ColorCard color="#0D9488" name="Teal 600" hex="#0D9488" />
            <ColorCard color="#F97316" name="Orange 500" hex="#F97316" />
            <ColorCard color="#6366F1" name="Indigo 500" hex="#6366F1" />
            <ColorCard color="#FCD34D" name="Amber 300" hex="#FCD34D" />
            <ColorCard color="#334155" name="Slate 700" hex="#334155" />
            <ColorCard color="#E2E8F0" name="Slate 200" hex="#E2E8F0" />
            <ColorCard color="#EF4444" name="Red 500" hex="#EF4444" />
            <ColorCard color="#22C55E" name="Green 500" hex="#22C55E" />
          </div>
        </section>

        {/* Tipografia */}
        <section className="mb-12">
          <h2 className="mb-6 border-b pb-2 text-2xl font-bold text-slate-800">
            Tipografia
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-700">
                Fonte Principal
              </h3>
              <p className="rounded border border-slate-200 bg-white p-4 text-black shadow-sm">
                Manrope (sans-serif)
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-700">
                Fonte para Código
              </h3>
              <p className="rounded border border-slate-200 bg-white p-4 text-black shadow-sm">
                Source Code Pro (monospace)
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="mb-2 text-lg font-semibold text-slate-700">
                Hierarquia de Texto
              </h3>
              <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                <h1 className="mb-4 text-4xl font-bold text-slate-900">
                  Título Principal (H1)
                </h1>
                <h2 className="mb-4 text-3xl font-bold text-slate-800">
                  Título Secundário (H2)
                </h2>
                <h3 className="mb-4 text-2xl font-semibold text-slate-800">
                  Título Terciário (H3)
                </h3>
                <h4 className="mb-4 text-xl font-semibold text-slate-700">
                  Subtítulo (H4)
                </h4>
                <p className="mb-4 text-base text-slate-600">
                  Texto de parágrafo (P) - Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Vivamus lacinia odio vitae
                  vestibulum.
                </p>
                <p className="text-sm text-slate-500">
                  Texto pequeno - Informações secundárias e notas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Botões */}
        <section className="mb-12">
          <h2 className="mb-6 border-b pb-2 text-2xl font-bold text-slate-800">
            Botões
          </h2>
          <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="mb-2 text-lg font-semibold text-slate-700">
                  Botões Primários
                </h3>
                <div className="space-y-2">
                  <button className="rounded bg-teal-600 px-5 py-2 font-medium text-white hover:bg-teal-700">
                    Botão Primário
                  </button>
                  <button className="ml-3 cursor-not-allowed rounded bg-teal-600 px-5 py-2 font-medium text-white opacity-50 hover:bg-teal-700">
                    Primário Desabilitado
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="mb-2 text-lg font-semibold text-slate-700">
                  Botões Secundários
                </h3>
                <div className="space-y-2">
                  <button className="rounded bg-orange-500 px-5 py-2 font-medium text-white hover:bg-orange-600">
                    Botão Secundário
                  </button>
                  <button className="ml-3 cursor-not-allowed rounded bg-orange-500 px-5 py-2 font-medium text-white opacity-50 hover:bg-orange-600">
                    Secundário Desabilitado
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="mb-2 text-lg font-semibold text-slate-700">
                  Botões Outline
                </h3>
                <div className="space-y-2">
                  <button className="rounded border border-teal-600 px-5 py-2 font-medium text-teal-600 hover:bg-teal-50">
                    Outline Primário
                  </button>
                  <button className="ml-3 rounded border border-orange-500 px-5 py-2 font-medium text-orange-500 hover:bg-orange-50">
                    Outline Secundário
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="mb-2 text-lg font-semibold text-slate-700">
                  Botões de Tamanhos
                </h3>
                <div className="space-y-2">
                  <button className="rounded bg-teal-600 px-3 py-1 text-sm font-medium text-white">
                    Pequeno
                  </button>
                  <button className="ml-3 rounded bg-teal-600 px-5 py-2 font-medium text-white">
                    Médio
                  </button>
                  <button className="ml-3 rounded bg-teal-600 px-6 py-3 font-medium text-white">
                    Grande
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h2 className="mb-6 border-b pb-2 text-2xl font-bold text-slate-800">
            Cards
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card de Desafio */}
            <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <div className="flex h-40 items-center justify-center bg-slate-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-800">
                    Iniciante
                  </span>
                  <span className="text-sm text-slate-500">5 horas</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-800">
                  Landing Page Responsiva
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  Crie uma landing page responsiva para uma startup de
                  tecnologia usando HTML, CSS e JavaScript.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-indigo-600">350 XP</span>
                  <button className="rounded bg-teal-600 px-3 py-1 text-sm text-white">
                    Começar
                  </button>
                </div>
              </div>
            </div>

            {/* Card de Mentor */}
            <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <div className="flex h-40 items-center justify-center bg-slate-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-slate-800">
                  Ana Silva
                </h3>
                <p className="mb-3 text-sm text-slate-500">
                  Senior Frontend Developer @ Google
                </p>
                <div className="mb-3 flex flex-wrap">
                  <span className="mr-1 mb-1 rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                    React
                  </span>
                  <span className="mr-1 mb-1 rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                    UX/UI
                  </span>
                  <span className="mb-1 rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                    TypeScript
                  </span>
                </div>
                <p className="mb-4 text-sm text-slate-600">
                  Especialista em interfaces modernas e acessíveis com 8 anos de
                  experiência.
                </p>
                <button className="w-full rounded bg-orange-500 py-2 font-medium text-white">
                  Ver Perfil
                </button>
              </div>
            </div>

            {/* Card de Curso/Trilha */}
            <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <div className="flex h-40 items-center justify-center bg-slate-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded bg-amber-100 px-2 py-1 text-xs text-amber-800">
                    Em alta
                  </span>
                  <span className="text-sm text-slate-500">12 projetos</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-800">
                  Desenvolvimento Frontend Completo
                </h3>
                <div className="mb-4 h-2 w-full rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-indigo-500"
                    style={{ width: '35%' }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Progresso: 35%</span>
                  <span className="font-medium text-indigo-600">4250 XP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulários */}
        <section className="mb-12">
          <h2 className="mb-6 border-b pb-2 text-2xl font-bold text-slate-800">
            Elementos de Formulário
          </h2>
          <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="mb-2 text-lg font-semibold text-slate-700">
                  Campos de Texto
                </h3>
                <div className="space-y-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full rounded border border-slate-300 px-3 py-2 text-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded border border-slate-300 px-3 py-2 text-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="mb-2 text-lg font-semibold text-slate-700">
                  Selects e Checkboxes
                </h3>
                <div className="space-y-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Nível de experiência
                    </label>
                    <select className="w-full rounded border border-slate-300 px-3 py-2 text-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none">
                      <option>Iniciante</option>
                      <option>Intermediário</option>
                      <option>Avançado</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="ml-2 text-sm text-slate-700">
                        Receber notificações
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Barra de Navegação */}
        <section className="mb-12">
          <h2 className="mb-6 border-b pb-2 text-2xl font-bold text-slate-800">
            Barra de Navegação
          </h2>
          <div className="rounded border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <span className="text-xl font-bold text-teal-600">
                  IFTM Genesis
                </span>
                <nav className="ml-8 hidden md:flex">
                  <a
                    href="#"
                    className="mx-3 border-b-2 border-teal-600 py-2 font-medium text-slate-800"
                  >
                    Desafios
                  </a>
                  <a
                    href="#"
                    className="mx-3 border-b-2 border-transparent py-2 font-medium text-slate-500 hover:border-teal-600 hover:text-slate-800"
                  >
                    Mentoria
                  </a>
                  <a
                    href="#"
                    className="mx-3 border-b-2 border-transparent py-2 font-medium text-slate-500 hover:border-teal-600 hover:text-slate-800"
                  >
                    Comunidade
                  </a>
                  <a
                    href="#"
                    className="mx-3 border-b-2 border-transparent py-2 font-medium text-slate-500 hover:border-teal-600 hover:text-slate-800"
                  >
                    Blog
                  </a>
                </nav>
              </div>
              <div className="flex items-center">
                <button className="rounded bg-teal-600 px-4 py-2 font-medium text-white">
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Badge e Conquistas */}
        <section className="mb-12">
          <h2 className="mb-6 border-b pb-2 text-2xl font-bold text-slate-800">
            Badges e Conquistas
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center rounded border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-center font-medium text-slate-800">
                Primeiro Desafio
              </h3>
              <p className="mt-1 text-center text-xs text-slate-500">
                Completou seu primeiro desafio
              </p>
            </div>

            <div className="flex flex-col items-center rounded border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="text-center font-medium text-slate-800">
                Mentor Junior
              </h3>
              <p className="mt-1 text-center text-xs text-slate-500">
                Ajudou 5 desenvolvedores
              </p>
            </div>

            <div className="flex flex-col items-center rounded border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-center font-medium text-slate-800">
                Code Master
              </h3>
              <p className="mt-1 text-center text-xs text-slate-500">
                Completou 10 desafios avançados
              </p>
            </div>

            <div className="flex flex-col items-center rounded border border-slate-200 bg-white p-4 opacity-40 shadow-sm">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-center font-medium text-slate-800">
                Bloqueado
              </h3>
              <p className="mt-1 text-center text-xs text-slate-500">
                Complete mais desafios
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Componente auxiliar para exibição de cores
const ColorCard = ({ color, name, hex }) => {
  return (
    <div className="overflow-hidden rounded border border-slate-200 shadow-sm">
      <div className="h-24" style={{ backgroundColor: color }}></div>
      <div className="bg-white p-3">
        <div className="font-medium text-slate-800">{name}</div>
        <div className="text-sm text-slate-500">{hex}</div>
      </div>
    </div>
  );
};

export default StyleGuide;
